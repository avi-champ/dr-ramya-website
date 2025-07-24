import { NextResponse } from 'next/server';
import { getFeaturedArticlesMetadata } from '@/lib/article-server-optimized';

export async function GET() {
  try {
    // Only return metadata for listing pages (no content)
    const articles = await getFeaturedArticlesMetadata();
    
    // Set cache headers for better performance
    const response = NextResponse.json(articles);
    
    // Cache for 10 minutes in browser, 1 hour on CDN
    response.headers.set(
      'Cache-Control', 
      'public, s-maxage=3600, stale-while-revalidate=600'
    );
    
    return response;
  } catch (error) {
    console.error('Error fetching featured articles:', error);
    return NextResponse.json({ error: 'Failed to fetch featured articles' }, { status: 500 });
  }
}
