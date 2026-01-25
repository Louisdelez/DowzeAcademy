'use client';

import { useState, useCallback } from 'react';
import { Search, X, ExternalLink, Check } from 'lucide-react';

interface SearchEngine {
  name: string;
  icon: string;
  url: string;
  searchParam: string;
}

const SEARCH_ENGINES: SearchEngine[] = [
  {
    name: 'Google',
    icon: '🔍',
    url: 'https://www.google.com/search',
    searchParam: 'q',
  },
  {
    name: 'YouTube',
    icon: '▶️',
    url: 'https://www.youtube.com/results',
    searchParam: 'search_query',
  },
  {
    name: 'TikTok',
    icon: '🎵',
    url: 'https://www.tiktok.com/search',
    searchParam: 'q',
  },
  {
    name: 'Bing',
    icon: '🅱️',
    url: 'https://www.bing.com/search',
    searchParam: 'q',
  },
  {
    name: 'DuckDuckGo',
    icon: '🦆',
    url: 'https://duckduckgo.com/',
    searchParam: 'q',
  },
  {
    name: 'Qwant',
    icon: '🔎',
    url: 'https://www.qwant.com/',
    searchParam: 'q',
  },
];

interface SearchPromptButtonProps {
  domainName: string;
  disciplineName: string;
  moduleName: string;
}

export function SearchPromptButton({
  domainName,
  disciplineName,
  moduleName,
}: SearchPromptButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Generate a search-optimized query with keywords
  const generateSearchQuery = useCallback(() => {
    // Only include chapter (discipline) and point (module)
    const query = `${disciplineName} ${moduleName}`
      .replace(/['"]/g, '') // Remove quotes
      .trim();

    return query;
  }, [disciplineName, moduleName]);

  const searchQuery = generateSearchQuery();

  const handleOpenModal = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(searchQuery);
      setIsCopied(true);
      setIsOpen(true);

      // Reset copied state after 3 seconds
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy search query:', error);
      setIsOpen(true);
    }
  }, [searchQuery]);

  const handleEngineClick = (engine: SearchEngine) => {
    const url = `${engine.url}?${engine.searchParam}=${encodeURIComponent(searchQuery)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsCopied(false);
  };

  return (
    <>
      {/* Floating Search Button */}
      <button
        onClick={handleOpenModal}
        className="fixed top-40 right-4 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
        style={{
          background: 'linear-gradient(135deg, var(--ctp-green), var(--ctp-teal))',
          color: 'var(--ctp-base)',
        }}
        title="Rechercher sur le web"
        aria-label="Ouvrir la recherche web"
      >
        <Search className="w-6 h-6" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={handleClose}
        >
          {/* Modal Content */}
          <div
            className="relative w-full max-w-md rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200"
            style={{
              backgroundColor: 'var(--color-bg-elevated)',
              borderWidth: '1px',
              borderColor: 'var(--color-border-light)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 rounded-lg transition-colors hover:bg-[var(--color-bg-tertiary)]"
              style={{ color: 'var(--color-text-muted)' }}
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with success message */}
            <div className="text-center mb-4">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
                style={{
                  backgroundColor: isCopied
                    ? 'color-mix(in srgb, var(--ctp-green) 20%, transparent)'
                    : 'color-mix(in srgb, var(--ctp-teal) 20%, transparent)',
                  color: isCopied ? 'var(--ctp-green)' : 'var(--ctp-teal)',
                }}
              >
                {isCopied ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span className="font-medium">Recherche copiée !</span>
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    <span className="font-medium">Recherche web</span>
                  </>
                )}
              </div>
            </div>

            {/* Search Query Preview */}
            <div
              className="mb-4 p-3 rounded-lg text-sm font-mono break-words"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                color: 'var(--color-text-secondary)',
                borderWidth: '1px',
                borderColor: 'var(--color-border-light)',
              }}
            >
              {searchQuery}
            </div>

            {/* Instructions */}
            <p
              className="text-sm text-center mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Cliquez sur un moteur pour lancer la recherche directement
            </p>

            {/* Search Engines Grid */}
            <div className="grid grid-cols-2 gap-3">
              {SEARCH_ENGINES.map((engine) => (
                <button
                  key={engine.name}
                  onClick={() => handleEngineClick(engine)}
                  className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-[1.02] hover:shadow-md"
                  style={{
                    backgroundColor: 'var(--color-bg-tertiary)',
                    borderWidth: '1px',
                    borderColor: 'var(--color-border-light)',
                  }}
                >
                  <span className="text-2xl">{engine.icon}</span>
                  <div className="flex-1 text-left">
                    <span
                      className="font-medium text-sm block"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {engine.name}
                    </span>
                  </div>
                  <ExternalLink
                    className="w-4 h-4"
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                </button>
              ))}
            </div>

            {/* Footer hint */}
            <p
              className="text-xs text-center mt-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              La recherche s&apos;ouvre directement dans un nouvel onglet
            </p>
          </div>
        </div>
      )}
    </>
  );
}
