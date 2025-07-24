import { NextRequest, NextResponse } from 'next/server';
import { getArticleBySlugOptimized } from '@/lib/article-server-optimized';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
      return NextResponse.json({ error: 'slug parameter required' }, { status: 400 });
    }
    
    // Get full article content for individual article pages
    const article = await getArticleBySlugOptimized(slug, true);
    
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    
    // Set cache headers for individual articles
    const response = NextResponse.json(article);
    
    // Cache for 1 hour in browser, 24 hours on CDN
    response.headers.set(
      'Cache-Control', 
      'public, s-maxage=86400, stale-while-revalidate=3600'
    );
    
    return response;
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
  }
}
