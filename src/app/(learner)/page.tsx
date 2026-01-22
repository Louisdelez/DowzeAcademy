import { getPublishedDomains } from '@/lib/services/content-service';
import { DomainCard } from '@/components/cards/DomainCard';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Accueil',
};

export default async function HomePage() {
  const domains = await getPublishedDomains();

  return (
    <div>
      <div className="mb-8">
        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: 'var(--color-text)' }}
        >
          Bienvenue sur Dowze Academy
        </h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Choisissez un domaine pour commencer votre apprentissage
        </p>
      </div>

      {domains.length === 0 ? (
        <div className="text-center py-12">
          <p style={{ color: 'var(--color-text-muted)' }}>
            Aucun domaine disponible pour le moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <DomainCard key={domain.id} domain={domain} />
          ))}
        </div>
      )}
    </div>
  );
}
