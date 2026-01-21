import { NextResponse } from 'next/server';
import { getAllDisciplines, createDiscipline } from '@/lib/services/admin-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const packId = searchParams.get('packId') || undefined;

    const disciplines = await getAllDisciplines(packId);
    return NextResponse.json(disciplines);
  } catch (error) {
    console.error('Error fetching disciplines:', error);
    return NextResponse.json({ error: 'Failed to fetch disciplines' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { packId, name, description } = body;

    if (!packId || !name) {
      return NextResponse.json(
        { error: 'Pack ID and name are required' },
        { status: 400 }
      );
    }

    const discipline = await createDiscipline({ packId, name, description });
    return NextResponse.json(discipline, { status: 201 });
  } catch (error) {
    console.error('Error creating discipline:', error);
    return NextResponse.json({ error: 'Failed to create discipline' }, { status: 500 });
  }
}
