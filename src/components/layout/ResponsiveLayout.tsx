'use client';

import { ReactNode } from 'react';
import ResponsiveNavigation from './ResponsiveNavigation';
import ResponsiveFooter from './ResponsiveFooter';

interface ResponsiveLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function ResponsiveLayout({ children, className = '' }: ResponsiveLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <ResponsiveNavigation />
      
      {/* Main Content */}
      <main className={`flex-1 pt-16 md:pt-20 ${className}`}>
        {children}
      </main>
      
      {/* Footer */}
      <ResponsiveFooter />
    </div>
  );
}
