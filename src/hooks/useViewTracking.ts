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
    try {
      const response = await fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
      const data = await response.json();
      setViews(data.views);
      return data.views;
    } catch (error) {
      console.error('Error incrementing view:', error);
      return null;
    }
  };

  return { views, loading, incrementView };
};