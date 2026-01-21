'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { ModuleStatusBadge } from '@/components/progression/ModuleStatusBadge';
import type { Module, ModuleProgressStatus } from '@/types/models';

interface ModuleCardProps {
  module: Module;
  status: ModuleProgressStatus;
  disabled?: boolean;
}

export function ModuleCard({ module, status, disabled }: ModuleCardProps) {
  const isLocked = status === 'LOCKED';
  const content = (
    <Card
      variant={isLocked ? 'default' : 'interactive'}
      className={`h-full ${isLocked ? 'opacity-60' : ''}`}
    >
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base">{module.name}</CardTitle>
          <ModuleStatusBadge status={status} />
        </div>
      </CardHeader>
      {module.description && (
        <CardContent>
          <CardDescription className="line-clamp-2 text-sm">{module.description}</CardDescription>
        </CardContent>
      )}
      {isLocked && (
        <CardFooter>
          <p className="text-xs text-gray-500">Complétez les modules précédents pour débloquer</p>
        </CardFooter>
      )}
    </Card>
  );

  if (isLocked || disabled) {
    return <div className="cursor-not-allowed" data-testid="module-card">{content}</div>;
  }

  return <Link href={`/module/${module.id}`} data-testid="module-card">{content}</Link>;
}
