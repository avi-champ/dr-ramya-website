'use client';

import Head from 'next/head';
import StructuredData from './StructuredData';

interface SEOProps {
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

export default function SEO({
  title = 'Dr. Ramya Bharathi R - Best Pediatrician in Perumbakkam, Chennai',
  description = 'Top pediatrician in Perumbakkam, Chennai. Expert child care, vaccination, newborn care & development assessment. 15+ years experience. Book appointment!',
  keywords = 'pediatrician in Perumbakkam, child doctor Chennai, baby vaccination, newborn care specialist, child development assessment',
  canonical,
  ogImage = '/apple-touch-icon.png',
  ogType = 'website',
  article = false,
  noindex = false,
  structuredDataType = 'organization',
  structuredData
}: SEOProps) {
  const siteUrl = 'https://drramya-paediatrics.vercel.app';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Dr. Ramya Bharathi R" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={fullCanonical} />
        
        {/* Robots */}
        <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
        <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content="Dr. Ramya Bharathi R - Pediatrician" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullCanonical} />
        <meta property="og:image" content={fullOgImage} />
        <meta property="og:image:alt" content="Dr. Ramya Bharathi R - Pediatrician in Perumbakkam, Chennai" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullOgImage} />
        <meta name="twitter:image:alt" content="Dr. Ramya Bharathi R - Pediatrician" />
        
        {/* Article specific meta tags */}
        {article && (
          <>
            <meta property="article:author" content="Dr. Ramya Bharathi R" />
            <meta property="article:publisher" content="Dr. Ramya Bharathi R - Pediatrician" />
            <meta property="article:section" content="Healthcare" />
            <meta property="article:tag" content="Pediatrics" />
            <meta property="article:tag" content="Child Health" />
            <meta property="article:tag" content="Medical Advice" />
          </>
        )}
        
        {/* Medical Practice Specific Meta Tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Perumbakkam, Chennai" />
        <meta name="geo.position" content="12.8979;80.2275" />
        <meta name="ICBM" content="12.8979, 80.2275" />
        
        {/* Contact Information */}
        <meta name="telephone" content="+91-9363956784" />
        <meta name="contact" content="contact@drramya-paediatrics.com" />
        
        {/* Medical Specialty */}
        <meta name="specialty" content="Pediatrics" />
        <meta name="medical-specialty" content="Child Healthcare" />
        
        {/* Local Business Information */}
        <meta name="business-type" content="Medical Practice" />
        <meta name="service-area" content="Perumbakkam, Sholinganallur, Navalur, Karapakkam, Chennai" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="4.8" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="doc-class" content="Living Document" />
        <meta name="doc-rights" content="Public" />
        <meta name="doc-type" content="Web Page" />
        <meta name="generator" content="Next.js" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for faster loading */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </Head>
      
      {/* Structured Data */}
      <StructuredData type={structuredDataType} data={structuredData} />
    </>
  );
}
