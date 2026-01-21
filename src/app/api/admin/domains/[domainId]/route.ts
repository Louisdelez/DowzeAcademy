import { NextResponse } from 'next/server';
import { getDomainById, updateDomain, deleteDomain } from '@/lib/services/admin-service';

interface RouteParams {
  params: Promise<{ domainId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { domainId } = await params;
    const domain = await getDomainById(domainId);

    if (!domain) {
      return NextResponse.json({ error: 'Domain not found' }, { status: 404 });
    }

    return NextResponse.json(domain);
  } catch (error) {
    console.error('Error fetching domain:', error);
    return NextResponse.json({ error: 'Failed to fetch domain' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { domainId } = await params;
    const body = await request.json();
    const { name, description, icon, order } = body;

    // Check for If-Unmodified-Since header for staleness check
    const ifUnmodifiedSince = request.headers.get('X-If-Unmodified-Since');
    const timestamp = ifUnmodifiedSince ? new Date(ifUnmodifiedSince) : undefined;

    const result = await updateDomain(domainId, { name, description, icon, order }, timestamp);

    if ('conflict' in result) {
      return NextResponse.json(
        {
          error: 'Content has been modified by another user',
          current: result.current,
        },
        { status: 409 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating domain:', error);
    return NextResponse.json({ error: 'Failed to update domain' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { domainId } = await params;
    await deleteDomain(domainId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting domain:', error);
    return NextResponse.json({ error: 'Failed to delete domain' }, { status: 500 });
  }
}
