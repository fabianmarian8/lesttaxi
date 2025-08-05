import { lazy, Suspense, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}

export const LazySection = ({ 
  children, 
  fallback = <div className="w-full h-32 bg-muted animate-pulse rounded" />,
  className = ""
}: LazySectionProps) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};