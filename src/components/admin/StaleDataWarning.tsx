'use client';

import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface StaleDataWarningProps {
  message?: string;
  onRefresh?: () => void;
}

export function StaleDataWarning({
  message = 'Ces données ont été modifiées par un autre utilisateur.',
  onRefresh,
}: StaleDataWarningProps) {
  return (
    <div className="rounded-lg p-4 mb-6" style={{ backgroundColor: 'color-mix(in srgb, var(--color-warning) 15%, transparent)', border: '1px solid var(--color-warning)' }}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 shrink-0" style={{ color: 'var(--color-warning)' }} />
        <div className="flex-1">
          <h4 className="font-medium" style={{ color: 'var(--color-warning)' }}>Données obsolètes</h4>
          <p className="text-sm mt-1" style={{ color: 'var(--color-warning)' }}>{message}</p>
          {onRefresh && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRefresh}
              className="mt-3"
            >
              Actualiser les données
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
