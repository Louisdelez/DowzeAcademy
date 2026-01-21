'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import type { Domain } from '@/types/models';

interface DomainCardProps {
  domain: Domain;
}

export function DomainCard({ domain }: DomainCardProps) {
  return (
    <Link href={`/domain/${domain.id}`} data-testid="domain-card">
      <Card variant="interactive" className="h-full">
        <CardHeader>
          <div className="flex items-center gap-3">
            {domain.icon && <span className="text-3xl">{domain.icon}</span>}
            <CardTitle>{domain.name}</CardTitle>
          </div>
        </CardHeader>
        {domain.description && (
          <CardContent>
            <CardDescription className="line-clamp-2">{domain.description}</CardDescription>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
