import { useEffect, useState } from 'react';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectMetrics = () => {
      if (typeof window === 'undefined') return;

      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      // Get paint metrics
      const paintEntries = performance.getEntriesByType('paint');
      const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');

      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd || 0,
        domContentLoaded: navigation.domContentLoadedEventEnd || 0,
        firstPaint: firstPaint?.startTime || 0,
        firstContentfulPaint: firstContentfulPaint?.startTime || 0,
      };

      // Get Core Web Vitals if available
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          performanceMetrics.largestContentfulPaint = lastEntry.startTime;
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // Browser doesn't support LCP
        }

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          performanceMetrics.cumulativeLayoutShift = clsValue;
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // Browser doesn't support CLS
        }

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((entryList) => {
          const firstEntry = entryList.getEntries()[0];
          performanceMetrics.firstInputDelay = (firstEntry as any).processingStart - firstEntry.startTime;
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          // Browser doesn't support FID
        }
      }

      setMetrics(performanceMetrics);
      setIsLoading(false);

      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.group('🚀 Performance Metrics');
        console.log('Load Time:', performanceMetrics.loadTime + 'ms');
        console.log('DOM Content Loaded:', performanceMetrics.domContentLoaded + 'ms');
        console.log('First Paint:', performanceMetrics.firstPaint + 'ms');
        console.log('First Contentful Paint:', performanceMetrics.firstContentfulPaint + 'ms');
        if (performanceMetrics.largestContentfulPaint) {
          console.log('Largest Contentful Paint:', performanceMetrics.largestContentfulPaint + 'ms');
        }
        if (performanceMetrics.cumulativeLayoutShift) {
          console.log('Cumulative Layout Shift:', performanceMetrics.cumulativeLayoutShift);
        }
        if (performanceMetrics.firstInputDelay) {
          console.log('First Input Delay:', performanceMetrics.firstInputDelay + 'ms');
        }
        console.groupEnd();
      }

      // Send metrics to analytics in production
      if (process.env.NODE_ENV === 'production' && window.gtag) {
        window.gtag('event', 'performance_metrics', {
          custom_map: {
            load_time: performanceMetrics.loadTime,
            fcp: performanceMetrics.firstContentfulPaint,
            lcp: performanceMetrics.largestContentfulPaint || 0,
            cls: performanceMetrics.cumulativeLayoutShift || 0,
            fid: performanceMetrics.firstInputDelay || 0,
          },
        });
      }
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    return () => {
      window.removeEventListener('load', collectMetrics);
    };
  }, []);

  return { metrics, isLoading };
};

export default usePerformance;