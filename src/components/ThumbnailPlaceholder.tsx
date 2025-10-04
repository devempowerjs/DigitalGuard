import React from 'react';

interface ThumbnailPlaceholderProps {
  type: 'video' | 'infographic' | 'article';
  title: string;
  className?: string;
  gradient?: string;
}

export function ThumbnailPlaceholder({ 
  type, 
  title, 
  className = "w-full h-full", 
  gradient 
}: ThumbnailPlaceholderProps) {
  // THUMBNAIL PLACEHOLDER COMPONENT: mayank tu isko banaya h unsplash source images ko placeholder k liye kyunki schools usually in websites ko block karta h
 
  
  const gradients = {
    video: gradient || 'from-red-500 via-purple-600 to-blue-600',
    infographic: gradient || 'from-green-500 via-teal-600 to-blue-600',
    article: gradient || 'from-orange-500 via-amber-600 to-yellow-500'
  };

  const icons = {
    video: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
    ),
    infographic: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    ),
    article: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    )
  };

  return (
    <div className={`bg-gradient-to-br ${gradients[type]} flex items-center justify-center relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="text-center text-white z-10 p-4">
        <div className="opacity-80 mb-2">
          {icons[type]}
        </div>
        <div className="text-xs font-medium opacity-90 line-clamp-2">
          {title.length > 40 ? title.substring(0, 37) + '...' : title}
        </div>
      </div>
    </div>
  );
}
