import { NextResponse } from 'next/server';
import { getDisciplineWithModules } from '@/lib/services/content-service';

interface RouteParams {
  params: Promise<{ disciplineId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { disciplineId } = await params;
    const discipline = await getDisciplineWithModules(disciplineId);

    if (!discipline) {
      return NextResponse.json({ error: 'Discipline not found' }, { status: 404 });
    }

    return NextResponse.json(discipline);
  } catch (error) {
    console.error('Error fetching discipline:', error);
    return NextResponse.json({ error: 'Failed to fetch discipline' }, { status: 500 });
  }
}
