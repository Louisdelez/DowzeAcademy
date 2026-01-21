import { NextResponse } from 'next/server';
import { getModuleById, updateModule, deleteModule } from '@/lib/services/admin-service';

interface RouteParams {
  params: Promise<{ moduleId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { moduleId } = await params;
    const module = await getModuleById(moduleId);

    if (!module) {
      return NextResponse.json({ error: 'Module not found' }, { status: 404 });
    }

    return NextResponse.json(module);
  } catch (error) {
    console.error('Error fetching module:', error);
    return NextResponse.json({ error: 'Failed to fetch module' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { moduleId } = await params;
    const body = await request.json();
    const { name, description, order } = body;

    const result = await updateModule(moduleId, { name, description, order });
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating module:', error);
    return NextResponse.json({ error: 'Failed to update module' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { moduleId } = await params;
    await deleteModule(moduleId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting module:', error);
    return NextResponse.json({ error: 'Failed to delete module' }, { status: 500 });
  }
}
