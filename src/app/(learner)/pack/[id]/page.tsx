import { notFound } from 'next/navigation';
import { getPackWithModules } from '@/lib/services/content-service';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { PackModules } from './PackModules';

export const dynamic = 'force-dynamic';

interface PackPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PackPageProps) {
  const { id } = await params;
  const pack = await getPackWithModules(id);
  return {
    title: pack?.name || 'Pack',
  };
}

export default async function PackPage({ params }: PackPageProps) {
  const { id } = await params;
  const pack = await getPackWithModules(id);

  if (!pack) {
    notFound();
  }

  const breadcrumbItems = [
    { label: pack.domain.name, href: `/domain/${pack.domain.id}` },
    { label: pack.name },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mb-8">
        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: 'var(--color-text)' }}
        >
          {pack.name}
        </h1>
        {pack.description && (
          <p style={{ color: 'var(--color-text-secondary)' }}>
            {pack.description}
          </p>
        )}
      </div>

      <h2
        className="text-xl font-semibold mb-4"
        style={{ color: 'var(--color-text)' }}
      >
        Modules
      </h2>

      {pack.modules.length === 0 ? (
        <div className="text-center py-12">
          <p style={{ color: 'var(--color-text-muted)' }}>
            Aucun module disponible dans ce parcours.
          </p>
        </div>
      ) : (
        <PackModules packId={id} modules={pack.modules} />
      )}
    </div>
  );
}
