'use client';

interface TheoryViewerProps {
  content: string;
}

export function TheoryViewer({ content }: TheoryViewerProps) {
  // Simple markdown-like rendering for MVP
  // In production, use a proper markdown renderer like react-markdown
  const renderContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      // Headings
      if (line.startsWith('### ')) {
        return (
          <h3
            key={index}
            className="text-lg font-semibold mt-6 mb-3"
            style={{ color: 'var(--color-text)' }}
          >
            {line.slice(4)}
          </h3>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2
            key={index}
            className="text-xl font-bold mt-8 mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            {line.slice(3)}
          </h2>
        );
      }
      if (line.startsWith('# ')) {
        return (
          <h1
            key={index}
            className="text-2xl font-bold mt-8 mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            {line.slice(2)}
          </h1>
        );
      }
      // Lists
      if (line.startsWith('- ')) {
        return (
          <li
            key={index}
            className="ml-4 list-disc"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {renderInlineMarkdown(line.slice(2))}
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        return (
          <li
            key={index}
            className="ml-4 list-decimal"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {renderInlineMarkdown(line.replace(/^\d+\.\s/, ''))}
          </li>
        );
      }
      // Code blocks (simplified)
      if (line.startsWith('```')) {
        return null; // Skip fence markers
      }
      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }
      // Regular paragraphs
      return (
        <p key={index} className="my-2" style={{ color: 'var(--color-text-secondary)' }}>
          {renderInlineMarkdown(line)}
        </p>
      );
    });
  };

  const renderInlineMarkdown = (text: string) => {
    // Bold
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong style="color: var(--color-text)">$1</strong>');
    // Inline code - use CSS variable inline
    text = text.replace(
      /`(.+?)`/g,
      '<code style="background-color: var(--color-bg-tertiary); color: var(--ctp-pink); padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-size: 0.875rem;">$1</code>'
    );
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <article className="prose max-w-none">
      <div
        className="rounded-lg p-6 sm:p-8"
        style={{ backgroundColor: 'var(--color-bg-elevated)' }}
      >
        {renderContent(content)}
      </div>
    </article>
  );
}
