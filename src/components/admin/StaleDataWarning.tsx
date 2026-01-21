'use client';

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
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <span className="text-2xl">⚠️</span>
        <div className="flex-1">
          <h4 className="font-medium text-amber-800">Données obsolètes</h4>
          <p className="text-amber-700 text-sm mt-1">{message}</p>
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
