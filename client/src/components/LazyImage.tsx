import React, { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  blur?: boolean;
  aspectRatio?: string;
  containerClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder,
  blur = true,
  aspectRatio,
  containerClassName = '',
  onLoad,
  onError,
  className = '',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    freezeOnceVisible: true,
  });

  useEffect(() => {
    if (isVisible && src && !isLoaded && !hasError) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
        onLoad?.();
      };
      
      img.onerror = () => {
        setHasError(true);
        onError?.();
        // Fallback to a default image or show error state
        setImageSrc(placeholder || '/default-image.png');
      };
      
      img.src = src;
    }
  }, [isVisible, src, placeholder, isLoaded, hasError, onLoad, onError]);

  const containerStyle = aspectRatio
    ? { aspectRatio }
    : {};

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden ${containerClassName}`}
      style={containerStyle}
    >
      {/* Skeleton/Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#4D4D4D] animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DEDEDE]/10 to-transparent -skew-x-12" />
        </div>
      )}
      
      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-[#171717] flex items-center justify-center">
          <div className="text-center text-[#DEDEDE]/50">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-xs">Image unavailable</p>
          </div>
        </div>
      )}
      
      {/* Main Image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`
            transition-all duration-500 ease-in-out
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${blur && !isLoaded ? 'blur-sm' : 'blur-0'}
            ${className}
          `}
          loading="lazy"
          {...props}
        />
      )}
      
      {/* Loading overlay */}
      {isVisible && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#171717]/20 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#F25C23] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default LazyImage;