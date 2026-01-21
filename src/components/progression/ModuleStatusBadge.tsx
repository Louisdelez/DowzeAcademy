'use client';

import { Badge } from '@/components/ui/Badge';
import type { ModuleProgressStatus } from '@/types/models';

interface ModuleStatusBadgeProps {
  status: ModuleProgressStatus;
}

const statusConfig: Record<
  ModuleProgressStatus,
  { label: string; variant: 'default' | 'success' | 'warning' | 'info' }
> = {
  LOCKED: { label: 'Verrouillé', variant: 'default' },
  AVAILABLE: { label: 'Disponible', variant: 'info' },
  IN_PROGRESS: { label: 'En cours', variant: 'warning' },
  COMPLETED: { label: 'Terminé', variant: 'success' },
};

export function ModuleStatusBadge({ status }: ModuleStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} size="sm">
      {config.label}
    </Badge>
  );
}
