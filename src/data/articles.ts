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
}

export const articlesData: Article[] = [
  {
    id: '1',
    title: 'Fever in Children: Complete Management Guide',
    description: 'Comprehensive guide on managing fever in children, including when to worry and home care tips based on IAP guidelines.',
    category: 'Common Conditions',
    tags: ['fever', 'temperature', 'management', 'symptoms'],
    readingTime: 8,
    publishDate: '2024-12-22', // ✅ Current date
    lastUpdated: '2024-12-22', // ✅ Current date
    ageGroup: 'All Ages',
    severity: 'Medium',
    featured: true,
    slug: 'fever-in-children-guide',
    author: 'Dr. R Ramya Bharathi',
    views: 100
  },
  {
    id: '2',
    title: 'Vaccination Guidelines: IAP Immunization Schedule',
    description: 'Complete vaccination schedule as per IAP recommendations for Indian children.',
    category: 'Vaccination',
    tags: ['vaccination', 'immunization', 'schedule', 'prevention'],
    readingTime: 12,
    publishDate: '2024-12-22', // ✅ Current date
    lastUpdated: '2024-12-22', // ✅ Current date
    ageGroup: 'All Ages',
    severity: 'Low',
    featured: true,
    slug: 'vaccination-guidelines-iap',
    author: 'Dr. R Ramya Bharathi',
    views: 982
  },
  {
    id: '3',
    title: 'Common Cold Treatment in Children',
    description: 'Evidence-based approach to managing common cold symptoms in pediatric patients.',
    category: 'Common Conditions',
    tags: ['cold', 'cough', 'runny nose', 'treatment'],
    readingTime: 6,
    publishDate: '2024-12-22', // ✅ Current date
    lastUpdated: '2024-12-22', // ✅ Current date
    ageGroup: 'All Ages',
    severity: 'Low',
    featured: true,
    slug: 'common-cold-treatment',
    author: 'Dr. R Ramya Bharathi',
    views: 756
  }
];

export const getFeaturedArticles = () => articlesData.filter(article => article.featured);
export const getAllArticles = () => articlesData;