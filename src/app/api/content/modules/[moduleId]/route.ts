import { NextResponse } from 'next/server';
import { getModuleWithLesson } from '@/lib/services/content-service';

interface RouteParams {
  params: Promise<{ moduleId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { moduleId } = await params;
    const module = await getModuleWithLesson(moduleId);

    if (!module) {
      return NextResponse.json({ error: 'Module not found' }, { status: 404 });
    }

    return NextResponse.json(module);
  } catch (error) {
    console.error('Error fetching module:', error);
    return NextResponse.json({ error: 'Failed to fetch module' }, { status: 500 });
  }
}
