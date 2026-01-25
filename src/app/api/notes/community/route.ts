import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { prisma } from '@/lib/db/client';

// GET - Fetch public notes for a module with ratings
export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const moduleId = searchParams.get('moduleId');

  if (!moduleId) {
    return NextResponse.json({ error: 'Module ID required' }, { status: 400 });
  }

  try {
    const notes = await prisma.userNote.findMany({
      where: {
        moduleId,
        isPublic: true,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        ratings: {
          select: {
            stars: true,
            userId: true,
          },
        },
      },
    });

    // Calculate average rating and check if current user has rated
    const notesWithStats = notes.map((note) => {
      const totalStars = note.ratings.reduce((sum, r) => sum + r.stars, 0);
      const avgRating = note.ratings.length > 0 ? totalStars / note.ratings.length : 0;
      const userRating = note.ratings.find((r) => r.userId === session.user!.id);

      return {
        id: note.id,
        type: note.type,
        content: note.content,
        linkName: note.linkName,
        linkUrl: note.linkUrl,
        linkPreviewTitle: note.linkPreviewTitle,
        linkPreviewDescription: note.linkPreviewDescription,
        linkPreviewImage: note.linkPreviewImage,
        createdAt: note.createdAt,
        author: {
          id: note.user.id,
          name: note.user.name || 'Anonyme',
        },
        avgRating: Math.round(avgRating * 10) / 10,
        ratingCount: note.ratings.length,
        userRating: userRating?.stars || null,
        isOwner: note.userId === session.user!.id,
      };
    });

    // Sort by average rating (highest first), then by rating count
    notesWithStats.sort((a, b) => {
      if (b.avgRating !== a.avgRating) {
        return b.avgRating - a.avgRating;
      }
      return b.ratingCount - a.ratingCount;
    });

    return NextResponse.json(notesWithStats);
  } catch (error) {
    console.error('Failed to fetch community notes:', error);
    return NextResponse.json({ error: 'Failed to fetch community notes' }, { status: 500 });
  }
}
