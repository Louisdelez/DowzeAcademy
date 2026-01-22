import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { calculatePackProgress, getPackProgressions } from '@/lib/services/progression-service';

interface RouteParams {
  params: Promise<{ packId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { packId } = await params;

    const [stats, progressions] = await Promise.all([
      calculatePackProgress(session.user.id, packId),
      getPackProgressions(session.user.id, packId),
    ]);

    // Create a map of moduleId -> status for easy lookup
    const moduleStatuses: Record<string, string> = {};
    for (const prog of progressions) {
      moduleStatuses[prog.moduleId] = prog.status;
    }

    return NextResponse.json({
      stats,
      moduleStatuses,
    });
  } catch (error) {
    console.error('Error fetching pack progression:', error);
    return NextResponse.json({ error: 'Failed to fetch progression' }, { status: 500 });
  }
}
