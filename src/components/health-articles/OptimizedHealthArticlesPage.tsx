'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, ArrowRight, Clock, Calendar, Star, BookOpen } from 'lucide-react';
import { type Article } from '@/data/articles';

// Optimized loading skeleton component
function ArticleCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 animate-pulse">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
        </div>
        <div className="w-3/4 h-6 bg-gray-200 rounded mb-3"></div>
        <div className="space-y-2 mb-4">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-20 h-4 bg-gray-200 rounded"></div>
          <div className="w-24 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="w-32 h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

function OptimizedHealthArticlesContent() {
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

  // Optimized article loading with bulk operations
  useEffect(() => {
    const loadArticles = async () => {
      try {
        console.log('Loading articles with optimized API...');
        
        // Use optimized API endpoints that return only metadata
        const [featuredResponse, allResponse] = await Promise.all([
          fetch('/api/articles/featured/optimized'),
          fetch('/api/articles/optimized')
        ]);

        if (!featuredResponse.ok || !allResponse.ok) {
          throw new Error('Failed to fetch articles');
        }

        const featuredArticlesData = await featuredResponse.json();
        const allArticlesData = await allResponse.json();

        // Bulk fetch view counts to reduce API calls
        const allSlugs = [...new Set([
          ...featuredArticlesData.map((a: Article) => a.slug),
          ...allArticlesData.map((a: Article) => a.slug)
        ])];

        let viewsData: { [slug: string]: number } = {};
        
        try {
          const viewsResponse = await fetch(`/api/views/bulk?slugs=${allSlugs.join(',')}`);
          if (viewsResponse.ok) {
            const viewsResult = await viewsResponse.json();
            viewsData = viewsResult.views;
          }
        } catch (viewsError) {
          console.warn('Failed to fetch view counts:', viewsError);
        }

        // Apply view counts to articles
        const featuredWithViews = featuredArticlesData.map((article: Article) => ({
          ...article,
          views: viewsData[article.slug] || article.views || 0
        }));

        const allWithViews = allArticlesData.map((article: Article) => ({
          ...article,
          views: viewsData[article.slug] || article.views || 0
        }));

        setFeaturedArticles(featuredWithViews);
        setArticles(allWithViews);
        setFilteredArticles(allWithViews);
        
        console.log(`Loaded ${allWithViews.length} articles optimally`);
      } catch (error) {
        console.error('Error loading articles:', error);
        // Fallback to non-optimized endpoints
        try {
          const [featuredResponse, allResponse] = await Promise.all([
            fetch('/api/articles/featured'),
            fetch('/api/articles')
          ]);
          
          if (featuredResponse.ok && allResponse.ok) {
            const featured = await featuredResponse.json();
            const all = await allResponse.json();
            setFeaturedArticles(featured);
            setArticles(all);
            setFilteredArticles(all);
          }
        } catch (fallbackError) {
          console.error('Fallback loading failed:', fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  // Optimized filtering with debounce
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      let filtered = articles;

      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        filtered = filtered.filter(article =>
          article.title.toLowerCase().includes(searchLower) ||
          article.description.toLowerCase().includes(searchLower) ||
          article.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      }

      // Category filter
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(article => article.category === selectedCategory);
      }

      // Severity filter
      if (selectedSeverity !== 'All') {
        filtered = filtered.filter(article => article.severity === selectedSeverity);
      }

      setFilteredArticles(filtered);
    }, 300); // 300ms debounce

    return () => clearTimeout(debounceTimeout);
  }, [articles, searchTerm, selectedCategory, selectedSeverity]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Common Conditions': return 'text-blue-600 bg-blue-50';
      case 'Vaccination': return 'text-green-600 bg-green-50';
      case 'Emergency Care': return 'text-red-600 bg-red-50';
      case 'Development': return 'text-purple-600 bg-purple-50';
      case 'Nutrition': return 'text-orange-600 bg-orange-50';
      case 'Prevention': return 'text-teal-600 bg-teal-50';
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

  // Get unique categories and severities for filters
  const categories = Array.from(new Set(articles.map(article => article.category)));
  const severities = Array.from(new Set(articles.map(article => article.severity)));

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading skeleton for featured articles */}
          <div className="mb-16">
            <div className="w-64 h-8 bg-gray-200 rounded mb-8 animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => <ArticleCardSkeleton key={i} />)}
            </div>
          </div>
          
          {/* Loading skeleton for filters and articles */}
          <div className="w-48 h-8 bg-gray-200 rounded mb-8 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => <ArticleCardSkeleton key={i} />)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Articles Section */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl font-serif font-bold text-gray-900">Featured Health Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map(article => (
                <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-medium">
                        <Star className="w-3 h-3 inline mr-1" />
                        Featured
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
                        {article.views} views
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
          </div>
        )}

        {/* All Articles Section with Filters */}
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h2 className="text-3xl font-serif font-bold text-gray-900">All Health Articles</h2>
          <span className="text-sm text-gray-500">({filteredArticles.length} articles)</span>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Severity Filter */}
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Severities</option>
              {severities.map(severity => (
                <option key={severity} value={severity}>{severity}</option>
              ))}
            </select>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedSeverity('All');
              }}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
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
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    Age: {article.ageGroup}
                  </div>
                  <div className="text-sm text-gray-500">
                    {article.views} views
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{article.tags.length - 2}
                      </span>
                    )}
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

        {/* No Results */}
        {filteredArticles.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OptimizedHealthArticlesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading health articles...</p>
        </div>
      </div>
    }>
      <OptimizedHealthArticlesContent />
    </Suspense>
  );
}
