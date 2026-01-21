'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { ProgressBar } from '@/components/progression/ProgressBar';
import type { Pack } from '@/types/models';
import type { ProgressStats } from '@/types/models';

interface PackCardProps {
  pack: Pack;
  progress?: ProgressStats;
}

export function PackCard({ pack, progress }: PackCardProps) {
  return (
    <Link href={`/pack/${pack.id}`} data-testid="pack-card">
      <Card variant="interactive" className="h-full">
        <CardHeader>
          <CardTitle>{pack.name}</CardTitle>
        </CardHeader>
        {pack.description && (
          <CardContent>
            <CardDescription className="line-clamp-2">{pack.description}</CardDescription>
          </CardContent>
        )}
        {progress && (
          <CardFooter>
            <div className="w-full">
              <ProgressBar value={progress.percentage} size="sm" showLabel />
            </div>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
