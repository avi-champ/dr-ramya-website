'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  cacheHit: boolean;
  articlesLoaded: number;
  compressionRatio?: string;
}

interface PerformanceMonitorProps {
  onMetrics?: (metrics: PerformanceMetrics) => void;
  showDebugInfo?: boolean;
}

export default function PerformanceMonitor({ onMetrics, showDebugInfo = false }: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    let articlesLoaded = 0;
    let cacheHit = false;

    // Monitor network requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const response = await originalFetch(...args);
      
      // Check if it's an articles API call
      if (args[0]?.toString().includes('/api/articles')) {
        articlesLoaded++;
        
        // Check cache headers
        const cacheControl = response.headers.get('cache-control');
        const age = response.headers.get('age');
        cacheHit = !!(cacheControl || age);
      }
      
      return response;
    };

    // Measure performance after component mount
    const measurePerformance = () => {
      const loadTime = performance.now() - startTime;
      const renderTime = performance.now();

      const performanceMetrics: PerformanceMetrics = {
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime - startTime),
        cacheHit,
        articlesLoaded
      };

      // Get cache statistics if available
      fetch('/api/cache')
        .then(res => res.json())
        .then(stats => {
          performanceMetrics.compressionRatio = stats.compression;
          setMetrics(performanceMetrics);
          onMetrics?.(performanceMetrics);
        })
        .catch(() => {
          setMetrics(performanceMetrics);
          onMetrics?.(performanceMetrics);
        });
    };

    // Measure after a short delay to capture all network requests
    const timeoutId = setTimeout(measurePerformance, 2000);

    // Restore original fetch
    return () => {
      window.fetch = originalFetch;
      clearTimeout(timeoutId);
    };
  }, [onMetrics]);

  // Show debug info on Ctrl+Shift+D
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!showDebugInfo && !isVisible) return null;
  if (!metrics) return null;

  const getPerformanceColor = (loadTime: number) => {
    if (loadTime < 1000) return 'text-green-600';
    if (loadTime < 2000) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-sm font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold">Performance Metrics</h4>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getPerformanceColor(metrics.loadTime)}>
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span>{metrics.renderTime}ms</span>
        </div>
        
        <div className="flex justify-between">
          <span>Articles Loaded:</span>
          <span>{metrics.articlesLoaded}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Cache Hit:</span>
          <span className={metrics.cacheHit ? 'text-green-600' : 'text-red-600'}>
            {metrics.cacheHit ? 'Yes' : 'No'}
          </span>
        </div>
        
        {metrics.compressionRatio && (
          <div className="flex justify-between">
            <span>Compression:</span>
            <span className="text-blue-400">{metrics.compressionRatio}</span>
          </div>
        )}
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600 text-xs text-gray-400">
        Press Ctrl+Shift+D to toggle
      </div>
    </div>
  );
}
