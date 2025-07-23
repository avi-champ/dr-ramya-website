import { NextResponse } from 'next/server';
import { getAllArticlesWithMetadata } from '@/lib/article-server';

export async function GET() {
  try {
    const articles = await getAllArticlesWithMetadata();
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
