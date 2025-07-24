// src/lib/article-server-optimized.ts
// Optimized server-side article functions with caching and compression
import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Article } from './article-server';
import { articleCache } from './article-cache';

// Article slug to file name mapping
const articleFileMap: { [key: string]: string } = {
  'fever-in-children-guide': 'fever-in-children',
  'fever-in-children': 'fever-in-children',
  'pediatric-vaccination-guidelines': 'vaccination-guidelines',
  'vaccination-guidelines-iap': 'vaccination-guidelines',
  'vaccination-guidelines': 'vaccination-guidelines',
  'common-cold-treatment': 'common-cold-treatment',
  'childhood-allergies-guide': 'childhood-allergies',
  'childhood-allergies': 'childhood-allergies',
  'developmental-milestones-guide': 'developmental-milestones',
  'developmental-milestones': 'developmental-milestones',
  'diarrhea-management-guide': 'diarrhea-management',
  'diarrhea-management': 'diarrhea-management',
  'pediatric-emergency-poisoning-guide': 'emergency-signs',
  'emergency-signs': 'emergency-signs',
  'newborn-care-complete-guide': 'newborn-care',
  'newborn-care': 'newborn-care',
  'child-nutrition-complete-guide': 'nutrition-guidelines',
  'nutrition-guidelines': 'nutrition-guidelines',
  'pediatric-sleep-patterns-guide': 'sleep-patterns',
  'sleep-patterns': 'sleep-patterns',
};

// Enhanced frontmatter parser
function parseFrontmatter(content: string): { frontmatter: Record<string, unknown>; content: string } {
  const frontmatterRegex = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  const frontmatterText = match[1];
  const markdownContent = match[2];
  
  try {
    const frontmatter = yaml.load(frontmatterText) as Record<string, unknown>;
    return { frontmatter: frontmatter || {}, content: markdownContent };
  } catch (error) {
    console.error('YAML parsing error:', error);
    return { frontmatter: {}, content: markdownContent };
  }
}

// Optimized markdown to HTML converter with better performance
function markdownToHtml(markdown: string): string {
  // Use a more efficient approach with pre-compiled regex patterns
  const patterns = [
    // Headers (process in order from h3 to h1 to avoid conflicts)
    { regex: /^### (.*$)/gim, replacement: '<h3>$1</h3>' },
    { regex: /^## (.*$)/gim, replacement: '<h2>$1</h2>' },
    { regex: /^# (.*$)/gim, replacement: '<h1>$1</h1>' },
    
    // Bold and italic
    { regex: /\*\*(.*?)\*\*/gim, replacement: '<strong>$1</strong>' },
    { regex: /\*(.*?)\*/gim, replacement: '<em>$1</em>' },
    
    // Code blocks (must be processed before inline code)
    { regex: /```([\s\S]*?)```/gim, replacement: '<pre><code>$1</code></pre>' },
    
    // Inline code
    { regex: /`(.*?)`/gim, replacement: '<code>$1</code>' },
    
    // Links
    { regex: /\[([^\]]+)\]\(([^)]+)\)/gim, replacement: '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>' },
    
    // Unordered lists
    { regex: /^\* (.+$)/gim, replacement: '<li>$1</li>' },
    { regex: /^\- (.+$)/gim, replacement: '<li>$1</li>' },
    
    // Ordered lists
    { regex: /^\d+\. (.+$)/gim, replacement: '<li>$1</li>' },
    
    // Blockquotes
    { regex: /^> (.+$)/gim, replacement: '<blockquote>$1</blockquote>' },
    
    // Line breaks (convert double newlines to paragraphs)
    { regex: /\n\n/gim, replacement: '</p><p>' },
  ];

  let html = markdown;
  
  // Apply all transformations
  patterns.forEach(({ regex, replacement }) => {
    html = html.replace(regex, replacement);
  });

  // Wrap in paragraph tags and clean up
  html = '<p>' + html + '</p>';
  
  // Clean up multiple paragraph tags and list formatting
  html = html
    .replace(/<\/p>\s*<p>/gim, '</p><p>')
    .replace(/(<li>.*<\/li>\s*)+/gim, '<ul>$&</ul>')
    .replace(/<\/ul>\s*<ul>/gim, '')
    .replace(/<p>(<ul>.*<\/ul>)<\/p>/gim, '$1')
    .replace(/<p>(<blockquote>.*<\/blockquote>)<\/p>/gim, '$1')
    .replace(/<p>(<pre><code>.*<\/code><\/pre>)<\/p>/gim, '$1')
    .replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/gim, '$1');

  return html;
}

// Get article by slug with caching optimization
export async function getArticleBySlugOptimized(slug: string, includeContent = false): Promise<Article | null> {
  try {
    const fileName = articleFileMap[slug];
    if (!fileName) {
      console.log(`No filename mapping found for slug: ${slug}`);
      return null;
    }

    // Check if cache is valid
    if (articleCache.isCacheValid(slug, fileName)) {
      console.log(`Using cached article: ${slug}`);
      
      if (includeContent) {
        // Get content from cache and decompress
        const content = articleCache.getArticleContent(slug);
        if (content) {
          const metadata = articleCache.getAllMetadata().find(m => m.slug === slug);
          if (metadata) {
            return {
              ...metadata,
              content,
              htmlContent: markdownToHtml(content),
              iapSources: [] // This would need to be stored in cache if needed
            } as Article;
          }
        }
      } else {
        // Return only metadata for listing pages
        const metadata = articleCache.getAllMetadata().find(m => m.slug === slug);
        if (metadata) {
          return {
            ...metadata,
            content: '',
            htmlContent: '',
            iapSources: []
          } as Article;
        }
      }
    }

    // Cache miss or invalid - load from source
    console.log(`Loading article from source: ${fileName}.md`);
    const filePath = join(process.cwd(), 'src', 'content', 'articles', `${fileName}.md`);
    
    try {
      const markdownContent = readFileSync(filePath, 'utf8');
      const { frontmatter, content } = parseFrontmatter(markdownContent);
      
      // Type-safe frontmatter access
      const getFrontmatterValue = <T>(key: string, defaultValue: T): T => {
        return (frontmatter[key] as T) ?? defaultValue;
      };

      const article: Article = {
        id: getFrontmatterValue('id', slug),
        title: getFrontmatterValue('title', 'Article Title'),
        description: getFrontmatterValue('description', 'Article description'),
        content: content,
        htmlContent: includeContent ? markdownToHtml(content) : '',
        category: getFrontmatterValue('category', 'Common Conditions' as Article['category']),
        tags: getFrontmatterValue('tags', [] as string[]),
        readingTime: getFrontmatterValue('readingTime', 5),
        publishDate: getFrontmatterValue('publishDate', new Date().toISOString().split('T')[0]),
        lastUpdated: getFrontmatterValue('lastUpdated', getFrontmatterValue('publishDate', new Date().toISOString().split('T')[0])),
        ageGroup: getFrontmatterValue('ageGroup', 'All Ages' as Article['ageGroup']),
        severity: getFrontmatterValue('severity', 'Low' as Article['severity']),
        iapSources: getFrontmatterValue('evidenceBasedSources', getFrontmatterValue('iapSources', [] as Article['iapSources'])),
        featured: getFrontmatterValue('featured', false),
        slug: getFrontmatterValue('slug', slug),
        author: getFrontmatterValue('author', 'Dr. Ramya Bharathi R'),
        views: getFrontmatterValue('views', 0)
      };

      // Cache the article
      articleCache.cacheArticle(slug, article);
      
      return includeContent ? article : {
        ...article,
        content: '',
        htmlContent: ''
      };
      
    } catch (fileError) {
      console.log(`File not found: ${filePath}`, fileError);
      return null;
    }
  } catch (error) {
    console.error('Error loading article:', error);
    return null;
  }
}

// Get all articles metadata (optimized for listing pages)
export async function getAllArticlesMetadata(): Promise<Article[]> {
  // Try to get from cache first
  const cachedMetadata = articleCache.getAllMetadata();
  
  if (cachedMetadata.length > 0) {
    console.log(`Using cached metadata for ${cachedMetadata.length} articles`);
    return cachedMetadata.map(meta => ({
      ...meta,
      content: '',
      htmlContent: '',
      iapSources: []
    })) as Article[];
  }

  // Cache miss - load all articles
  console.log('Loading all articles metadata from source');
  const articles: Article[] = [];
  
  for (const slug of Object.keys(articleFileMap)) {
    const article = await getArticleBySlugOptimized(slug, false);
    if (article) {
      articles.push(article);
    }
  }

  // Sort by last updated date (newest first)
  return articles.sort((a, b) =>
    new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
  );
}

// Get featured articles metadata (optimized)
export async function getFeaturedArticlesMetadata(): Promise<Article[]> {
  const cachedFeatured = articleCache.getFeaturedMetadata();
  
  if (cachedFeatured.length > 0) {
    console.log(`Using cached featured metadata for ${cachedFeatured.length} articles`);
    return cachedFeatured.map(meta => ({
      ...meta,
      content: '',
      htmlContent: '',
      iapSources: []
    })) as Article[];
  }

  // Fallback to loading all and filtering
  const allArticles = await getAllArticlesMetadata();
  return allArticles.filter(article => article.featured);
}

// Batch load articles with content (for sitemap generation, etc.)
export async function getAllArticlesWithContent(): Promise<Article[]> {
  const articles: Article[] = [];
  
  for (const slug of Object.keys(articleFileMap)) {
    const article = await getArticleBySlugOptimized(slug, true);
    if (article) {
      articles.push(article);
    }
  }

  return articles.sort((a, b) =>
    new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
  );
}

// Helper function to get filename from slug
export function getFilenameFromSlug(slug: string): string | null {
  return articleFileMap[slug] || null;
}

// Clear cache function for development/admin use
export function clearArticleCache(slug?: string): void {
  if (slug) {
    articleCache.clearArticleCache(slug);
  } else {
    articleCache.clearAllCache();
  }
}

// Get cache statistics
export function getCacheStats() {
  return articleCache.getCacheStats();
}
