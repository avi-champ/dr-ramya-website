import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pediatric Services | Dr. Ramya Pediatrics - Child Healthcare Specialist',
  description: 'Comprehensive pediatric care services including vaccinations, developmental assessments, newborn care, and treatment for children aged 0-18 years. Expert pediatric care by Dr. Ramya.',
  keywords: [
    'pediatric services',
    'child healthcare',
    'pediatrician',
    'Dr. Ramya',
    'vaccinations',
    'child development',
    'newborn care',
    'pediatric treatment',
    'child doctor',
    'immunizations',
    'growth monitoring',
    'developmental milestones'
  ],
  openGraph: {
    title: 'Pediatric Services | Dr. Ramya Pediatrics',
    description: 'Expert pediatric care services for your child\'s health and development. Vaccinations, assessments, and specialized treatment by Dr. Ramya.',
    type: 'website',
    url: 'https://drramyapediatrics.com/services',
    siteName: 'Dr. Ramya Pediatrics',
    locale: 'en_US',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Ramya Pediatric Services',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pediatric Services | Dr. Ramya Pediatrics',
    description: 'Comprehensive child healthcare services including vaccinations, developmental assessments, and expert pediatric care.',
    images: ['/twitter-services.jpg'],
    creator: '@drramyapediatrics'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://drramyapediatrics.com/services'
  },
  other: {
    'article:author': 'Dr. Ramya',
    'article:publisher': 'Dr. Ramya Pediatrics',
    'og:locality': 'Your City',
    'og:region': 'Your State',
    'og:country_name': 'India',
  }
};

export default metadata;
