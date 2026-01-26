import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getDomainWithPacks } from '@/lib/services/content-service';
import { PackCard } from '@/components/cards/PackCard';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const dynamic = 'force-dynamic';

interface DomainPageProps {
  params: Promise<{ id: string }>;
}

function DomainIcon({ icon }: { icon: string }) {
  const isImagePath = icon.startsWith('/') || icon.startsWith('http');

  if (isImagePath) {
    return (
      <Image
        src={icon}
        alt=""
        width={40}
        height={40}
        className="flex-shrink-0"
      />
    );
  }

  return <span className="text-4xl">{icon}</span>;
}

export async function generateMetadata({ params }: DomainPageProps) {
  const { id } = await params;
  const domain = await getDomainWithPacks(id);
  return {
    title: domain?.name || 'Domaine',
  };
}

export default async function DomainPage({ params }: DomainPageProps) {
  const { id } = await params;
  const domain = await getDomainWithPacks(id);

  if (!domain) {
    notFound();
  }

  const breadcrumbItems = [{ label: domain.name }];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          {domain.icon && <DomainIcon icon={domain.icon} />}
          <h1
            className="text-3xl font-bold"
            style={{ color: 'var(--color-text)' }}
          >
            {domain.name}
          </h1>
        </div>
        {domain.description && (
          <p style={{ color: 'var(--color-text-secondary)' }}>
            {domain.description}
          </p>
        )}
      </div>

      <h2
        className="text-xl font-semibold mb-4"
        style={{ color: 'var(--color-text)' }}
      >
        Parcours disponibles
      </h2>

      {domain.packs.length === 0 ? (
        <div className="text-center py-12">
          <p style={{ color: 'var(--color-text-muted)' }}>
            Aucun parcours disponible dans ce domaine.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {domain.packs.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>
      )}
    </div>
  );
}
