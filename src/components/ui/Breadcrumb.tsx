'use client';

import Link from 'next/link';
import { Fragment } from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        <li>
          <Link
            href="/"
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Accueil
          </Link>
        </li>
        {items.map((item, index) => (
          <Fragment key={index}>
            <li
              aria-hidden="true"
              style={{ color: 'var(--color-text-muted)' }}
            >
              /
            </li>
            <li>
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:opacity-80"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="font-medium"
                  style={{ color: 'var(--color-text)' }}
                >
                  {item.label}
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
