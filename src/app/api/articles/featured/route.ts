import { NextResponse } from 'next/server';
import { getFeaturedArticlesWithMetadata } from '@/lib/article-server';

export async function GET() {
  try {
    const articles = await getFeaturedArticlesWithMetadata();
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching featured articles:', error);
    return NextResponse.json({ error: 'Failed to fetch featured articles' }, { status: 500 });
  }
}
