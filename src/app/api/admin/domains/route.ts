import { NextResponse } from 'next/server';
import { getAllDomains, createDomain } from '@/lib/services/admin-service';

export async function GET() {
  try {
    const domains = await getAllDomains();
    return NextResponse.json(domains);
  } catch (error) {
    console.error('Error fetching domains:', error);
    return NextResponse.json({ error: 'Failed to fetch domains' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, icon } = body;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const domain = await createDomain({ name, description, icon });
    return NextResponse.json(domain, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'A domain with this name already exists' }, { status: 409 });
    }
    console.error('Error creating domain:', error);
    return NextResponse.json({ error: 'Failed to create domain' }, { status: 500 });
  }
}
