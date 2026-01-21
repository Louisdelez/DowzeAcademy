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
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
        <li>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Accueil
          </Link>
        </li>
        {items.map((item, index) => (
          <Fragment key={index}>
            <li aria-hidden="true" className="text-gray-400">
              /
            </li>
            <li>
              {item.href ? (
                <Link href={item.href} className="hover:text-blue-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
