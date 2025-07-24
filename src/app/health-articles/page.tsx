'use client';

import { Suspense } from 'react';
import { ArticleGridOptimized } from '@/components/health-articles/ArticleGridOptimized';

function HealthArticlesContent() {
  return <ArticleGridOptimized />;
}

export default function HealthArticlesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading health articles...</p>
        </div>
      </div>
    }>
      <HealthArticlesContent />
    </Suspense>
  );
}
