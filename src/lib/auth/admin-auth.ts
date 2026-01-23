import { compare, hash } from 'bcryptjs';
import { cookies } from 'next/headers';
import { type NextRequest } from 'next/server';

const ADMIN_SESSION_COOKIE = 'admin_session';
const SESSION_DURATION = 8 * 60 * 60 * 1000; // 8 hours

interface AdminSession {
  username: string;
  expiresAt: number;
}

/**
 * Validates admin credentials against environment variables (MVP)
 */
export async function validateAdminCredentials(
  username: string,
  password: string
): Promise<boolean> {
  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (username !== adminUsername) {
    return false;
  }

  // If hash is configured, use secure comparison
  if (adminPasswordHash) {
    return compare(password, adminPasswordHash);
  }

  // Fallback to plain comparison for development
  return password === adminPassword;
}

/**
 * Creates an admin session cookie
 */
export async function createAdminSession(username: string): Promise<void> {
  const session: AdminSession = {
    username,
    expiresAt: Date.now() + SESSION_DURATION,
  };

  const sessionData = Buffer.from(JSON.stringify(session)).toString('base64');

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, sessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION / 1000,
    path: '/',
  });
}

/**
 * Validates the admin session from cookies
 */
export async function validateAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(ADMIN_SESSION_COOKIE);

  if (!sessionCookie?.value) {
    return null;
  }

  try {
    const session: AdminSession = JSON.parse(
      Buffer.from(sessionCookie.value, 'base64').toString()
    );

    if (session.expiresAt < Date.now()) {
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

/**
 * Clears the admin session cookie
 */
export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
}

/**
 * Middleware helper to check if request is from authenticated admin
 */
export async function isAdminAuthenticated(request: NextRequest): Promise<boolean> {
  const sessionCookie = request.cookies.get(ADMIN_SESSION_COOKIE);

  if (!sessionCookie?.value) {
    return false;
  }

  try {
    const session: AdminSession = JSON.parse(
      Buffer.from(sessionCookie.value, 'base64').toString()
    );
    return session.expiresAt > Date.now();
  } catch {
    return false;
  }
}

/**
 * Helper to hash a password (for generating ADMIN_PASSWORD_HASH)
 */
export async function hashPassword(password: string): Promise<string> {
  return hash(password, 10);
}
