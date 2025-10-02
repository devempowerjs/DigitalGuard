import React from 'react';
import { Layout } from './layout/Layout';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AdPlaceholder } from './AdPlaceholder';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  previousPage?: {
    title: string;
    href: string;
  };
  nextPage?: {
    title: string;
    href: string;
  };
  showAds?: boolean;
}

export function PageLayout({ 
  children, 
  title, 
  description, 
  previousPage, 
  nextPage, 
  showAds = true 
}: PageLayoutProps) {
  const handleNavigation = (href: string) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>

          {/* Sidebar with Ads */}
          {showAds && (
            <div className="lg:w-80 space-y-6">
              <AdPlaceholder type="sidebar" />
              <AdPlaceholder type="sidebar" />
            </div>
          )}
        </div>

        {/* Inline Ad */}
        {showAds && (
          <div className="my-8">
            <AdPlaceholder type="inline" />
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          {previousPage ? (
            <Button
              variant="outline"
              onClick={() => handleNavigation(previousPage.href)}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>{previousPage.title}</span>
            </Button>
          ) : (
            <div />
          )}

          {nextPage && (
            <Button
              onClick={() => handleNavigation(nextPage.href)}
              className="flex items-center space-x-2"
            >
              <span>{nextPage.title}</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
}