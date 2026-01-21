import { NextResponse } from 'next/server';
import { getPackById, updatePack, deletePack } from '@/lib/services/admin-service';

interface RouteParams {
  params: Promise<{ packId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { packId } = await params;
    const pack = await getPackById(packId);

    if (!pack) {
      return NextResponse.json({ error: 'Pack not found' }, { status: 404 });
    }

    return NextResponse.json(pack);
  } catch (error) {
    console.error('Error fetching pack:', error);
    return NextResponse.json({ error: 'Failed to fetch pack' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { packId } = await params;
    const body = await request.json();
    const { name, description, order } = body;

    const result = await updatePack(packId, { name, description, order });
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating pack:', error);
    return NextResponse.json({ error: 'Failed to update pack' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { packId } = await params;
    await deletePack(packId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting pack:', error);
    return NextResponse.json({ error: 'Failed to delete pack' }, { status: 500 });
  }
}
