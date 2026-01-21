import { NextResponse } from 'next/server';
import { validateAdminSession } from '@/lib/auth/admin-auth';

export async function GET() {
  try {
    const session = await validateAdminSession();

    if (!session) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      username: session.username,
    });
  } catch (error) {
    console.error('Admin auth check error:', error);
    return NextResponse.json(
      { error: 'Auth check failed' },
      { status: 500 }
    );
  }
}
