import { NextResponse } from 'next/server';
import { getAllArticlesMetadata } from '@/lib/article-server-optimized';

export async function GET() {
  try {
    // Only return metadata for listing pages (no content)
    const articles = await getAllArticlesMetadata();
    
    // Set cache headers for better performance
    const response = NextResponse.json(articles);
    
    // Cache for 5 minutes in browser, 1 hour on CDN
    response.headers.set(
      'Cache-Control', 
      'public, s-maxage=3600, stale-while-revalidate=300'
    );
    
    return response;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
