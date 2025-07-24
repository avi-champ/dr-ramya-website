// src/lib/article-cache.ts
// Advanced caching system for article content with compression
import { Article } from './article-server';
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync, unlinkSync, rmSync } from 'fs';
import { join } from 'path';
import { gzipSync, gunzipSync } from 'zlib';

interface CachedArticle {
  article: Article;
  compressedContent: Buffer;
  lastModified: number;
  views: number;
}

interface ArticleCache {
  [slug: string]: CachedArticle;
}

interface ArticleMetadata {
  id: string;
  title: string;
  description: string;
  category: Article['category'];
  tags: string[];
  readingTime: number;
  publishDate: string;
  lastUpdated: string;
  ageGroup: Article['ageGroup'];
  severity: Article['severity'];
  featured: boolean;
  slug: string;
  author: string;
  views: number;
}

class ArticleCacheManager {
  private cacheDir: string;
  private metadataCacheFile: string;
  private cache: ArticleCache = {};
  private metadataCache: ArticleMetadata[] = [];
  private isInitialized = false;

  constructor() {
    this.cacheDir = join(process.cwd(), '.cache', 'articles');
    this.metadataCacheFile = join(this.cacheDir, 'metadata.json');
    this.ensureCacheDir();
  }

  private ensureCacheDir() {
    if (!existsSync(this.cacheDir)) {
      mkdirSync(this.cacheDir, { recursive: true });
    }
  }

  private getCacheFilePath(slug: string): string {
    return join(this.cacheDir, `${slug}.cache`);
  }

  private getSourceFilePath(filename: string): string {
    return join(process.cwd(), 'src', 'content', 'articles', `${filename}.md`);
  }

  private isSourceNewer(sourceFile: string, cacheFile: string): boolean {
    if (!existsSync(cacheFile)) return true;
    
    const sourceStats = statSync(sourceFile);
    const cacheStats = statSync(cacheFile);
    
    return sourceStats.mtime > cacheStats.mtime;
  }

  // Compress content using gzip
  private compressContent(content: string): Buffer {
    return gzipSync(Buffer.from(content, 'utf8'));
  }

  // Decompress content
  private decompressContent(compressed: Buffer): string {
    return gunzipSync(compressed).toString('utf8');
  }

  // Save article to cache with compression
  private saveToCache(slug: string, article: Article): void {
    const cacheFile = this.getCacheFilePath(slug);
    const compressedContent = this.compressContent(article.content);
    
    const cachedArticle: CachedArticle = {
      article: {
        ...article,
        content: '', // Don't store uncompressed content
        htmlContent: '' // Don't store HTML content (regenerate as needed)
      },
      compressedContent,
      lastModified: Date.now(),
      views: article.views || 0
    };

    writeFileSync(cacheFile, JSON.stringify(cachedArticle));
    this.cache[slug] = cachedArticle;
  }

  // Load article from cache
  private loadFromCache(slug: string): CachedArticle | null {
    const cacheFile = this.getCacheFilePath(slug);
    
    if (!existsSync(cacheFile)) return null;
    
    try {
      const cachedData = JSON.parse(readFileSync(cacheFile, 'utf8'));
      // Convert compressedContent back to Buffer if it's stored as array
      if (Array.isArray(cachedData.compressedContent)) {
        cachedData.compressedContent = Buffer.from(cachedData.compressedContent);
      }
      return cachedData;
    } catch (error) {
      console.error(`Error loading cache for ${slug}:`, error);
      return null;
    }
  }

  // Get article with content decompression
  public getArticleContent(slug: string): string | null {
    const cached = this.cache[slug] || this.loadFromCache(slug);
    if (!cached) return null;
    
    try {
      return this.decompressContent(cached.compressedContent);
    } catch (error) {
      console.error(`Error decompressing content for ${slug}:`, error);
      return null;
    }
  }

  // Cache article
  public cacheArticle(slug: string, article: Article): void {
    this.saveToCache(slug, article);
    this.updateMetadataCache(article);
  }

  // Update metadata cache (lightweight data for listings)
  private updateMetadataCache(article: Article): void {
    const metadata: ArticleMetadata = {
      id: article.id,
      title: article.title,
      description: article.description,
      category: article.category,
      tags: article.tags,
      readingTime: article.readingTime,
      publishDate: article.publishDate,
      lastUpdated: article.lastUpdated,
      ageGroup: article.ageGroup,
      severity: article.severity,
      featured: article.featured,
      slug: article.slug,
      author: article.author,
      views: article.views || 0
    };

    // Update or add to metadata cache
    const existingIndex = this.metadataCache.findIndex(m => m.slug === article.slug);
    if (existingIndex >= 0) {
      this.metadataCache[existingIndex] = metadata;
    } else {
      this.metadataCache.push(metadata);
    }

    // Save metadata cache to disk
    try {
      writeFileSync(this.metadataCacheFile, JSON.stringify(this.metadataCache, null, 2));
    } catch (error) {
      console.error('Error saving metadata cache:', error);
    }
  }

  // Load metadata cache from disk
  private loadMetadataCache(): void {
    if (existsSync(this.metadataCacheFile)) {
      try {
        const data = readFileSync(this.metadataCacheFile, 'utf8');
        this.metadataCache = JSON.parse(data);
      } catch (error) {
        console.error('Error loading metadata cache:', error);
        this.metadataCache = [];
      }
    }
  }

  // Get all articles metadata (for listings)
  public getAllMetadata(): ArticleMetadata[] {
    if (!this.isInitialized) {
      this.loadMetadataCache();
      this.isInitialized = true;
    }
    return this.metadataCache;
  }

  // Get featured articles metadata
  public getFeaturedMetadata(): ArticleMetadata[] {
    return this.getAllMetadata().filter(article => article.featured);
  }

  // Check if cache is valid for a source file
  public isCacheValid(slug: string, sourceFilename: string): boolean {
    const sourceFile = this.getSourceFilePath(sourceFilename);
    const cacheFile = this.getCacheFilePath(slug);
    
    if (!existsSync(sourceFile) || !existsSync(cacheFile)) {
      return false;
    }

    return !this.isSourceNewer(sourceFile, cacheFile);
  }

  // Get cache statistics
  public getCacheStats(): { totalArticles: number; cacheSize: string; compression: string } {
    const metadata = this.getAllMetadata();
    let totalUncompressed = 0;
    let totalCompressed = 0;

    metadata.forEach(meta => {
      const cached = this.loadFromCache(meta.slug);
      if (cached) {
        const content = this.getArticleContent(meta.slug);
        if (content) {
          totalUncompressed += Buffer.byteLength(content, 'utf8');
          totalCompressed += cached.compressedContent.length;
        }
      }
    });

    const compressionRatio = totalUncompressed > 0 ? 
      ((totalUncompressed - totalCompressed) / totalUncompressed * 100).toFixed(1) : '0';

    return {
      totalArticles: metadata.length,
      cacheSize: `${(totalCompressed / 1024).toFixed(2)} KB`,
      compression: `${compressionRatio}% space saved`
    };
  }

  // Clear cache for a specific article
  public clearArticleCache(slug: string): void {
    const cacheFile = this.getCacheFilePath(slug);
    if (existsSync(cacheFile)) {
      try {
        unlinkSync(cacheFile);
        delete this.cache[slug];
        
        // Remove from metadata cache
        this.metadataCache = this.metadataCache.filter(m => m.slug !== slug);
        writeFileSync(this.metadataCacheFile, JSON.stringify(this.metadataCache, null, 2));
      } catch (error) {
        console.error(`Error clearing cache for ${slug}:`, error);
      }
    }
  }

  // Clear all cache
  public clearAllCache(): void {
    try {
      if (existsSync(this.cacheDir)) {
        rmSync(this.cacheDir, { recursive: true, force: true });
        this.ensureCacheDir();
        this.cache = {};
        this.metadataCache = [];
      }
    } catch (error) {
      console.error('Error clearing all cache:', error);
    }
  }
}

// Singleton instance
export const articleCache = new ArticleCacheManager();

// Utility functions for easy access
export async function getCachedArticleMetadata(): Promise<ArticleMetadata[]> {
  return articleCache.getAllMetadata();
}

export async function getCachedFeaturedMetadata(): Promise<ArticleMetadata[]> {
  return articleCache.getFeaturedMetadata();
}

export function getCachedArticleContent(slug: string): string | null {
  return articleCache.getArticleContent(slug);
}
