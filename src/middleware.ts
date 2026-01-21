import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAdminAuthenticated } from '@/lib/auth/admin-auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin routes protection (except login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const isAuthenticated = await isAdminAuthenticated(request);

    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Admin API routes protection
  if (pathname.startsWith('/api/admin') && !pathname.includes('/auth/')) {
    const isAuthenticated = await isAdminAuthenticated(request);

    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
