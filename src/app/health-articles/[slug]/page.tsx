'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, ExternalLink, Share2, BookOpen, AlertTriangle, CheckCircle, User, Eye, Star } from 'lucide-react';
import {getArticleBySlug, getAllArticles, getFeaturedArticles, type Article } from '@/lib/article';

// Page Props interface for Next.js App Router
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ArticleDetailPage({ params }: PageProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState<string>('');
  
  useEffect(() => {
    // Await params and get the article from markdown files
    const loadArticle = async () => {
      const resolvedParams = await params;
      const articleSlug = resolvedParams.slug;
      setSlug(articleSlug);
      
      try {
        console.log('Loading article with slug:', articleSlug);
        // Get the article from markdown files via utility function
        const foundArticle = await getArticleBySlug(articleSlug);
        console.log('Article loaded:', foundArticle ? foundArticle.title : 'Not found');
        setArticle(foundArticle);
      } catch (error) {
        console.error('Error loading article:', error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };
    
    loadArticle();
  }, [params]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'High': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Emergency': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Common Conditions': return 'text-blue-600 bg-blue-50';
      case 'Vaccination': return 'text-purple-600 bg-purple-50';
      case 'Emergency Care': return 'text-red-600 bg-red-50';
      case 'Development': return 'text-green-600 bg-green-50';
      case 'Nutrition': return 'text-orange-600 bg-orange-50';
      case 'Prevention': return 'text-teal-600 bg-teal-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Article link copied to clipboard!');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
          <p className="text-sm text-gray-500 mt-2">Loading: {slug}</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
          <p className="text-gray-600 mb-4">The article "{slug}" could not be found.</p>
          <button 
            onClick={() => window.location.href = '/health-articles'}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Health Articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => window.location.href = '/health-articles'}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Articles</span>
            </button>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Article Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          {/* Category and Severity Badges */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(article.severity)}`}>
              <AlertTriangle className="w-4 h-4 inline mr-1" />
              {article.severity} Priority
            </span>
            {article.featured && (
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                <Star className="w-4 h-4 inline mr-1" />
                Featured Article
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.description}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readingTime} min read</span>
            </div>
            {article.views && (
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{article.views} views</span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Age Group and Last Updated */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Age Group:</span>
              <span className="text-sm font-medium text-gray-900">{article.ageGroup}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Last Updated:</span>
              <span className="text-sm font-medium text-gray-900">
                {new Date(article.lastUpdated).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* IAP Sources Section */}
        {article.iapSources && article.iapSources.length > 0 && (
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <h3 className="font-serif text-lg font-semibold text-blue-900">
                Evidence-Based Sources
              </h3>
            </div>
            <p className="text-blue-800 mb-4 text-sm">
              This article is based on guidelines and position papers from the Indian Academy of Pediatrics (IAP)
            </p>
            <div className="space-y-3">
              {article.iapSources.map((source, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <div className="flex-1">
                    <a 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 font-medium text-sm hover:underline"
                    >
                      {source.title}
                    </a>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{source.type}</span>
                      {source.publishDate && (
                        <>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{source.publishDate}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: article.htmlContent }}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Print Article
              </button>
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              Questions? <a href="/#contact" className="text-blue-600 hover:underline">Contact Dr. Ramya</a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Medical Disclaimer:</strong> This article is for educational purposes only and should not replace professional medical advice. 
            Always consult with your pediatrician for personalized medical guidance.
          </p>
        </div>

        {/* References Section */}
        {article.iapSources && article.iapSources.length > 0 && (
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">References & Sources</h2>
            <div className="space-y-4">
              {article.iapSources.map((source, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-1">
                    <a 
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 font-medium"
                    >
                      {index + 1}. {source.title}
                    </a>
                    <div className="text-sm text-gray-600 mt-1">
                      {source.type} • Published {source.publishDate}
                      {source.url && source.url.endsWith('.pdf') && (
                        <span className="ml-2 text-blue-600">(PDF)</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}