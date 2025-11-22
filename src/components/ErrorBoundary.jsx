import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center text-center p-4">
          <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
          <p className="mb-4">We're sorry for the inconvenience. Please try refreshing the page.</p>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
