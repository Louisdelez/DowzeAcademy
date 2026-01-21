import { NextResponse } from 'next/server';
import { getAllModules, createModule } from '@/lib/services/admin-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const disciplineId = searchParams.get('disciplineId') || undefined;

    const modules = await getAllModules(disciplineId);
    return NextResponse.json(modules);
  } catch (error) {
    console.error('Error fetching modules:', error);
    return NextResponse.json({ error: 'Failed to fetch modules' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { disciplineId, name, description } = body;

    if (!disciplineId || !name) {
      return NextResponse.json(
        { error: 'Discipline ID and name are required' },
        { status: 400 }
      );
    }

    const module = await createModule({ disciplineId, name, description });
    return NextResponse.json(module, { status: 201 });
  } catch (error) {
    console.error('Error creating module:', error);
    return NextResponse.json({ error: 'Failed to create module' }, { status: 500 });
  }
}
