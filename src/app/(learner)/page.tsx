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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bienvenue sur Dowze Academy</h1>
        <p className="text-gray-600">
          Choisissez un domaine pour commencer votre apprentissage
        </p>
      </div>

      {domains.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun domaine disponible pour le moment.</p>
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
