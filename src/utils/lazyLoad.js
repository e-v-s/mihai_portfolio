import React, { Suspense } from 'react';

// Loading component for lazy-loaded components
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    color: '#011140'
  }}>
    <div>Loading...</div>
  </div>
);

// Higher-order component for lazy loading with error boundary
export const withLazyLoad = (Component, fallback = LoadingSpinner) => {
  const LazyComponent = React.lazy(() => Component);
  
  return (props) => (
    <Suspense fallback={<fallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Utility to preload components
export const preloadComponent = (importFunc) => {
  return () => importFunc();
};

export default LoadingSpinner; 