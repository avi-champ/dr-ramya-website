import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage (in production, use a database)
const viewCounts: Record<string, number> = {
  'fever-in-children-guide': 100,
  'vaccination-guidelines-iap': 982,
  'common-cold-treatment': 756
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const currentViews = viewCounts[slug] || 0;
    
    return NextResponse.json({ views: currentViews });
  } catch (error) {
    console.error('Error fetching views:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Increment view count
    viewCounts[slug] = (viewCounts[slug] || 0) + 1;
    
    return NextResponse.json({ 
      views: viewCounts[slug],
      message: 'View count updated'
    });
  } catch (error) {
    console.error('Error updating views:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}