import { NextResponse } from 'next/server';
import { publishModule } from '@/lib/services/admin-service';

interface RouteParams {
  params: Promise<{ moduleId: string }>;
}

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const { moduleId } = await params;
    const result = await publishModule(moduleId);

    if ('error' in result) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error publishing module:', error);
    return NextResponse.json({ error: 'Failed to publish module' }, { status: 500 });
  }
}
