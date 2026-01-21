import { notFound } from 'next/navigation';
import { getPackWithDisciplines } from '@/lib/services/content-service';
import { DisciplineCard } from '@/components/cards/DisciplineCard';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{pack.name}</h1>
        {pack.description && <p className="text-gray-600">{pack.description}</p>}
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Disciplines</h2>

      {pack.disciplines.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucune discipline disponible dans ce parcours.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pack.disciplines.map((discipline) => (
            <DisciplineCard key={discipline.id} discipline={discipline} />
          ))}
        </div>
      )}
    </div>
  );
}
