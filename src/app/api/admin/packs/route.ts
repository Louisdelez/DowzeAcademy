import { NextResponse } from 'next/server';
import { getAllPacks, createPack } from '@/lib/services/admin-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const domainId = searchParams.get('domainId') || undefined;

    const packs = await getAllPacks(domainId);
    return NextResponse.json(packs);
  } catch (error) {
    console.error('Error fetching packs:', error);
    return NextResponse.json({ error: 'Failed to fetch packs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { domainId, name, description } = body;

    if (!domainId || !name) {
      return NextResponse.json(
        { error: 'Domain ID and name are required' },
        { status: 400 }
      );
    }

    const pack = await createPack({ domainId, name, description });
    return NextResponse.json(pack, { status: 201 });
  } catch (error) {
    console.error('Error creating pack:', error);
    return NextResponse.json({ error: 'Failed to create pack' }, { status: 500 });
  }
}
