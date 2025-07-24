// SEO Components Export
export { default as StructuredData } from './StructuredData';
export { default as LocalBusinessSchema } from './LocalBusinessSchema';
export { default as GoogleMyBusinessOptimization } from './GoogleMyBusinessOptimization';
export { default as BreadcrumbSchema } from './BreadcrumbSchema';
export { default as HealthArticleSchema } from './HealthArticleSchema';
export { default as SEOAnalytics } from './SEOAnalytics';
export { default as SEOReportComponent } from './SEOReportComponent';
export { default as SEO } from './SEO';

// Types
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  article?: boolean;
  noindex?: boolean;
  structuredDataType?: 'organization' | 'medicalBusiness' | 'person' | 'article' | 'breadcrumb';
  structuredData?: Record<string, unknown>;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  url?: string;
  image?: string;
  category?: string;
  readingTime?: number;
  medicalSpecialty?: string;
}
