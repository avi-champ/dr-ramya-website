import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demo purposes
// In production, you'd use a database like Redis or PostgreSQL
const viewCounts: { [slug: string]: number } = {
  'fever-in-children-guide': 1245,
  'pediatric-vaccination-guidelines': 2156,
  'common-cold-treatment': 987,
  'childhood-allergies-guide': 876,
  'developmental-milestones-guide': 1432,
  'diarrhea-management-guide': 654,
  'pediatric-emergency-poisoning-guide': 432,
  'newborn-care-complete-guide': 1876,
  'child-nutrition-complete-guide': 1098,
  'pediatric-sleep-patterns-guide': 789,
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slugsParam = searchParams.get('slugs');
    
    if (!slugsParam) {
      return NextResponse.json({ error: 'slugs parameter required' }, { status: 400 });
    }
    
    const slugs = slugsParam.split(',');
    const views: { [slug: string]: number } = {};
    
    // Get view counts for all requested slugs
    slugs.forEach(slug => {
      views[slug] = viewCounts[slug] || 0;
    });
    
    // Set cache headers
    const response = NextResponse.json({ views });
    
    // Cache for 5 minutes
    response.headers.set(
      'Cache-Control', 
      'public, s-maxage=300, stale-while-revalidate=60'
    );
    
    return response;
  } catch (error) {
    console.error('Error fetching bulk views:', error);
    return NextResponse.json({ error: 'Failed to fetch views' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { slug, increment = 1 } = await request.json();
    
    if (!slug) {
      return NextResponse.json({ error: 'slug required' }, { status: 400 });
    }
    
    // Increment view count
    viewCounts[slug] = (viewCounts[slug] || 0) + increment;
    
    return NextResponse.json({ 
      slug, 
      views: viewCounts[slug],
      success: true 
    });
  } catch (error) {
    console.error('Error updating views:', error);
    return NextResponse.json({ error: 'Failed to update views' }, { status: 500 });
  }
}
