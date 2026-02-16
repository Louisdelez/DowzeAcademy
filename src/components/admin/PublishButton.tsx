'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface PublishButtonProps {
  entityType: 'domain' | 'pack' | 'discipline' | 'module';
  entityId: string;
  isPublished: boolean;
  onPublished?: () => void;
}

export function PublishButton({
  entityType,
  entityId,
  isPublished,
  onPublished,
}: PublishButtonProps) {
  const [isPublishing, setIsPublishing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePublish = async () => {
    setError(null);
    setIsPublishing(true);

    try {
      const response = await fetch(`/api/admin/${entityType}s/${entityId}/publish`, {
        method: 'POST',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erreur lors de la publication');
      }

      onPublished?.();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsPublishing(false);
    }
  };

  if (isPublished) {
    return (
      <span className="inline-flex items-center gap-1 text-sm" style={{ color: 'var(--color-success)' }}>
        <Check className="w-4 h-4" /> Publié
      </span>
    );
  }

  return (
    <div>
      <Button
        variant="outline"
        size="sm"
        onClick={handlePublish}
        isLoading={isPublishing}
      >
        Publier
      </Button>
      {error && (
        <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{error}</p>
      )}
    </div>
  );
}
