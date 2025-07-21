// src/types/index.ts

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
  iapSources: IAPSource[];
  featured: boolean;
  slug: string;
  author: string;
  views?: number;
}

export interface IAPSource {
  title: string;
  url: string;
  type: 'Guideline' | 'Position Paper' | 'Recommendation' | 'Research' | 'Educational Material';
  publishDate?: string;
}

export interface ArticleMetadata {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readingTime: number;
  publishDate: string;
  ageGroup: string;
  severity: string;
  featured: boolean;
  slug: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FilterOptions {
  category?: string;
  ageGroup?: string;
  severity?: string;
  tags?: string[];
  featured?: boolean;
}

export interface SearchFilters {
  searchTerm: string;
  category: string;
  ageGroup: string;
  severity: string;
  sortBy: 'newest' | 'oldest' | 'alphabetical' | 'reading-time';
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  type: 'appointment' | 'emergency' | 'general';
}

// Appointment types
export interface AppointmentRequest {
  patientName: string;
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  urgency: 'routine' | 'urgent' | 'emergency';
}

// Service types
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  details?: string[];
  featured?: boolean;
}