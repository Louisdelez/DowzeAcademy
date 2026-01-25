'use client';

import { useState, useCallback } from 'react';
import { Sparkles, X, ExternalLink, Check } from 'lucide-react';

interface AIService {
  name: string;
  icon: string;
  url: string;
  color: string;
}

const AI_SERVICES: AIService[] = [
  {
    name: 'ChatGPT',
    icon: '🤖',
    url: 'https://chat.openai.com/',
    color: '#10a37f',
  },
  {
    name: 'Claude',
    icon: '🧠',
    url: 'https://claude.ai/',
    color: '#d97706',
  },
  {
    name: 'Gemini',
    icon: '✨',
    url: 'https://gemini.google.com/',
    color: '#4285f4',
  },
  {
    name: 'Grok',
    icon: '🚀',
    url: 'https://grok.x.ai/',
    color: '#1da1f2',
  },
  {
    name: 'DeepSeek',
    icon: '🔍',
    url: 'https://chat.deepseek.com/',
    color: '#6366f1',
  },
  {
    name: 'Mistral',
    icon: '🌬️',
    url: 'https://chat.mistral.ai/',
    color: '#ff7000',
  },
];

interface AIPromptButtonProps {
  domainName: string;
  disciplineName: string;
  moduleName: string;
  slideTitle: string;
  slideContent: string;
}

export function AIPromptButton({
  domainName,
  disciplineName,
  moduleName,
  slideTitle,
  slideContent,
}: AIPromptButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const generatePrompt = useCallback(() => {
    return `Je suis en train d'apprendre sur "${domainName}" et plus spécifiquement sur le chapitre "${disciplineName}".

Je travaille actuellement sur le module "${moduleName}", dans la section "${slideTitle}".

Voici le contenu de cette section :

---
${slideContent}
---

J'aimerais que tu m'aides à mieux comprendre ce sujet. Tu peux :
- M'expliquer les concepts de manière plus simple si besoin
- Me donner des exemples concrets et pratiques
- Répondre à mes questions sur cette section
- Me suggérer des points importants à retenir

N'hésite pas à me demander ce que je ne comprends pas précisément.`;
  }, [domainName, disciplineName, moduleName, slideTitle, slideContent]);

  const handleOpenModal = useCallback(async () => {
    const prompt = generatePrompt();

    try {
      await navigator.clipboard.writeText(prompt);
      setIsCopied(true);
      setIsOpen(true);

      // Reset copied state after 3 seconds
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy prompt:', error);
      // Still open modal even if copy fails
      setIsOpen(true);
    }
  }, [generatePrompt]);

  const handleServiceClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsCopied(false);
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={handleOpenModal}
        className="fixed top-24 right-4 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--ctp-mauve))',
          color: 'var(--ctp-base)',
        }}
        title="Demander de l'aide à une IA"
        aria-label="Ouvrir l'assistant IA"
      >
        <Sparkles className="w-6 h-6" />
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
            <div className="text-center mb-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                style={{
                  backgroundColor: isCopied
                    ? 'color-mix(in srgb, var(--ctp-green) 20%, transparent)'
                    : 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                  color: isCopied ? 'var(--ctp-green)' : 'var(--color-primary)',
                }}
              >
                {isCopied ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span className="font-medium">Prompte copié !</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span className="font-medium">Assistant IA</span>
                  </>
                )}
              </div>
              <p
                className="text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Collez le prompte dans l&apos;un de ces services pour obtenir de l&apos;aide
              </p>
            </div>

            {/* AI Services Grid */}
            <div className="grid grid-cols-2 gap-3">
              {AI_SERVICES.map((service) => (
                <button
                  key={service.name}
                  onClick={() => handleServiceClick(service.url)}
                  className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-[1.02] hover:shadow-md"
                  style={{
                    backgroundColor: 'var(--color-bg-tertiary)',
                    borderWidth: '1px',
                    borderColor: 'var(--color-border-light)',
                  }}
                >
                  <span className="text-2xl">{service.icon}</span>
                  <div className="flex-1 text-left">
                    <span
                      className="font-medium text-sm block"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {service.name}
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
              Le prompte contient le contexte de votre leçon actuelle
            </p>
          </div>
        </div>
      )}
    </>
  );
}
