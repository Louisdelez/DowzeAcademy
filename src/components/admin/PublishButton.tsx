'use client';

import { useState } from 'react';
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
      <span className="inline-flex items-center gap-1 text-green-600 text-sm">
        <span>✓</span> Publié
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
        <p className="text-red-600 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
