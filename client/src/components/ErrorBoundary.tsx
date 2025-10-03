import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // Report error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Analytics or error reporting service
      // reportError(error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-[#1b1b1b] flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#D1FF00] rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl">⚠️</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-white/70 mb-8 leading-relaxed">
                We're experiencing a technical issue. Our team has been notified and is working on a fix.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-[#D1FF00] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#c4e71a] transition-colors duration-300"
                >
                  Reload Page
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="w-full bg-transparent border-2 border-[#D1FF00] text-[#D1FF00] px-6 py-3 rounded-xl font-semibold hover:bg-[#D1FF00] hover:text-black transition-colors duration-300"
                >
                  Go Back
                </button>
              </div>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-xl text-left">
                  <h3 className="text-red-400 font-semibold mb-2">Development Error:</h3>
                  <pre className="text-red-300 text-xs overflow-auto whitespace-pre-wrap">
                    {this.state.error.toString()}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;