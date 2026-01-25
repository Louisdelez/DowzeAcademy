import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { prisma } from '@/lib/db/client';

// PUT - Update a note
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: noteId } = await params;

  try {
    // Check ownership
    const existingNote = await prisma.userNote.findUnique({
      where: { id: noteId },
    });

    if (!existingNote) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    if (existingNote.userId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const { title, content, linkName, linkUrl, isPublic } = body;

    // Validate content length for text notes
    if (existingNote.type === 'TEXT' && content && content.length > 3000) {
      return NextResponse.json({ error: 'Content exceeds 3000 characters' }, { status: 400 });
    }

    // Update the note
    const updatedNote = await prisma.userNote.update({
      where: { id: noteId },
      data: {
        ...(existingNote.type === 'TEXT' ? { title, content } : {}),
        ...(existingNote.type === 'LINK' ? { linkName, linkUrl } : {}),
        ...(typeof isPublic === 'boolean' ? { isPublic } : {}),
      },
      include: {
        module: {
          include: {
            discipline: {
              include: {
                pack: {
                  include: {
                    domain: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return NextResponse.json(updatedNote);
  } catch (error) {
    console.error('Failed to update note:', error);
    return NextResponse.json({ error: 'Failed to update note' }, { status: 500 });
  }
}
