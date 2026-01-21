import { NextResponse } from 'next/server';
import { getDisciplineById, updateDiscipline, deleteDiscipline } from '@/lib/services/admin-service';

interface RouteParams {
  params: Promise<{ disciplineId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { disciplineId } = await params;
    const discipline = await getDisciplineById(disciplineId);

    if (!discipline) {
      return NextResponse.json({ error: 'Discipline not found' }, { status: 404 });
    }

    return NextResponse.json(discipline);
  } catch (error) {
    console.error('Error fetching discipline:', error);
    return NextResponse.json({ error: 'Failed to fetch discipline' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { disciplineId } = await params;
    const body = await request.json();
    const { name, description, order } = body;

    const result = await updateDiscipline(disciplineId, { name, description, order });
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating discipline:', error);
    return NextResponse.json({ error: 'Failed to update discipline' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { disciplineId } = await params;
    await deleteDiscipline(disciplineId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting discipline:', error);
    return NextResponse.json({ error: 'Failed to delete discipline' }, { status: 500 });
  }
}
