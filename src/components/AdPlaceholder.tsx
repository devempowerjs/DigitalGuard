import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AdPlaceholderProps {
  type?: 'banner' | 'sidebar' | 'inline';
  className?: string;
}

export function AdPlaceholder({ type = 'banner', className = '' }: AdPlaceholderProps) {
  const getAdContent = () => {
    switch (type) {
      case 'sidebar':
        return {
          width: 'w-full max-w-xs',
          height: 'h-32',
          text: 'Ad Space',
          subtext: 'Book Promotion'
        };
      case 'inline':
        return {
          width: 'w-full',
          height: 'h-20',
          text: 'Sponsored Content',
          subtext: 'Educational Resources'
        };
      default:
        return {
          width: 'w-full',
          height: 'h-24',
          text: 'Advertisement',
          subtext: 'Partner Content'
        };
    }
  };

  const ad = getAdContent();

  return (
    <div className={`${ad.width} ${ad.height} ${className}`}>
      <div className="w-full h-full bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors cursor-pointer">
        <ExternalLink className="h-4 w-4 mb-1" />
        <span className="text-xs font-medium">{ad.text}</span>
        <span className="text-xs opacity-75">{ad.subtext}</span>
      </div>
    </div>
  );
}