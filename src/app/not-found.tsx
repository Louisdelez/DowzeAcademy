import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="text-center">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          Page non trouvée
        </h1>
        <p className="mb-8 max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg font-medium transition-colors"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-bg)',
          }}
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
