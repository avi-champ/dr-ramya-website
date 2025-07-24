'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, ArrowRight, Clock, Calendar, Star, BookOpen } from 'lucide-react';
import { type Article } from '@/data/articles';

interface ArticleGridOptimizedProps {
  className?: string;
}

export function ArticleGridOptimized({ className = '' }: ArticleGridOptimizedProps) {
  const searchParams = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');

  // Initialize filters from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(decodeURIComponent(categoryParam));
    }
  }, [searchParams]);

  // Load articles on component mount using optimized API
  useEffect(() => {
    const loadArticles = async () => {
      try {
        // ✅ Use optimized API endpoints for faster loading
        const [featuredResponse, allResponse] = await Promise.all([
          fetch('/api/articles/featured/optimized'),
          fetch('/api/articles/optimized')
        ]);

        if (!featuredResponse.ok || !allResponse.ok) {
          throw new Error('Failed to fetch articles');
        }

        const featuredArticlesData = await featuredResponse.json();
        const allArticlesData = await allResponse.json();

        // Fetch real view counts for featured articles
        const featuredWithViews = await Promise.all(
          featuredArticlesData.map(async (article: Article) => {
            try {
              const response = await fetch(`/api/views/${article.slug}`);
              const data = await response.json();
              return { ...article, views: data.views };
            } catch (error) {
              console.error('Error fetching views for', article.slug, error);
              return { ...article, views: 0 };
            }
          })
        );

        setFeaturedArticles(featuredWithViews);
        setArticles(allArticlesData);
        setFilteredArticles(allArticlesData);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  // Filter articles based on search and filters
  useEffect(() => {
    let filtered = articles;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Filter by severity
    if (selectedSeverity !== 'All') {
      filtered = filtered.filter(article => article.severity === selectedSeverity);
    }

    setFilteredArticles(filtered);
  }, [articles, searchTerm, selectedCategory, selectedSeverity]);

  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))];
  const severities = ['All', ...Array.from(new Set(articles.map(article => article.severity)))];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Common Conditions': 'bg-blue-100 text-blue-800',
      'Emergency Care': 'bg-red-100 text-red-800',
      'Preventive Care': 'bg-green-100 text-green-800',
      'Nutrition': 'bg-yellow-100 text-yellow-800',
      'Development': 'bg-purple-100 text-purple-800',
      'Allergic Conditions': 'bg-orange-100 text-orange-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getSeverityColor = (severity: string) => {
    const colors = {
      'Mild': 'bg-green-100 text-green-800',
      'Moderate': 'bg-yellow-100 text-yellow-800',
      'Severe': 'bg-red-100 text-red-800',
      'Variable': 'bg-purple-100 text-purple-800',
    };
    return colors[severity as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex gap-2 mb-4">
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-6 w-3/4 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded mb-4"></div>
            <div className="flex justify-between items-center">
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className={`min-h-screen bg-gray-50 py-12 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Articles</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based health information and parenting guidance for your child's well-being
            </p>
          </div>
          <LoadingSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Articles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based health information and parenting guidance for your child&apos;s well-being
          </p>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredArticles.slice(0, 2).map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 inline mr-1 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">Featured</span>
                      </div>
                      {article.views && article.views > 0 && (
                        <span className="text-sm text-gray-500">{article.views} views</span>
                      )}
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4" />
                      {article.readingTime} min read
                    </div>

                    <button 
                      onClick={() => window.location.href = `/health-articles/${article.slug}`}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read Featured Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Severity Filter */}
            <div>
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {severities.map(severity => (
                  <option key={severity} value={severity}>{severity}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(article.severity)}`}>
                        {article.severity}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {article.readingTime} min read
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.lastUpdated).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Age: {article.ageGroup}
                      </div>
                      
                      <button 
                        onClick={() => window.location.href = `/health-articles/${article.slug}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
