import { NextResponse } from 'next/server';
import { publishDomain } from '@/lib/services/admin-service';

interface RouteParams {
  params: Promise<{ domainId: string }>;
}

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const { domainId } = await params;
    const result = await publishDomain(domainId);

    if ('error' in result) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error publishing domain:', error);
    return NextResponse.json({ error: 'Failed to publish domain' }, { status: 500 });
  }
}
