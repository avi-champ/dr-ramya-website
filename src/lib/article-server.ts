// src/lib/article-server.ts
// ✅ SERVER-SIDE ONLY - Article functions that read directly from filesystem
import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { join } from 'path';

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  htmlContent: string;
  category: 'Common Conditions' | 'Vaccination' | 'Emergency Care' | 'Development' | 'Nutrition' | 'Prevention' | 'Newborn Care' | 'Allergic Conditions' | 'Sleep & Behavior';
  tags: string[];
  readingTime: number;
  publishDate: string;
  lastUpdated: string;
  ageGroup: 'Newborn' | 'Infant' | 'Toddler' | 'Preschool' | 'School Age' | 'All Ages' | '0-3 Months';
  severity: 'Low' | 'Medium' | 'High' | 'Emergency';
  featured: boolean;
  slug: string;
  author: string;
  views?: number;
  iapSources?: Array<{
    title: string;
    url: string;
    type: string;
    publishDate: string;
  }>;
}

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

// Basic markdown to HTML converter
function markdownToHtml(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    
    // Code blocks
    .replace(/```[\s\S]*?```/gim, (match) => {
      return '<pre><code>' + match.replace(/```/g, '') + '</code></pre>';
    })
    
    // Inline code
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    
    // Lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gi, (match) => {
      return '<ul>' + match + '</ul>';
    })
    .replace(/<\/ul>\s*<ul>/gim, '')
    
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    
    // Line breaks and paragraphs
    .replace(/\n\n/gim, '</p><p>')
    .replace(/\n/gim, '<br>');
    
  // Wrap in paragraphs
  html = '<p>' + html + '</p>';
  
  // Clean up empty paragraphs and fix structure
  html = html
    .replace(/<p><\/p>/gim, '')
    .replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/gim, '$1')
    .replace(/<p>(<ul>.*<\/ul>)<\/p>/gi, '$1')
    .replace(/<p>(<blockquote>.*<\/blockquote>)<\/p>/gim, '$1')
    .replace(/<p>(<pre><code>.*<\/code><\/pre>)<\/p>/gi, '$1');
  
  return html;
}

// Get article by slug (server-side only)
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fileName = articleFileMap[slug];
    
    if (!fileName) {
      console.log(`No filename mapping found for slug: ${slug}`);
      return null;
    }
    
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
        htmlContent: markdownToHtml(content),
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
        author: getFrontmatterValue('author', 'Dr. R Ramya Bharathi'),
        views: getFrontmatterValue('views', 0)
      };
      
      return article;
    } catch (fileError) {
      console.log(`File not found: ${filePath}`, fileError);
      return null;
    }
  } catch (error) {
    console.error('Error loading article:', error);
    return null;
  }
}

// Get all articles (server-side only)
export async function getAllArticles(): Promise<Article[]> {
  const articles: Article[] = [];
  
  for (const slug of Object.keys(articleFileMap)) {
    const article = await getArticleBySlug(slug);
    if (article) {
      articles.push(article);
    }
  }
  
  // Remove duplicates (prefer the first occurrence)
  const uniqueArticles = articles.filter((article, index, self) => 
    index === self.findIndex(a => a.slug === article.slug)
  );
  
  // Sort by last updated date (newest first)
  return uniqueArticles.sort((a, b) => 
    new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
  );
}

// Get featured articles (server-side only)
export async function getFeaturedArticles(): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter(article => article.featured);
}

// Get all articles with metadata (alias for getAllArticles)
export async function getAllArticlesWithMetadata(): Promise<Article[]> {
  return getAllArticles();
}

// Get featured articles with metadata (alias for getFeaturedArticles)
export async function getFeaturedArticlesWithMetadata(): Promise<Article[]> {
  return getFeaturedArticles();
}

// Helper function to get filename from slug
export function getFilenameFromSlug(slug: string): string | null {
  return articleFileMap[slug] || null;
}
