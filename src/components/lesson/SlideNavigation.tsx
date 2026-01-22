'use client';

import { Button } from '@/components/ui/Button';

interface SlideNavigationProps {
  onBack: (() => void) | null;
  onNext: () => void;
  nextLabel?: string;
  isNextDisabled?: boolean;
  isLoading?: boolean;
  showBack?: boolean;
}

export function SlideNavigation({
  onBack,
  onNext,
  nextLabel = 'Continuer',
  isNextDisabled = false,
  isLoading = false,
  showBack = true,
}: SlideNavigationProps) {
  return (
    <div
      className="fixed bottom-16 left-0 right-0 p-4 z-40"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderTopWidth: '1px',
        borderTopColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
        {showBack && onBack ? (
          <Button
            variant="outline"
            onClick={onBack}
            disabled={isLoading}
            className="min-w-[100px]"
          >
            Retour
          </Button>
        ) : (
          <div className="min-w-[100px]" />
        )}

        <Button
          onClick={onNext}
          disabled={isNextDisabled || isLoading}
          isLoading={isLoading}
          className="min-w-[140px]"
        >
          {nextLabel}
        </Button>
      </div>
    </div>
  );
}
