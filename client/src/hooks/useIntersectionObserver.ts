import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}): [React.RefObject<Element>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<Element>(null);

  useEffect(() => {
    const node = ref?.current; // DOM node
    
    if (!node) return;
    
    // If element is already visible and we want to freeze, don't observe anymore
    if (freezeOnceVisible && isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        // If we want to freeze once visible and element is visible, disconnect
        if (freezeOnceVisible && entry.isIntersecting) {
          observer.unobserve(node);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, isVisible]);

  return [ref, isVisible];
}

// Hook for lazy loading images
export function useLazyImage(src: string, placeholder = ''): [string, boolean] {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  useEffect(() => {
    if (isVisible && src) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        setImageSrc(placeholder);
        setIsLoaded(false);
      };
      
      img.src = src;
    }
  }, [isVisible, src, placeholder]);

  return [imageSrc, isLoaded];
}