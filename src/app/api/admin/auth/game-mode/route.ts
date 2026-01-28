import { NextResponse } from 'next/server';
import {
  validateAdminSession,
  getGameModeCookie,
  setGameModeCookie,
} from '@/lib/auth/admin-auth';

/**
 * GET /api/admin/auth/game-mode
 * Check if current user is admin and game mode status
 */
export async function GET() {
  try {
    const session = await validateAdminSession();

    if (!session) {
      return NextResponse.json({
        isAdmin: false,
        isGameModeEnabled: false,
      });
    }

    const isGameModeEnabled = await getGameModeCookie();

    return NextResponse.json({
      isAdmin: true,
      isGameModeEnabled,
    });
  } catch (error) {
    console.error('Error checking game mode:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/auth/game-mode
 * Toggle game mode on/off
 */
export async function POST(request: Request) {
  try {
    const session = await validateAdminSession();

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const enabled = Boolean(body.enabled);

    await setGameModeCookie(enabled);

    return NextResponse.json({
      success: true,
      isGameModeEnabled: enabled,
    });
  } catch (error) {
    console.error('Error toggling game mode:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
