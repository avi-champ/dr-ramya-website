// src/lib/articles.ts
// ✅ PRIMARY SOURCE FOR ARTICLE DATA - Reads directly from markdown files
// This ensures publishDate and lastUpdated are always from the single source of truth
import yaml from 'js-yaml';

// Only import fs and path on server side
let fs: typeof import('fs') | null = null;
let path: typeof import('path') | null = null;

if (typeof window === 'undefined') {
  // Server-side imports
  fs = require('fs');
  path = require('path');
}

export interface IAPSource {
  title: string;
  url: string; // Making this required, not optional
  type: 'Guideline' | 'Position Paper' | 'Recommendation' | 'Research' | 'Educational Material';
  publishDate?: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  htmlContent: string;
  category: 'Common Conditions' | 'Vaccination' | 'Emergency Care' | 'Development' | 'Nutrition' | 'Prevention' | 'Newborn Care';
  tags: string[];
  readingTime: number;
  publishDate: string;
  lastUpdated: string;
  ageGroup: 'Newborn' | 'Infant' | 'Toddler' | 'Preschool' | 'School Age' | 'All Ages';
  severity: 'Low' | 'Medium' | 'High' | 'Emergency';
  iapSources?: {
    title: string;
    url: string;
    type: string;
    publishDate: string;
  }[];
  featured: boolean;
  slug: string;
  author: string;
  views?: number;
}

// Dynamic imports for markdown files with server/client compatibility
const importMarkdownFile = async (fileName: string): Promise<string | null> => {
  try {
    // Check if we're on the server side
    if (typeof window === 'undefined') {
      // Server-side: read file directly from filesystem
      try {
        console.log(`Server-side: Reading markdown file directly: ${fileName}.md`);
        if (!fs || !path) {
          console.log('fs or path modules not available');
          return null;
        }
        const filePath = path.join(process.cwd(), 'src', 'content', 'articles', `${fileName}.md`);
        const content = fs.readFileSync(filePath, 'utf8');
        console.log(`Successfully read markdown file: ${fileName}.md`);
        return content;
      } catch (fsError) {
        console.log(`Server-side file read failed for: ${fileName}.md`, fsError);
        return null;
      }
    } else {
      // Client-side: use fetch to get content from API route
      console.log(`Client-side: Fetching markdown file: ${fileName}.md`);
      const response = await fetch(`/api/articles/${fileName}.md`);
      
      if (response.ok) {
        const content = await response.text();
        console.log(`Successfully fetched markdown file: ${fileName}.md`);
        return content;
      } else {
        console.log(`Failed to fetch markdown file: ${fileName}.md, status: ${response.status}`);
        return null;
      }
    }
  } catch (error) {
    console.log(`Error with markdown file: ${fileName}.md`, error);
    
    // Fallback: try dynamic import (for build-time bundling)
    try {
      console.log(`Attempting dynamic import fallback for: ${fileName}.md`);
      const moduleImport = await import(`../content/articles/${fileName}.md`);
      return moduleImport.default || moduleImport;
    } catch (importError) {
      console.log(`Dynamic import also failed for: ${fileName}.md`, importError);
      return null;
    }
  }
};

// Article slug to file name mapping - comprehensive mapping
const articleFileMap: { [key: string]: string } = {
  // Map both old and new slugs to the correct filenames
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

// Fallback article data (for when markdown files aren't available yet)
const fallbackArticles: { [key: string]: Article } = {
  'fever-in-children-guide': {
    id: '1',
    title: 'Fever in Children: Complete Management Guide',
    description: 'Comprehensive guide on managing fever in children, including when to worry and home care tips based on IAP guidelines.',
    content: `# Fever in Children: Complete Management Guide

Fever is one of the most common reasons parents seek medical attention for their children. Understanding when fever is concerning and how to manage it properly can help parents provide appropriate care while knowing when to seek professional help.

## What is Fever?

**Fever is defined as:**
- **Rectal temperature** ≥ 100.4°F (38°C)
- **Oral temperature** ≥ 100°F (37.8°C)
- **Axillary (armpit) temperature** ≥ 99°F (37.2°C)

> **Important Note:** According to IAP guidelines, fever is a symptom, not a disease. It's the body's natural response to infection or inflammation.

## When to Worry About Fever

### 🚨 **Emergency Signs - Seek Immediate Medical Attention:**

- **Infants under 3 months:** Any fever ≥ 100.4°F (38°C)
- **Children 3-6 months:** Fever ≥ 102°F (39°C)
- **Any age:** Fever with difficulty breathing, persistent crying, or lethargy
- **Febrile seizures:** Convulsions during fever
- **Severe dehydration:** Dry mouth, no tears, reduced urination

## Home Management of Fever

### 1. **Comfort Measures**

**Recommended:**
- Light clothing and bedding
- Cool, well-ventilated room
- Adequate fluid intake
- Rest and sleep
- Lukewarm sponge bath

**Avoid:**
- Alcohol-based sponging
- Ice baths or cold water
- Bundling in heavy blankets

### 2. **Medication Guidelines**

#### **Paracetamol (Acetaminophen)**
- **Dosage:** 10-15 mg/kg every 4-6 hours
- **Maximum:** 5 doses in 24 hours
- **Age:** Safe from birth

#### **Ibuprofen**
- **Dosage:** 5-10 mg/kg every 6-8 hours
- **Maximum:** 4 doses in 24 hours
- **Age:** Only for children > 6 months

> **IAP Recommendation:** Use single antipyretic. Combination therapy is not routinely recommended.

## Key Takeaways

1. **Fever is a symptom, not a disease**
2. **Focus on the child's overall condition**
3. **Comfort measures are as important as medication**
4. **Know when to seek medical help**`,
    htmlContent: '',
    category: 'Common Conditions',
    tags: ['fever', 'temperature', 'management', 'symptoms', 'pediatric care'],
    readingTime: 8,
    publishDate: '2024-01-15',
    lastUpdated: '2024-01-15',
    ageGroup: 'All Ages',
    severity: 'Medium',
    featured: true,
    slug: 'fever-in-children-guide',
    author: 'Dr. Ramya Bharathi R',
    views: 1547,
    iapSources: [
      {
        title: 'IAP Guidelines on Fever Management in Children',
        url: 'https://iapindia.org/pdf/IAP-Guidelines-for-Fever.pdf', // ✅ Correct URL
        type: 'Guideline',
        publishDate: '2023'
      },
      {
        title: 'IAP Standard Treatment Guidelines - Management of Fever without Focus in Office Practice',
        url: 'https://iapindia.org/pdf/Ch-146-Management-of-Fever-without-Focus-in-Office-Practice.pdf', // ✅ Add this
        type: 'Clinical Guidelines',
        publishDate: '2023'
      },
      {
        title: 'IAP Comprehensive Guidelines Repository',
        url: 'https://iapindia.org/publication-recommendations-and-guidelines/', // ✅ Add this  
        type: 'Guidelines Repository',
        publishDate: '2023'
      }
    ]
  },
  'vaccination-guidelines-iap': {
    id: '2',
    title: 'Vaccination Guidelines: IAP Immunization Schedule',
    description: 'Complete vaccination schedule as per IAP recommendations for Indian children.',
    content: `# Vaccination Guidelines: IAP Immunization Schedule

The Indian Academy of Pediatrics (IAP) provides comprehensive vaccination guidelines for children from birth to 18 years.

## Birth to 6 Months

- **Birth:** BCG, Hepatitis B (1st dose), OPV (0 dose)
- **6 weeks:** DTwP/DTaP (1st dose), IPV (1st dose), Hib (1st dose)
- **10 weeks:** DTwP/DTaP (2nd dose), IPV (2nd dose), Hib (2nd dose)
- **14 weeks:** DTwP/DTaP (3rd dose), IPV (3rd dose), Hib (3rd dose)

## Important Guidelines

> **Remember:** Follow the exact schedule recommended by your pediatrician. Delays can leave your child vulnerable.

## Common Side Effects

- Mild fever (usually <101°F)
- Redness at injection site
- Fussiness or crying
- Loss of appetite

## When to Contact Doctor

- High fever >102°F (39°C)
- Persistent crying for >3 hours
- Severe swelling at injection site`,
    htmlContent: '',
    category: 'Vaccination',
    tags: ['vaccination', 'immunization', 'schedule', 'prevention'],
    readingTime: 12,
    publishDate: '2024-01-20',
    lastUpdated: '2024-01-20',
    ageGroup: 'All Ages',
    severity: 'Low',
    featured: true,
    slug: 'vaccination-guidelines-iap',
    author: 'Dr. Ramya Bharathi R',
    views: 982,
    iapSources: [
      {
        title: 'IAP Immunization Schedule 2023-24',
        url: 'https://iapindia.org/immunization-schedule',
        type: 'Guideline',
        publishDate: '2023'
      }
    ]
  },
  'common-cold-treatment': {
    id: '3',
    title: 'Common Cold Treatment in Children',
    description: 'Evidence-based approach to managing common cold symptoms in pediatric patients.',
    content: `# Common Cold Treatment in Children

The common cold is a viral infection of the upper respiratory tract. Children typically get 6-8 colds per year.

## Symptoms

- Runny or stuffy nose
- Sneezing
- Mild cough
- Low-grade fever (sometimes)
- Sore throat

## Home Treatment

- **Rest:** Ensure adequate sleep
- **Fluids:** Offer plenty of liquids
- **Humidification:** Use a cool-mist humidifier
- **Saline drops:** For nasal congestion
- **Honey:** For children >1 year with cough

> **Warning:** Do not give honey to children under 1 year due to botulism risk.

## When to See a Doctor

- Fever >100.4°F in infants <3 months
- Difficulty breathing
- Persistent fever >3 days
- Signs of ear infection`,
    htmlContent: '',
    category: 'Common Conditions',
    tags: ['cold', 'cough', 'runny nose', 'treatment'],
    readingTime: 6,
    publishDate: '2024-01-25',
    lastUpdated: '2024-01-25',
    ageGroup: 'All Ages',
    severity: 'Low',
    featured: false,
    slug: 'common-cold-treatment',
    author: 'Dr. Ramya Bharathi R',
    views: 756,
    iapSources: [
      {
        title: 'IAP Position Paper on URTI Management',
        url: 'https://iapindia.org/urti-management',
        type: 'Position Paper',
        publishDate: '2023'
      }
    ]
  }
};

// Enhanced markdown to HTML converter
function markdownToHtml(markdown: string): string {
  let html = markdown
    // Headers (process in order from largest to smallest)
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    
    // Code blocks (before regular code)
    .replace(/```[\s\S]*?```/gim, (match) => {
      return '<pre><code>' + match.replace(/```/g, '') + '</code></pre>';
    })
    
    // Inline code
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    
    // Lists (improved handling)
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gi, (match) => {
      return '<ul>' + match + '</ul>';
    })
    .replace(/<\/ul>\s*<ul>/gim, '')
    
    // Numbered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    
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
    .replace(/<p>(<ol>.*<\/ol>)<\/p>/gi, '$1')
    .replace(/<p>(<blockquote>.*<\/blockquote>)<\/p>/gim, '$1')
    .replace(/<p>(<pre><code>.*<\/code><\/pre>)<\/p>/gi, '$1');
  
  return html;
}

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
    const frontmatter = yaml.load(frontmatterText) as any;
    console.log('YAML parsed frontmatter:', frontmatter); // Debug
    console.log('YAML parsed iapSources:', frontmatter?.iapSources); // Debug
    return { frontmatter: frontmatter || {}, content: markdownContent };
  } catch (error) {
    console.error('YAML parsing error:', error);
    return { frontmatter: {}, content: markdownContent };
  }
}

// Get article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  console.log('getArticleBySlug called with slug:', slug);
  
  try {
    // First try to load from actual markdown file
    const fileName = articleFileMap[slug];
    console.log('Mapped filename:', fileName, 'for slug:', slug);
    
    if (fileName) {
      console.log(`Attempting to load markdown file: ${fileName}.md`);
      
      const markdownContent = await importMarkdownFile(fileName);
      
      if (markdownContent && typeof markdownContent === 'string') {
        console.log(`Successfully loaded markdown file: ${fileName}.md`);
        
        const { frontmatter, content } = parseFrontmatter(markdownContent);
        console.log('Parsed frontmatter title:', frontmatter.title);
        console.log('Parsed frontmatter publishDate:', frontmatter.publishDate);
        
        // ✅ Create article from markdown frontmatter
        const article: Article = {
          id: frontmatter.id || slug,
          title: frontmatter.title || 'Article Title', // This should use frontmatter.title
          description: frontmatter.description || 'Article description',
          content: content,
          htmlContent: markdownToHtml(content),
          category: frontmatter.category || 'Common Conditions',
          tags: frontmatter.tags || [],
          readingTime: frontmatter.readingTime || 5,
          publishDate: frontmatter.publishDate || new Date().toISOString(), // ✅ Use frontmatter date
          lastUpdated: frontmatter.lastUpdated || frontmatter.publishDate || new Date().toISOString(),
          ageGroup: frontmatter.ageGroup || 'All Ages',
          severity: frontmatter.severity || 'Low',
          iapSources: frontmatter.iapSources || [],
          featured: frontmatter.featured || false,
          slug: frontmatter.slug || slug,
          author: frontmatter.author || 'Dr. Ramya Bharathi R',
          views: frontmatter.views || 0
        };
        
        console.log(`Article created from markdown:`, article.title);
        return article;
      }
    }
    
    console.log(`Markdown file not found, using fallback data for: ${slug}`);
    console.log('Available fallback slugs:', Object.keys(fallbackArticles));
    
    // Fallback to predefined data
    const article = fallbackArticles[slug];
    if (article) {
      console.log('Found fallback article:', article.title);
      return {
        ...article,
        htmlContent: markdownToHtml(article.content)
      };
    }
    
    console.log(`No fallback data found for: ${slug}`);
    return null;
  } catch (error) {
    console.error('Error loading article:', error);
    
    // Try fallback
    const article = fallbackArticles[slug];
    if (article) {
      console.log('Using fallback after error:', article.title);
      return {
        ...article,
        htmlContent: markdownToHtml(article.content)
      };
    }
    
    return null;
  }
}

// Get all articles
export async function getAllArticles(): Promise<Article[]> {
  const articles: Article[] = [];
  
  // Try to load all articles from both markdown files and fallback data
  const allSlugs = new Set([
    ...Object.keys(articleFileMap),
    ...Object.keys(fallbackArticles)
  ]);
  
  for (const slug of allSlugs) {
    const article = await getArticleBySlug(slug);
    if (article) {
      articles.push(article);
    }
  }
  
  // Remove duplicates (prefer markdown over fallback)
  const uniqueArticles = articles.filter((article, index, self) => 
    index === self.findIndex(a => a.slug === article.slug)
  );
  
  // Sort by publish date (newest first)
  return uniqueArticles.sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

// Get featured articles
export async function getFeaturedArticles(): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter(article => article.featured);
}

// Helper function to get filename from slug (for use in individual article pages)
export function getFilenameFromSlug(slug: string): string | null {
  return articleFileMap[slug] || null;
}