import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage (in production, use a database)
const viewCounts: Record<string, number> = {
  'fever-in-children-guide': 1547,
  'fever-in-children': 1547,
  'pediatric-vaccination-guidelines': 1542,
  'vaccination-guidelines-iap': 1542,
  'vaccination-guidelines': 1542,
  'common-cold-treatment': 756,
  'childhood-allergies-guide': 892,
  'childhood-allergies': 892,
  'developmental-milestones-guide': 1423,
  'developmental-milestones': 1423,
  'diarrhea-management-guide': 645,
  'diarrhea-management': 645,
  'pediatric-emergency-poisoning-guide': 0,
  'emergency-signs': 0,
  'newborn-care-complete-guide': 2847,
  'newborn-care': 2847,
  'child-nutrition-complete-guide': 1300,
  'nutrition-guidelines': 1300,
  'pediatric-sleep-patterns-guide': 2156,
  'sleep-patterns': 2156
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