import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, AlertCircle } from 'lucide-react';
import ShareButton from '../../app/health-articles/[slug]/ShareButton';
import ViewTracker from '@/components/health-articles/ViewTracker';
import { getArticleBySlugOptimized, getFilenameFromSlug } from '@/lib/article-server-optimized';

interface OptimizedArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function OptimizedArticlePage({ params }: OptimizedArticlePageProps) {
  try {
    // Await params before using its properties
    const { slug } = await params;
    
    // Check if we have a mapping for this slug
    const filename = getFilenameFromSlug(slug);
    
    if (!filename) {
      console.log(`No filename mapping found for slug: ${slug}`);
      notFound();
    }

    // Get article with full content using optimized function
    const article = await getArticleBySlugOptimized(slug, true);
    
    if (!article) {
      console.log(`Article not found for slug: ${slug}`);
      notFound();
    }

    // Parse IAP sources if available
    const iapSources = article.iapSources || [];

    // Get severity styling
    const getSeverityStyles = (severity: string) => {
      switch (severity) {
        case 'Low':
          return {
            bgColor: 'bg-green-50',
            textColor: 'text-green-700',
            borderColor: 'border-green-200'
          };
        case 'Medium':
          return {
            bgColor: 'bg-yellow-50',
            textColor: 'text-yellow-700',
            borderColor: 'border-yellow-200'
          };
        case 'High':
          return {
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-700',
            borderColor: 'border-orange-200'
          };
        case 'Emergency':
          return {
            bgColor: 'bg-red-50',
            textColor: 'text-red-700',
            borderColor: 'border-red-200'
          };
        default:
          return {
            bgColor: 'bg-gray-50',
            textColor: 'text-gray-700',
            borderColor: 'border-gray-200'
          };
      }
    };

    const severityStyles = getSeverityStyles(article.severity);

    return (
      <article className="min-h-screen bg-gray-50 py-8">
        {/* Track article view */}
        <ViewTracker slug={slug} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <Link 
            href="/health-articles" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Health Articles
          </Link>

          {/* Article Header */}
          <header className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${severityStyles.bgColor} ${severityStyles.textColor} ${severityStyles.borderColor} border`}>
                {article.severity}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {article.ageGroup}
              </span>
              {article.featured && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  ⭐ Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {article.description}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
              </div>
              {article.views !== undefined && (
                <div className="text-gray-500">
                  {article.views} views
                </div>
              )}
            </div>

            {/* Share Button */}
            <ShareButton 
              title={article.title} 
              description={article.description}
              url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://drramya.com'}/health-articles/${slug}`}
            />
          </header>

          {/* Emergency Notice for High/Emergency Severity */}
          {(article.severity === 'High' || article.severity === 'Emergency') && (
            <div className={`${severityStyles.bgColor} ${severityStyles.borderColor} border-l-4 p-6 mb-8 rounded-r-lg`}>
              <div className="flex items-start gap-3">
                <AlertCircle className={`w-6 h-6 ${severityStyles.textColor} flex-shrink-0 mt-0.5`} />
                <div>
                  <h3 className={`font-semibold ${severityStyles.textColor} mb-2`}>
                    {article.severity === 'Emergency' ? 'Medical Emergency' : 'Important Medical Information'}
                  </h3>
                  <p className={`${severityStyles.textColor} text-sm leading-relaxed`}>
                    {article.severity === 'Emergency' 
                      ? 'This article contains information about medical emergencies. If you are experiencing a medical emergency, please call emergency services immediately or visit your nearest emergency room.'
                      : 'This article contains important medical information. Please consult with a healthcare professional for proper diagnosis and treatment.'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="article-container p-8">
              <div 
                className="prose prose-lg max-w-none article-content"
                dangerouslySetInnerHTML={{ __html: article.htmlContent }}
              />
            </div>
          </div>

          {/* IAP Sources Section */}
          {iapSources.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mt-8">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6 flex items-center gap-2">
                📚 Evidence-Based Sources
              </h3>
              <div className="space-y-4">
                {iapSources.map((source, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">
                          {source.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                            {source.type}
                          </span>
                          <span>Published: {new Date(source.publishDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap"
                      >
                        View Source →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link 
                href="/health-articles"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Health Articles
              </Link>
              
              <div className="text-sm text-gray-500">
                Last updated: {new Date(article.lastUpdated).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </article>
    );

  } catch (error) {
    console.error('Error rendering article:', error);
    notFound();
  }
}
