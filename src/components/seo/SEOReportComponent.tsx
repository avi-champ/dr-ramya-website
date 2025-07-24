'use client';

import { useState, useEffect } from 'react';

interface SEOMetrics {
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string;
  structuredData: boolean;
  openGraphTags: boolean;
  twitterCards: boolean;
  imageAlt: boolean;
  headingStructure: boolean;
  internalLinks: number;
  externalLinks: number;
  pageLoadTime: number;
  mobileOptimized: boolean;
  localSEO: boolean;
}

export default function SEOReportComponent() {
  const [seoMetrics, setSeoMetrics] = useState<SEOMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const analyzePage = () => {
      if (typeof window === 'undefined') return;

      const doc = document;
      const head = doc.head;

      // Analyze current page SEO
      const metrics: SEOMetrics = {
        pageTitle: doc.title || '',
        metaDescription: head.querySelector('meta[name="description"]')?.getAttribute('content') || '',
        metaKeywords: head.querySelector('meta[name="keywords"]')?.getAttribute('content') || '',
        canonicalUrl: head.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
        structuredData: doc.querySelectorAll('script[type="application/ld+json"]').length > 0,
        openGraphTags: head.querySelectorAll('meta[property^="og:"]').length > 0,
        twitterCards: head.querySelectorAll('meta[name^="twitter:"]').length > 0,
        imageAlt: Array.from(doc.querySelectorAll('img')).every(img => img.alt),
        headingStructure: doc.querySelector('h1') !== null,
        internalLinks: doc.querySelectorAll('a[href^="/"], a[href*="drramya-paediatrics"]').length,
        externalLinks: doc.querySelectorAll('a[href^="http"]:not([href*="drramya-paediatrics"])').length,
        pageLoadTime: performance.timing ? performance.timing.loadEventEnd - performance.timing.navigationStart : 0,
        mobileOptimized: head.querySelector('meta[name="viewport"]') !== null,
        localSEO: doc.body.textContent?.includes('Perumbakkam') || false
      };

      setSeoMetrics(metrics);
    };

    // Run analysis after page load
    if (document.readyState === 'complete') {
      analyzePage();
    } else {
      window.addEventListener('load', analyzePage);
      return () => window.removeEventListener('load', analyzePage);
    }
  }, []);

  // Only show in development mode
  useEffect(() => {
    setIsVisible(process.env.NODE_ENV === 'development');
  }, []);

  if (!isVisible || !seoMetrics) return null;

  const getSEOScore = () => {
    let score = 0;
    const maxScore = 12;

    if (seoMetrics.pageTitle && seoMetrics.pageTitle.length >= 30 && seoMetrics.pageTitle.length <= 60) score++;
    if (seoMetrics.metaDescription && seoMetrics.metaDescription.length >= 120 && seoMetrics.metaDescription.length <= 160) score++;
    if (seoMetrics.metaKeywords) score++;
    if (seoMetrics.canonicalUrl) score++;
    if (seoMetrics.structuredData) score++;
    if (seoMetrics.openGraphTags) score++;
    if (seoMetrics.twitterCards) score++;
    if (seoMetrics.imageAlt) score++;
    if (seoMetrics.headingStructure) score++;
    if (seoMetrics.internalLinks >= 3) score++;
    if (seoMetrics.mobileOptimized) score++;
    if (seoMetrics.localSEO) score++;

    return Math.round((score / maxScore) * 100);
  };

  const seoScore = getSEOScore();
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white shadow-lg rounded-lg p-4 max-w-sm border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">SEO Analysis</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>SEO Score:</span>
          <span className={`font-bold ${getScoreColor(seoScore)}`}>{seoScore}%</span>
        </div>
        
        <div className="flex justify-between">
          <span>Title Length:</span>
          <span className={seoMetrics.pageTitle.length >= 30 && seoMetrics.pageTitle.length <= 60 ? 'text-green-600' : 'text-red-600'}>
            {seoMetrics.pageTitle.length}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Meta Description:</span>
          <span className={seoMetrics.metaDescription.length >= 120 && seoMetrics.metaDescription.length <= 160 ? 'text-green-600' : 'text-red-600'}>
            {seoMetrics.metaDescription.length}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Structured Data:</span>
          <span className={seoMetrics.structuredData ? 'text-green-600' : 'text-red-600'}>
            {seoMetrics.structuredData ? '✓' : '✗'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Local SEO:</span>
          <span className={seoMetrics.localSEO ? 'text-green-600' : 'text-red-600'}>
            {seoMetrics.localSEO ? '✓' : '✗'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Mobile Optimized:</span>
          <span className={seoMetrics.mobileOptimized ? 'text-green-600' : 'text-red-600'}>
            {seoMetrics.mobileOptimized ? '✓' : '✗'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Internal Links:</span>
          <span className={seoMetrics.internalLinks >= 3 ? 'text-green-600' : 'text-yellow-600'}>
            {seoMetrics.internalLinks}
          </span>
        </div>
        
        {seoMetrics.pageLoadTime > 0 && (
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className={seoMetrics.pageLoadTime < 3000 ? 'text-green-600' : 'text-red-600'}>
              {(seoMetrics.pageLoadTime / 1000).toFixed(2)}s
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 text-xs text-gray-500">
        Development Mode Only
      </div>
    </div>
  );
}
