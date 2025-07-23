'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { useViewTracking } from '@/hooks/useViewTracking';

interface ViewTrackerProps {
  slug: string;
  className?: string;
}

export default function ViewTracker({ slug, className = '' }: ViewTrackerProps) {
  const { views, loading, incrementView } = useViewTracking(slug);
  const [hasIncremented, setHasIncremented] = useState(false);

  useEffect(() => {
    // Check if this article has been viewed in the current session
    const sessionKey = `viewed_${slug}`;
    const hasViewedInSession = sessionStorage.getItem(sessionKey);
    
    // Only increment view count if not viewed in this session and not already incremented
    if (!hasViewedInSession && !hasIncremented && !loading && slug) {
      incrementView();
      setHasIncremented(true);
    } else if (hasViewedInSession) {
      // Mark as incremented if already viewed in session to prevent future increments
      setHasIncremented(true);
    }
  }, [incrementView, hasIncremented, loading, slug]);

  if (loading) {
    return (
      <div className={`flex items-center gap-2 text-sm text-gray-600 bg-white/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/50 ${className}`}>
        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
          <Eye className="w-3 h-3 text-gray-400 animate-pulse" />
        </div>
        <span className="font-medium">Loading...</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 text-sm text-gray-600 bg-white/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/50 ${className}`}>
      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
        <Eye className="w-3 h-3 text-blue-600" />
      </div>
      <span className="font-medium">{views.toLocaleString()} views</span>
    </div>
  );
}
