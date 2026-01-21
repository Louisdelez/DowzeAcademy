'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { ProgressStats as ProgressStatsComponent } from '@/components/progression/ProgressStats';
import type { Discipline } from '@/types/models';
import type { ProgressStats } from '@/types/models';

interface DisciplineCardProps {
  discipline: Discipline;
  progress?: ProgressStats;
}

export function DisciplineCard({ discipline, progress }: DisciplineCardProps) {
  return (
    <Link href={`/discipline/${discipline.id}`} data-testid="discipline-card">
      <Card variant="interactive" className="h-full">
        <CardHeader>
          <CardTitle>{discipline.name}</CardTitle>
        </CardHeader>
        {discipline.description && (
          <CardContent>
            <CardDescription className="line-clamp-2">{discipline.description}</CardDescription>
          </CardContent>
        )}
        {progress && (
          <CardFooter>
            <ProgressStatsComponent stats={progress} size="sm" />
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
