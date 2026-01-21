import { NextResponse } from 'next/server';
import { getDomainWithPacks } from '@/lib/services/content-service';

interface RouteParams {
  params: Promise<{ domainId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { domainId } = await params;
    const domain = await getDomainWithPacks(domainId);

    if (!domain) {
      return NextResponse.json({ error: 'Domain not found' }, { status: 404 });
    }

    return NextResponse.json(domain);
  } catch (error) {
    console.error('Error fetching domain:', error);
    return NextResponse.json({ error: 'Failed to fetch domain' }, { status: 500 });
  }
}
