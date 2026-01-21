import { createHash } from 'crypto';

export function generateETag(data: unknown): string {
  const content = JSON.stringify(data);
  const hash = createHash('md5').update(content).digest('hex');
  return `"${hash}"`;
}

export function checkETagMatch(requestETag: string | null, currentETag: string): boolean {
  if (!requestETag) return false;
  return requestETag === currentETag || requestETag === `W/${currentETag}`;
}
