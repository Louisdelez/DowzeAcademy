import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { prisma } from '@/lib/db/client';

// POST - Rate a note (1-5 stars)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: noteId } = await params;

  try {
    const body = await request.json();
    const { stars } = body;

    // Validate stars
    if (typeof stars !== 'number' || stars < 1 || stars > 5) {
      return NextResponse.json({ error: 'Stars must be between 1 and 5' }, { status: 400 });
    }

    // Check if note exists and is public
    const note = await prisma.userNote.findUnique({
      where: { id: noteId },
    });

    if (!note) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    if (!note.isPublic) {
      return NextResponse.json({ error: 'Cannot rate private notes' }, { status: 403 });
    }

    // Prevent rating own notes
    if (note.userId === session.user.id) {
      return NextResponse.json({ error: 'Cannot rate your own notes' }, { status: 403 });
    }

    // Upsert the rating
    const rating = await prisma.noteRating.upsert({
      where: {
        noteId_userId: {
          noteId,
          userId: session.user.id,
        },
      },
      update: {
        stars,
      },
      create: {
        noteId,
        userId: session.user.id,
        stars,
      },
    });

    // Get updated stats
    const ratings = await prisma.noteRating.findMany({
      where: { noteId },
      select: { stars: true },
    });

    const totalStars = ratings.reduce((sum, r) => sum + r.stars, 0);
    const avgRating = ratings.length > 0 ? Math.round((totalStars / ratings.length) * 10) / 10 : 0;

    return NextResponse.json({
      success: true,
      userRating: rating.stars,
      avgRating,
      ratingCount: ratings.length,
    });
  } catch (error) {
    console.error('Failed to rate note:', error);
    return NextResponse.json({ error: 'Failed to rate note' }, { status: 500 });
  }
}

// DELETE - Remove rating from a note
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: noteId } = await params;

  try {
    // Delete the rating if it exists
    await prisma.noteRating.deleteMany({
      where: {
        noteId,
        userId: session.user.id,
      },
    });

    // Get updated stats
    const ratings = await prisma.noteRating.findMany({
      where: { noteId },
      select: { stars: true },
    });

    const totalStars = ratings.reduce((sum, r) => sum + r.stars, 0);
    const avgRating = ratings.length > 0 ? Math.round((totalStars / ratings.length) * 10) / 10 : 0;

    return NextResponse.json({
      success: true,
      userRating: null,
      avgRating,
      ratingCount: ratings.length,
    });
  } catch (error) {
    console.error('Failed to remove rating:', error);
    return NextResponse.json({ error: 'Failed to remove rating' }, { status: 500 });
  }
}
