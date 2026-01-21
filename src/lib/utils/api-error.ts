import { NextResponse } from 'next/server';

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: unknown): NextResponse {
  console.error('API Error:', error);

  if (error instanceof ApiError) {
    return NextResponse.json(
      { error: error.message, code: error.code },
      { status: error.statusCode }
    );
  }

  // Prisma errors
  if (error && typeof error === 'object' && 'code' in error) {
    const prismaError = error as { code: string; message: string };

    switch (prismaError.code) {
      case 'P2002':
        return NextResponse.json(
          { error: 'Un enregistrement avec ces données existe déjà.', code: 'DUPLICATE' },
          { status: 409 }
        );
      case 'P2025':
        return NextResponse.json(
          { error: 'Enregistrement non trouvé.', code: 'NOT_FOUND' },
          { status: 404 }
        );
      case 'P2003':
        return NextResponse.json(
          { error: 'Référence invalide.', code: 'INVALID_REFERENCE' },
          { status: 400 }
        );
      default:
        break;
    }
  }

  // Generic error
  const message = error instanceof Error ? error.message : 'Une erreur inattendue est survenue.';

  return NextResponse.json(
    { error: message, code: 'INTERNAL_ERROR' },
    { status: 500 }
  );
}

// Standard success responses
export function successResponse<T>(data: T, status: number = 200): NextResponse {
  return NextResponse.json(data, { status });
}

export function createdResponse<T>(data: T): NextResponse {
  return NextResponse.json(data, { status: 201 });
}

export function noContentResponse(): NextResponse {
  return new NextResponse(null, { status: 204 });
}

// Standard error responses
export function badRequestResponse(message: string): NextResponse {
  return NextResponse.json({ error: message, code: 'BAD_REQUEST' }, { status: 400 });
}

export function unauthorizedResponse(message: string = 'Non autorisé'): NextResponse {
  return NextResponse.json({ error: message, code: 'UNAUTHORIZED' }, { status: 401 });
}

export function forbiddenResponse(message: string = 'Accès refusé'): NextResponse {
  return NextResponse.json({ error: message, code: 'FORBIDDEN' }, { status: 403 });
}

export function notFoundResponse(message: string = 'Non trouvé'): NextResponse {
  return NextResponse.json({ error: message, code: 'NOT_FOUND' }, { status: 404 });
}

export function conflictResponse(message: string): NextResponse {
  return NextResponse.json({ error: message, code: 'CONFLICT' }, { status: 409 });
}
