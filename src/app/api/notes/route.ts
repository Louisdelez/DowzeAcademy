import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';
import { prisma } from '@/lib/db/client';

// GET - Fetch notes for a module or all user notes
export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const moduleId = searchParams.get('moduleId');

  try {
    const notes = await prisma.userNote.findMany({
      where: {
        userId: session.user.id,
        ...(moduleId ? { moduleId } : {}),
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
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(notes);
  } catch (error) {
    console.error('Failed to fetch notes:', error);
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 });
  }
}

// POST - Create a new note
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { moduleId, type, title, content, linkName, linkUrl, isPublic } = body;

    if (!moduleId || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate content length for text notes
    if (type === 'TEXT' && content && content.length > 3000) {
      return NextResponse.json({ error: 'Content exceeds 3000 characters' }, { status: 400 });
    }

    // For link notes, fetch preview data
    let linkPreviewTitle = null;
    let linkPreviewDescription = null;
    let linkPreviewImage = null;

    if (type === 'LINK' && linkUrl) {
      try {
        const previewData = await fetchLinkPreview(linkUrl);
        linkPreviewTitle = previewData.title;
        linkPreviewDescription = previewData.description;
        linkPreviewImage = previewData.image;
      } catch (e) {
        console.error('Failed to fetch link preview:', e);
        // Continue without preview data
      }
    }

    const note = await prisma.userNote.create({
      data: {
        userId: session.user.id,
        moduleId,
        type,
        title: type === 'TEXT' ? (title || null) : null,
        content: type === 'TEXT' ? content : null,
        linkName: type === 'LINK' ? linkName : null,
        linkUrl: type === 'LINK' ? linkUrl : null,
        linkPreviewTitle,
        linkPreviewDescription,
        linkPreviewImage,
        isPublic: isPublic || false,
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

    return NextResponse.json(note, { status: 201 });
  } catch (error) {
    console.error('Failed to create note:', error);
    return NextResponse.json({ error: 'Failed to create note' }, { status: 500 });
  }
}

// DELETE - Delete a note
export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const noteId = searchParams.get('id');

  if (!noteId) {
    return NextResponse.json({ error: 'Missing note ID' }, { status: 400 });
  }

  try {
    // Verify ownership
    const note = await prisma.userNote.findUnique({
      where: { id: noteId },
    });

    if (!note || note.userId !== session.user.id) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    await prisma.userNote.delete({
      where: { id: noteId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete note:', error);
    return NextResponse.json({ error: 'Failed to delete note' }, { status: 500 });
  }
}

// Helper function to fetch Open Graph metadata from a URL
async function fetchLinkPreview(url: string): Promise<{
  title: string | null;
  description: string | null;
  image: string | null;
}> {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; DowzeAcademy/1.0)',
    },
    signal: AbortSignal.timeout(5000),
  });

  const html = await response.text();

  // Parse Open Graph tags
  const ogTitle = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i)?.[1]
    || html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]
    || null;

  const ogDescription = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i)?.[1]
    || html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1]
    || null;

  const ogImage = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i)?.[1]
    || null;

  return {
    title: ogTitle ? decodeHTMLEntities(ogTitle).slice(0, 255) : null,
    description: ogDescription ? decodeHTMLEntities(ogDescription).slice(0, 500) : null,
    image: ogImage,
  };
}

function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/');
}
