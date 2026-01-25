import { notFound } from 'next/navigation';
import { getPackWithDisciplines } from '@/lib/services/content-service';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { PackDisciplines } from './PackDisciplines';

export const dynamic = 'force-dynamic';

interface PackPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PackPageProps) {
  const { id } = await params;
  const pack = await getPackWithDisciplines(id);
  return {
    title: pack?.name || 'Pack',
  };
}

export default async function PackPage({ params }: PackPageProps) {
  const { id } = await params;
  const pack = await getPackWithDisciplines(id);

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
        Chapitres
      </h2>

      {pack.disciplines.length === 0 ? (
        <div className="text-center py-12">
          <p style={{ color: 'var(--color-text-muted)' }}>
            Aucun chapitre disponible dans cette formation.
          </p>
        </div>
      ) : (
        <PackDisciplines packId={id} disciplines={pack.disciplines} />
      )}
    </div>
  );
}
