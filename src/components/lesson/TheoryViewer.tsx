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
          <h3 key={index} className="text-lg font-semibold mt-6 mb-3">
            {line.slice(4)}
          </h3>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-xl font-bold mt-8 mb-4">
            {line.slice(3)}
          </h2>
        );
      }
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-2xl font-bold mt-8 mb-4">
            {line.slice(2)}
          </h1>
        );
      }
      // Lists
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-4 list-disc">
            {renderInlineMarkdown(line.slice(2))}
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        return (
          <li key={index} className="ml-4 list-decimal">
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
        <p key={index} className="my-2">
          {renderInlineMarkdown(line)}
        </p>
      );
    });
  };

  const renderInlineMarkdown = (text: string) => {
    // Bold
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Inline code
    text = text.replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm">$1</code>');
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <article className="prose prose-gray max-w-none">
      <div className="bg-white rounded-lg p-6 sm:p-8">{renderContent(content)}</div>
    </article>
  );
}
