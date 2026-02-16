'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import type { Domain } from '@/types/models';

interface DomainCardProps {
  domain: Domain;
}

function DomainIcon({ icon }: { icon: string }) {
  // Check if icon is a path (starts with / or http)
  const isImagePath = icon.startsWith('/') || icon.startsWith('http');

  if (isImagePath) {
    return (
      <Image
        src={icon}
        alt=""
        width={32}
        height={32}
        className="flex-shrink-0"
      />
    );
  }

  // Otherwise render as emoji
  return <span className="text-3xl">{icon}</span>;
}

export function DomainCard({ domain }: DomainCardProps) {
  return (
    <Link href={`/domain/${domain.id}`} data-testid="domain-card">
      <Card variant="interactive" className="h-full">
        <CardHeader>
          <div className="flex items-center gap-3">
            {domain.icon && <DomainIcon icon={domain.icon} />}
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
