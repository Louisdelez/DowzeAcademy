import { notFound } from 'next/navigation';
import { getDisciplineWithModules } from '@/lib/services/content-service';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { DisciplineModules } from './DisciplineModules';

export const dynamic = 'force-dynamic';

interface DisciplinePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: DisciplinePageProps) {
  const { id } = await params;
  const discipline = await getDisciplineWithModules(id);
  return {
    title: discipline?.name || 'Discipline',
  };
}

export default async function DisciplinePage({ params }: DisciplinePageProps) {
  const { id } = await params;
  const discipline = await getDisciplineWithModules(id);

  if (!discipline) {
    notFound();
  }

  const breadcrumbItems = [
    { label: discipline.pack.domain.name, href: `/domain/${discipline.pack.domain.id}` },
    { label: discipline.pack.name, href: `/pack/${discipline.pack.id}` },
    { label: discipline.name },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{discipline.name}</h1>
        {discipline.description && <p className="text-gray-600">{discipline.description}</p>}
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Modules</h2>

      {discipline.modules.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun module disponible dans cette discipline.</p>
        </div>
      ) : (
        <DisciplineModules disciplineId={id} modules={discipline.modules} />
      )}
    </div>
  );
}
