import { NextRequest, NextResponse } from 'next/server';
import { clearArticleCache, getCacheStats } from '@/lib/article-server-optimized';

export async function GET() {
  try {
    const stats = getCacheStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error getting cache stats:', error);
    return NextResponse.json({ error: 'Failed to get cache stats' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (slug) {
      clearArticleCache(slug);
      return NextResponse.json({ message: `Cache cleared for article: ${slug}` });
    } else {
      clearArticleCache();
      return NextResponse.json({ message: 'All cache cleared' });
    }
  } catch (error) {
    console.error('Error clearing cache:', error);
    return NextResponse.json({ error: 'Failed to clear cache' }, { status: 500 });
  }
}
