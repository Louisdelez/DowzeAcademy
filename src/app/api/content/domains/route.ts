import { NextResponse } from 'next/server';
import { getPublishedDomains } from '@/lib/services/content-service';
import { generateETag, checkETagMatch } from '@/lib/utils/etag';

export async function GET(request: Request) {
  try {
    const domains = await getPublishedDomains();
    const etag = generateETag(domains);

    // Check If-None-Match header for caching
    const ifNoneMatch = request.headers.get('If-None-Match');
    if (checkETagMatch(ifNoneMatch, etag)) {
      return new NextResponse(null, { status: 304 });
    }

    return NextResponse.json(domains, {
      headers: {
        ETag: etag,
        'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error fetching domains:', error);
    return NextResponse.json({ error: 'Failed to fetch domains' }, { status: 500 });
  }
}
