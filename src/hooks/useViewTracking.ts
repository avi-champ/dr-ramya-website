import { useState, useEffect } from 'react';

export const useViewTracking = (slug: string) => {
  const [views, setViews] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`);
        const data = await response.json();
        setViews(data.views);
      } catch (error) {
        console.error('Error fetching views:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchViews();
    }
  }, [slug]);

  const incrementView = async () => {
    // Check if this article has been viewed in the current session
    const sessionKey = `viewed_${slug}`;
    const hasViewedInSession = sessionStorage.getItem(sessionKey);
    
    if (hasViewedInSession) {
      // Don't increment if already viewed in this session
      return views;
    }

    try {
      const response = await fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
      const data = await response.json();
      
      if (response.ok) {
        // Mark as viewed in this session
        sessionStorage.setItem(sessionKey, 'true');
        setViews(data.views);
        return data.views;
      }
    } catch (error) {
      console.error('Error incrementing view:', error);
      return null;
    }
  };

  return { views, loading, incrementView };
};