export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readingTime: number;
  publishDate: string;
  lastUpdated: string;
  ageGroup: string;
  severity: string;
  featured: boolean;
  slug: string;
  author: string;
  views?: number;
  content?: string;
  htmlContent?: string;
  iapSources?: Array<{
    title: string;
    url: string;
    type: string;
    publishDate?: string;
  }>;
}

// Basic metadata for articles - dates will be read from markdown frontmatter
export const articlesData: Article[] = [
  {
    id: '1',
    title: 'Fever in Children: Complete Management Guide',
    description: 'Comprehensive guide on managing fever in children, including when to worry and home care tips based on IAP guidelines.',
    category: 'Common Conditions',
    tags: ['fever', 'temperature', 'management', 'symptoms'],
    readingTime: 8,
    publishDate: '2024-12-22', // Fallback - will be overridden by markdown
    lastUpdated: '2024-12-22', // Fallback - will be overridden by markdown
    ageGroup: 'All Ages',
    severity: 'Medium',
    featured: true,
    slug: 'fever-in-children-guide', // ✅ Match frontmatter slug
    author: 'Dr. R Ramya Bharathi',
    views: 1547
  },
  {
    id: '2',
    title: 'Vaccination Guidelines: IAP Immunization Schedule',
    description: 'Complete vaccination schedule as per IAP recommendations for Indian children.',
    category: 'Vaccination',
    tags: ['vaccination', 'immunization', 'schedule', 'prevention'],
    readingTime: 12,
    publishDate: '2024-12-22', // Fallback - will be overridden by markdown
    lastUpdated: '2024-12-22', // Fallback - will be overridden by markdown
    ageGroup: 'All Ages',
    severity: 'Low',
    featured: true,
    slug: 'pediatric-vaccination-guidelines', // ✅ Match frontmatter slug
    author: 'Dr. R Ramya Bharathi',
    views: 982
  },
  {
    id: '3',
    title: 'Common Cold Treatment in Children',
    description: 'Evidence-based approach to managing common cold symptoms in pediatric patients according to IAP guidelines.',
    category: 'Common Conditions',
    tags: ['cold', 'cough', 'runny nose', 'treatment', 'symptoms', 'respiratory'],
    readingTime: 6,
    publishDate: '2024-12-22', // Fallback - will be overridden by markdown
    lastUpdated: '2024-12-22', // Fallback - will be overridden by markdown
    ageGroup: 'All Ages',
    severity: 'Low',
    featured: true,
    slug: 'common-cold-treatment',
    author: 'Dr. R Ramya Bharathi',
    views: 756
  },
  {
    id: '4',
    title: 'Developmental Milestones in Children: Complete Guide',
    description: 'Comprehensive guide to child development milestones from birth to 5 years based on IAP and WHO standards.',
    category: 'Development',
    tags: ['milestones', 'development', 'growth', 'motor skills', 'language', 'cognitive'],
    readingTime: 12,
    publishDate: '2024-12-22', // Fallback - will be overridden by markdown
    lastUpdated: '2024-12-22', // Fallback - will be overridden by markdown
    ageGroup: 'All Ages',
    severity: 'Low',
    featured: true,
    slug: 'developmental-milestones-guide', // ✅ Match frontmatter slug
    author: 'Dr. R Ramya Bharathi',
    views: 1423
  },
  {
    id: '5',
    title: 'Childhood Allergies: A Comprehensive Management Guide',
    description: 'Evidence-based approach to diagnosing, treating, and managing allergies in children with current medical guidelines.',
    category: 'Allergic Conditions',
    tags: ['allergies', 'food allergies', 'asthma', 'eczema', 'anaphylaxis', 'prevention', 'treatment'],
    readingTime: 8,
    publishDate: '2024-12-22', // Fallback - will be overridden by markdown
    lastUpdated: '2024-12-22', // Fallback - will be overridden by markdown
    ageGroup: 'All Ages',
    severity: 'Medium',
    featured: false,
    slug: 'childhood-allergies-guide', // ✅ Match frontmatter slug
    author: 'Dr. R Ramya Bharathi',
    views: 892
  },
  {
    id: '6',
    title: 'Diarrhea Management in Children',
    description: 'Complete guide to managing acute and chronic diarrhea in children with IAP recommendations.',
    category: 'Common Conditions',
    tags: ['diarrhea', 'dehydration', 'gastroenteritis', 'oral rehydration', 'prevention'],
    readingTime: 10,
    publishDate: '2024-12-22', // Fallback - will be overridden by markdown
    lastUpdated: '2024-12-22', // Fallback - will be overridden by markdown
    ageGroup: 'All Ages',
    severity: 'Medium',
    featured: false,
    slug: 'diarrhea-management-guide', // ✅ Match frontmatter slug
    author: 'Dr. R Ramya Bharathi',
    views: 645
  },
  {
    id: '7',
    title: 'Emergency Signs in Children: When to Seek Immediate Care',
    description: 'Critical warning signs in children that require immediate medical attention - a guide for parents.',
    category: 'Emergency Care',
    tags: ['emergency', 'warning signs', 'urgent care', 'pediatric emergencies', 'red flags'],
    readingTime: 6,
    publishDate: '2024-12-22', // Fallback - will be overridden by markdown
    lastUpdated: '2024-12-22', // Fallback - will be overridden by markdown
    ageGroup: 'All Ages',
    severity: 'Emergency',
    featured: false,
    slug: 'pediatric-emergency-poisoning-guide', // ✅ Match frontmatter slug
    author: 'Dr. R Ramya Bharathi',
    views: 1234
  },
  {
    id: '8',
    title: 'Newborn Care: Essential Guide for New Parents',
    description: 'Comprehensive guide to newborn care including feeding, sleeping, hygiene, and development.',
    category: 'Newborn Care',
    tags: ['newborn', 'breastfeeding', 'sleep', 'hygiene', 'development', 'parenting'],
    readingTime: 15,
    publishDate: '2024-12-22', // Fallback - will be overridden by markdown
    lastUpdated: '2024-12-22', // Fallback - will be overridden by markdown
    ageGroup: '0-3 Months',
    severity: 'Low',
    featured: false,
    slug: 'newborn-care-complete-guide', // ✅ Match frontmatter slug
    author: 'Dr. R Ramya Bharathi',
    views: 2156
  },
  {
    id: '9',
    title: 'Nutrition Guidelines for Children',
    description: 'Age-specific nutrition recommendations for children from infancy through adolescence.',
    category: 'Nutrition',
    tags: ['nutrition', 'diet', 'growth', 'vitamins', 'minerals', 'healthy eating'],
    readingTime: 12,
    publishDate: '2024-12-22', // Fallback - will be overridden by markdown
    lastUpdated: '2024-12-22', // Fallback - will be overridden by markdown
    ageGroup: 'All Ages',
    severity: 'Low',
    featured: false,
    slug: 'child-nutrition-complete-guide', // ✅ Match frontmatter slug
    author: 'Dr. R Ramya Bharathi',
    views: 987
  },
  {
    id: '10',
    title: 'Sleep Patterns in Children: A Complete Guide',
    description: 'Understanding normal sleep patterns and addressing common sleep issues in children.',
    category: 'Sleep & Behavior',
    tags: ['sleep', 'sleep patterns', 'insomnia', 'sleep hygiene', 'bedtime routine'],
    readingTime: 10,
    publishDate: '2024-12-22', // Fallback - will be overridden by markdown
    lastUpdated: '2024-12-22', // Fallback - will be overridden by markdown
    ageGroup: 'All Ages',
    severity: 'Low',
    featured: false,
    slug: 'pediatric-sleep-patterns-guide', // ✅ Match frontmatter slug
    author: 'Dr. R Ramya Bharathi',
    views: 1098
  }
];

// ⚠️ DEPRECATED: These functions are kept for backward compatibility only
// Use functions from @/lib/article instead for real-time markdown data
export const getFeaturedArticles = () => articlesData.filter(article => article.featured);
export const getAllArticles = () => articlesData;
export const getArticlesByCategory = (category: string) => articlesData.filter(article => article.category === category);