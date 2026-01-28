'use client';

import React from 'react';

/**
 * Unified Markdown Renderer
 *
 * This utility provides consistent markdown rendering across all slide components:
 * - TheorySlide
 * - PracticeSlide
 * - ExerciseTimerModal
 *
 * Supported elements:
 * - Headings (# ## ###)
 * - Horizontal rules (---, ***, ___)
 * - Tables (| header | header |)
 * - Blockquotes (> text) with nested tables
 * - Lists (- item, 1. item)
 * - Checkboxes (- [ ] or - [x])
 * - Code blocks (```)
 * - Details/summary (<details>)
 * - Inline formatting (**bold**, `code`)
 */

// Render inline markdown (bold, italic, code)
export function renderInlineMarkdown(text: string): React.ReactNode {
  let processed = text;

  // Bold: **text** - only with asterisks (not underscores, to preserve ________ blanks)
  processed = processed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Italic: *text* (single asterisk only, not underscore to preserve ________ blanks)
  // Match *text* where text contains at least one letter/number (not just spaces/punctuation)
  processed = processed.replace(/(?<![*\w])\*([^*]*[a-zA-ZÀ-ÿ0-9][^*]*)\*(?![*\w])/g, '<em>$1</em>');

  // Inline code: `text`
  processed = processed.replace(
    /`(.+?)`/g,
    '<code style="background-color: var(--color-bg-tertiary); padding: 0 0.25rem; border-radius: 0.25rem; font-size: 0.875rem;">$1</code>'
  );

  return <span dangerouslySetInnerHTML={{ __html: processed }} />;
}

// Render a markdown table
export function renderTable(tableLines: string[], keyPrefix: string | number): React.ReactNode {
  const rows = tableLines.map(line =>
    line.split('|').filter(cell => cell.trim() !== '').map(cell => cell.trim())
  );

  if (rows.length < 2) return null;

  const headerRow = rows[0];
  const dataRows = rows.slice(2); // Skip separator row

  return (
    <div key={`table-${keyPrefix}`} className="my-4 overflow-x-auto">
      <table className="min-w-full border-collapse" style={{ borderColor: 'var(--color-border-light)' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
            {headerRow.map((cell, i) => (
              <th
                key={i}
                className="px-4 py-2 text-left text-sm font-semibold"
                style={{
                  color: 'var(--color-text)',
                  borderWidth: '1px',
                  borderColor: 'var(--color-border-light)'
                }}
              >
                {renderInlineMarkdown(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 text-sm"
                  style={{
                    color: 'var(--color-text-secondary)',
                    borderWidth: '1px',
                    borderColor: 'var(--color-border-light)'
                  }}
                >
                  {renderInlineMarkdown(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Check if a line is a table separator (|---|---|)
function isTableSeparator(line: string): boolean {
  return line.includes('|') && line.includes('-') && /\|[\s-]+\|/.test(line);
}

// Check if a line starts a table
function isTableStart(line: string, nextLine: string | undefined): boolean {
  return line.trim().startsWith('|') && nextLine !== undefined && isTableSeparator(nextLine);
}

interface RenderMarkdownOptions {
  skipFirstHeading?: boolean; // Skip the first # heading (already shown in header)
}

/**
 * Main markdown rendering function
 * Converts markdown content to React elements
 */
export function renderMarkdownContent(
  content: string,
  options: RenderMarkdownOptions = {}
): React.ReactNode[] {
  const { skipFirstHeading = false } = options;
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;
  let skippedFirstH1 = false;

  while (i < lines.length) {
    const line = lines[i];
    const nextLine = lines[i + 1];

    // Skip the first # title line if requested
    if (skipFirstHeading && !skippedFirstH1 && line.startsWith('# ')) {
      skippedFirstH1 = true;
      i++;
      continue;
    }

    // Horizontal rule / separator
    if (line.trim() === '---' || line.trim() === '***' || line.trim() === '___') {
      elements.push(
        <hr
          key={`hr-${i}`}
          className="my-6"
          style={{ borderColor: 'var(--color-border-light)' }}
        />
      );
      i++;
      continue;
    }

    // Table detection: starts with | and next line is separator
    if (isTableStart(line, nextLine)) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const table = renderTable(tableLines, elements.length);
      if (table) elements.push(table);
      continue;
    }

    // Blockquotes (lines starting with >)
    if (line.startsWith('>') || line.startsWith('> ')) {
      const blockquoteLines: string[] = [];
      while (i < lines.length && (lines[i].startsWith('>') || lines[i].startsWith('> '))) {
        blockquoteLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }

      // Check if blockquote contains a table
      const hasTable = blockquoteLines.some((l, idx) =>
        l.trim().startsWith('|') && blockquoteLines[idx + 1] && isTableSeparator(blockquoteLines[idx + 1])
      );

      if (hasTable) {
        // Render blockquote with table support
        const blockquoteContent: React.ReactNode[] = [];
        let bqIdx = 0;

        while (bqIdx < blockquoteLines.length) {
          const bqLine = blockquoteLines[bqIdx];
          const bqNextLine = blockquoteLines[bqIdx + 1];

          // Detect table start within blockquote
          if (bqLine.trim().startsWith('|') && bqNextLine && isTableSeparator(bqNextLine)) {
            const tableLines: string[] = [];
            while (bqIdx < blockquoteLines.length && blockquoteLines[bqIdx].trim().startsWith('|')) {
              tableLines.push(blockquoteLines[bqIdx]);
              bqIdx++;
            }
            const table = renderTable(tableLines, `bq-${elements.length}-${bqIdx}`);
            if (table) blockquoteContent.push(table);
            continue;
          }

          // Regular blockquote line
          if (bqLine.trim()) {
            blockquoteContent.push(
              <p key={`bq-line-${bqIdx}`} className="my-1" style={{ color: 'var(--color-text-secondary)' }}>
                {renderInlineMarkdown(bqLine)}
              </p>
            );
          }
          bqIdx++;
        }

        elements.push(
          <blockquote
            key={`blockquote-${elements.length}`}
            className="my-4 pl-4 py-2"
            style={{
              borderLeftWidth: '3px',
              borderLeftColor: 'var(--color-primary)',
              backgroundColor: 'var(--color-bg-tertiary)',
              borderRadius: '0 0.5rem 0.5rem 0',
            }}
          >
            {blockquoteContent}
          </blockquote>
        );
      } else {
        // Simple blockquote without table
        elements.push(
          <blockquote
            key={`blockquote-${elements.length}`}
            className="my-4 pl-4 py-2 italic"
            style={{
              borderLeftWidth: '3px',
              borderLeftColor: 'var(--color-primary)',
              backgroundColor: 'var(--color-bg-tertiary)',
              borderRadius: '0 0.5rem 0.5rem 0',
            }}
          >
            {blockquoteLines.map((bqLine, idx) => (
              <p key={idx} className="my-1" style={{ color: 'var(--color-text-secondary)' }}>
                {renderInlineMarkdown(bqLine)}
              </p>
            ))}
          </blockquote>
        );
      }
      continue;
    }

    // H1 headings
    if (line.startsWith('# ') && !line.startsWith('## ')) {
      elements.push(
        <h1
          key={`h1-${i}`}
          className="text-2xl font-bold mt-6 mb-4"
          style={{ color: 'var(--color-text)' }}
        >
          {line.slice(2)}
        </h1>
      );
      i++;
      continue;
    }

    // H2 headings
    if (line.startsWith('## ') && !line.startsWith('### ')) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-xl font-bold mt-6 mb-3"
          style={{ color: 'var(--color-text)' }}
        >
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3 headings
    if (line.startsWith('### ')) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-lg font-semibold mt-6 mb-3"
          style={{ color: 'var(--color-text)' }}
        >
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Checkboxes: - [ ] or - [x] or [ ] or [x]
    if (line.match(/^-?\s*\[[ x]\]\s*/)) {
      const isChecked = line.includes('[x]');
      const text = line.replace(/^-?\s*\[[ x]\]\s*/, '');
      elements.push(
        <div key={`checkbox-${i}`} className="flex items-start gap-2 my-1">
          <span style={{ color: isChecked ? 'var(--color-green)' : 'var(--color-subtext)' }}>
            {isChecked ? '☑' : '☐'}
          </span>
          <span style={{ color: 'var(--color-text-secondary)' }}>
            {renderInlineMarkdown(text)}
          </span>
        </div>
      );
      i++;
      continue;
    }

    // Unordered lists
    if (line.startsWith('- ')) {
      elements.push(
        <li
          key={`ul-${i}`}
          className="ml-4 list-disc"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {renderInlineMarkdown(line.slice(2))}
        </li>
      );
      i++;
      continue;
    }

    // Ordered lists
    if (/^\d+\.\s/.test(line)) {
      elements.push(
        <li
          key={`ol-${i}`}
          className="ml-4 list-decimal"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {renderInlineMarkdown(line.replace(/^\d+\.\s/, ''))}
        </li>
      );
      i++;
      continue;
    }

    // Code blocks
    if (line.startsWith('```')) {
      const codeLines: string[] = [];
      i++; // Skip opening ```
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // Skip closing ```

      if (codeLines.length > 0) {
        elements.push(
          <pre
            key={`code-${elements.length}`}
            className="my-4 p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre"
            style={{
              backgroundColor: 'var(--color-bg-tertiary)',
              color: 'var(--color-text-secondary)',
              borderWidth: '1px',
              borderColor: 'var(--color-border-light)',
            }}
          >
            <code>{codeLines.join('\n')}</code>
          </pre>
        );
      }
      continue;
    }

    // Details/summary (collapsible sections)
    if (line.startsWith('<details>')) {
      const detailsLines: string[] = [];
      let summaryText = 'Détails';
      i++; // Skip <details>
      while (i < lines.length && !lines[i].includes('</details>')) {
        if (lines[i].includes('<summary>')) {
          const match = lines[i].match(/<summary>(.+?)<\/summary>/);
          if (match) summaryText = match[1];
        } else {
          detailsLines.push(lines[i]);
        }
        i++;
      }
      i++; // Skip </details>

      elements.push(
        <details
          key={`details-${elements.length}`}
          className="my-4 rounded-lg overflow-hidden"
          style={{
            backgroundColor: 'var(--color-bg-tertiary)',
            borderWidth: '1px',
            borderColor: 'var(--color-border-light)',
          }}
        >
          <summary
            className="px-4 py-3 cursor-pointer font-medium"
            style={{ color: 'var(--color-text)' }}
          >
            {summaryText}
          </summary>
          <div className="px-4 py-3" style={{ borderTopWidth: '1px', borderTopColor: 'var(--color-border-light)' }}>
            {detailsLines.filter(l => l.trim()).map((detailLine, idx) => (
              <p key={idx} className="my-1" style={{ color: 'var(--color-text-secondary)' }}>
                {renderInlineMarkdown(detailLine)}
              </p>
            ))}
          </div>
        </details>
      );
      continue;
    }

    // Empty lines
    if (line.trim() === '') {
      elements.push(<br key={`br-${i}`} />);
      i++;
      continue;
    }

    // Regular paragraphs
    elements.push(
      <p
        key={`p-${i}`}
        className="my-2 leading-relaxed"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {renderInlineMarkdown(line)}
      </p>
    );
    i++;
  }

  return elements;
}
