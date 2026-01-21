import { NextResponse } from 'next/server';
import { getPackWithDisciplines } from '@/lib/services/content-service';

interface RouteParams {
  params: Promise<{ packId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { packId } = await params;
    const pack = await getPackWithDisciplines(packId);

    if (!pack) {
      return NextResponse.json({ error: 'Pack not found' }, { status: 404 });
    }

    return NextResponse.json(pack);
  } catch (error) {
    console.error('Error fetching pack:', error);
    return NextResponse.json({ error: 'Failed to fetch pack' }, { status: 500 });
  }
}
