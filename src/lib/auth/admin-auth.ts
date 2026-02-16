import { compare, hash } from 'bcryptjs';
import { cookies } from 'next/headers';
import { type NextRequest } from 'next/server';
import { createHmac } from 'crypto';

const ADMIN_SESSION_COOKIE = 'admin_session';
const ADMIN_GAME_MODE_COOKIE = 'admin_game_mode';
const SESSION_DURATION = 8 * 60 * 60 * 1000; // 8 hours

interface AdminSession {
  username: string;
  expiresAt: number;
}

function getSigningSecret(): string {
  return process.env.NEXTAUTH_SECRET || process.env.ADMIN_SESSION_SECRET || '';
}

function signData(data: string): string {
  const secret = getSigningSecret();
  if (!secret) return '';
  return createHmac('sha256', secret).update(data).digest('hex');
}

function createSignedCookie(session: AdminSession): string {
  const payload = Buffer.from(JSON.stringify(session)).toString('base64');
  const signature = signData(payload);
  return `${payload}.${signature}`;
}

function verifySignedCookie(cookieValue: string): AdminSession | null {
  const parts = cookieValue.split('.');
  if (parts.length !== 2) return null;

  const [payload, signature] = parts;
  const expectedSignature = signData(payload);

  if (!expectedSignature || signature !== expectedSignature) return null;

  try {
    return JSON.parse(Buffer.from(payload, 'base64').toString());
  } catch {
    return null;
  }
}

/**
 * Validates admin credentials against environment variables (MVP)
 */
export async function validateAdminCredentials(
  username: string,
  password: string
): Promise<boolean> {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminUsername || !adminPasswordHash) {
    console.error('ADMIN_USERNAME and ADMIN_PASSWORD_HASH environment variables must be set');
    return false;
  }

  if (username !== adminUsername) {
    return false;
  }

  return compare(password, adminPasswordHash);
}

/**
 * Creates an admin session cookie
 */
export async function createAdminSession(username: string): Promise<void> {
  const session: AdminSession = {
    username,
    expiresAt: Date.now() + SESSION_DURATION,
  };

  const sessionData = createSignedCookie(session);

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

  const session = verifySignedCookie(sessionCookie.value);
  if (!session || session.expiresAt < Date.now()) {
    return null;
  }

  return session;
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

  const session = verifySignedCookie(sessionCookie.value);
  return session !== null && session.expiresAt > Date.now();
}

/**
 * Helper to hash a password (for generating ADMIN_PASSWORD_HASH)
 */
export async function hashPassword(password: string): Promise<string> {
  return hash(password, 10);
}

/**
 * Sets the admin game mode cookie
 */
export async function setGameModeCookie(enabled: boolean): Promise<void> {
  const cookieStore = await cookies();

  if (enabled) {
    cookieStore.set(ADMIN_GAME_MODE_COOKIE, 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: SESSION_DURATION / 1000,
      path: '/',
    });
  } else {
    cookieStore.delete(ADMIN_GAME_MODE_COOKIE);
  }
}

/**
 * Gets the admin game mode cookie value
 */
export async function getGameModeCookie(): Promise<boolean> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(ADMIN_GAME_MODE_COOKIE);
  return cookie?.value === 'true';
}

/**
 * Checks game mode from request cookies (for middleware/client)
 */
export function isGameModeEnabled(request: NextRequest): boolean {
  const cookie = request.cookies.get(ADMIN_GAME_MODE_COOKIE);
  return cookie?.value === 'true';
}
