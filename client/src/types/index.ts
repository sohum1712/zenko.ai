// Language types
export type Language = 'en' | 'gu';

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Component props
export interface TranslatedTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface HighlightedTranslatedTextProps extends TranslatedTextProps {
  // Inherits all props from TranslatedTextProps
}

// Animation types
export interface CloudElement {
  id: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: {
    width: string;
    height: string;
  };
  style: {
    background: string;
    blur: string;
    opacity: number;
  };
  animation: {
    type: 'pulse-slow' | 'float';
    delay: string;
  };
}

export interface FloatingTag {
  id: string;
  text: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animation: {
    delay: string;
  };
}

// Service/Portfolio types
export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  category: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
}

// Toast message types
export interface ToastMessage {
  title: string;
  description: string;
  variant?: 'default' | 'destructive';
}

// Performance metrics
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

// Error types
export interface AppError {
  message: string;
  code?: string;
  stack?: string;
  timestamp: Date;
}