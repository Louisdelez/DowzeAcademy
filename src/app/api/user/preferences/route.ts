import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { prisma } from '@/lib/db/client';
import type { ThemeName } from '@/lib/theme/catppuccin';

const VALID_THEMES: ThemeName[] = ['latte', 'frappe', 'macchiato', 'mocha'];

function isValidTheme(value: unknown): value is ThemeName {
  return typeof value === 'string' && VALID_THEMES.includes(value as ThemeName);
}

/**
 * GET /api/user/preferences
 * Returns the authenticated user's preferences (themePreference)
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        themePreference: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      themePreference: user.themePreference,
    });
  } catch (error) {
    console.error('Error fetching user preferences:', error);
    return NextResponse.json(
      { error: 'Failed to fetch preferences' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/user/preferences
 * Updates the authenticated user's preferences
 * Body: { themePreference: 'latte' | 'frappe' | 'macchiato' | 'mocha' }
 */
export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Validate theme preference if provided
    if (body.themePreference !== undefined) {
      if (!isValidTheme(body.themePreference)) {
        return NextResponse.json(
          {
            error: 'Invalid theme preference',
            message: `Theme must be one of: ${VALID_THEMES.join(', ')}`,
          },
          { status: 400 }
        );
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        ...(body.themePreference && { themePreference: body.themePreference }),
      },
      select: {
        themePreference: true,
      },
    });

    return NextResponse.json({
      themePreference: updatedUser.themePreference,
    });
  } catch (error) {
    console.error('Error updating user preferences:', error);
    return NextResponse.json(
      { error: 'Failed to update preferences' },
      { status: 500 }
    );
  }
}
