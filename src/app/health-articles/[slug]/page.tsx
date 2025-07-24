import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { ArrowLeft, Clock, Calendar, User, AlertCircle } from 'lucide-react';
import ShareButton from './ShareButton';
import ViewTracker from '@/components/health-articles/ViewTracker';
import { getFilenameFromSlug } from '@/lib/article-server';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  try {
    // Await params before using its properties
    const { slug } = await params;
    
    // Get the correct filename for this slug
    const filename = getFilenameFromSlug(slug);
    
    if (!filename) {
      console.log(`No filename mapping found for slug: ${slug}`);
      notFound();
    }
    
    // Read the markdown file using the mapped filename
    const filePath = path.join(process.cwd(), 'src', 'content', 'articles', `${filename}.md`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File does not exist: ${filePath}`);
      notFound();
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter, content } = matter(fileContents);
    
    // Remove the first H1 heading from content since we display title in metadata
    const contentWithoutTitle = content.replace(/^#\s+.*$/m, '').trim();
    
    // Convert markdown to HTML
    const htmlContent = marked(contentWithoutTitle);

    const getCategoryColor = (category: string) => {
      switch (category) {
        case 'Common Conditions': return 'text-blue-600 bg-blue-50';
        case 'Vaccination': return 'text-purple-600 bg-purple-50';
        case 'Emergency Care': return 'text-red-600 bg-red-50';
        case 'Development': return 'text-green-600 bg-green-50';
        case 'Nutrition': return 'text-orange-600 bg-orange-50';
        case 'Prevention': return 'text-teal-600 bg-teal-50';
        case 'Newborn Care': return 'text-pink-600 bg-pink-50';
        case 'Allergic Conditions': return 'text-indigo-600 bg-indigo-50';
        case 'Sleep & Behavior': return 'text-cyan-600 bg-cyan-50';
        default: return 'text-gray-600 bg-gray-50';
      }
    };

    const getSeverityColor = (severity: string) => {
      switch (severity) {
        case 'Low': return 'text-green-600 bg-green-50';
        case 'Medium': return 'text-yellow-600 bg-yellow-50';
        case 'High': return 'text-orange-600 bg-orange-50';
        case 'Emergency': return 'text-red-600 bg-red-50';
        default: return 'text-gray-600 bg-gray-50';
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 article-container">
        {/* Header with Navigation */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
            <Link 
              href="/health-articles"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden article-content">
            {/* Article Header */}
            <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(frontMatter.category)}`}>
                  {frontMatter.category}
                </span>
                {frontMatter.severity && (
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(frontMatter.severity)}`}>
                    {frontMatter.severity} Priority
                  </span>
                )}
              </div>
              
              {/* Decorative Article Metadata */}
              <div className="mb-8">
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4 break-words">
                  {frontMatter.title}
                </h1>
                
                <p className="text-base sm:text-lg text-gray-600 mb-8 break-words">
                  {frontMatter.description}
                </p>
              </div>
              <div className="relative">
                {/* Decorative line with center icon */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-white px-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-blue-50/50 via-white to-purple-50/50 rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    {/* Author Info */}
                    <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-3 shadow-sm border border-white/50">
                      <div className="flex-shrink-0">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                          <User className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 break-words">Dr. R Ramya Bharathi</p>
                        <p className="text-xs text-blue-600">Consultant Pediatrician</p>
                      </div>
                    </div>
                    
                    {/* Reading Stats */}
                    <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/70 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-2 border border-white/50">
                        <div className="w-5 sm:w-6 h-5 sm:h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Clock className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="font-medium text-xs sm:text-sm">{frontMatter.readingTime} min read</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/70 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-2 border border-white/50">
                        <div className="w-5 sm:w-6 h-5 sm:h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-3 h-3 text-purple-600" />
                        </div>
                        <span className="font-medium text-xs sm:text-sm">
                          {new Date(frontMatter.publishDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>

                      {/* Dynamic View Counter */}
                      <ViewTracker slug={slug} />
                    </div>
                  </div>
                  
                  {/* Share Button */}
                  <div className="flex items-center justify-center lg:justify-end">
                    <ShareButton 
                      title={frontMatter.title}
                      description={frontMatter.description}
                      url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'}/health-articles/${slug}`}
                    />
                  </div>
                </div>
                
                {/* Subtle decorative elements */}
                <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Article Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 break-words overflow-hidden article-content" 
                   dangerouslySetInnerHTML={{ __html: htmlContent }} 
              />
            </div>
            
            {/* Article Footer */}
            <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-gray-600">
                  <p>Age Group: <span className="font-medium break-words">{frontMatter.ageGroup}</span></p>
                  {frontMatter.lastUpdated && (
                    <p className="mt-1">Last Updated: {new Date(frontMatter.lastUpdated).toLocaleDateString()}</p>
                  )}
                </div>
                
                <Link 
                  href="/health-articles"
                  className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center text-sm sm:text-base"
                >
                  View All Articles
                </Link>
              </div>
            </div>
          </article>
          
          {/* Medical Disclaimer */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">Medical Disclaimer</p>
                <p className="break-words">This article is for educational purposes only and should not replace professional medical advice. Always consult with your pediatrician for personalized medical guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading article:', error);
    notFound();
  }
}