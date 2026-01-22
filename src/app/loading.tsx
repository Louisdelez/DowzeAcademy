export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="text-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent mx-auto mb-4"
          style={{ borderColor: 'var(--color-primary)', borderTopColor: 'transparent' }}
        />
        <p style={{ color: 'var(--color-text-secondary)' }}>Chargement...</p>
      </div>
    </div>
  );
}
