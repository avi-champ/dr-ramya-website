// src/app/api/articles/[filename]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    
    // Security: only allow .md files and prevent directory traversal
    if (!filename.endsWith('.md') || filename.includes('..') || filename.includes('/')) {
      return NextResponse.json({ error: 'Invalid filename' }, { status: 400 });
    }
    
    // Remove .md extension if provided, then add it back
    const cleanFilename = filename.replace('.md', '') + '.md';
    
    // Path to your markdown files (corrected path)
    const filePath = join(process.cwd(), 'src', 'content', 'articles', cleanFilename);
    
    try {
      const content = readFileSync(filePath, 'utf8');
      
      return new NextResponse(content, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
        }
      });
    } catch {
      console.log(`Markdown file not found: ${cleanFilename}`);
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error serving markdown file:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}