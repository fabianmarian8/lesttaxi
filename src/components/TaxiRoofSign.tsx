import React from 'react';

interface TaxiRoofSignProps {
  className?: string;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const TaxiRoofSign: React.FC<TaxiRoofSignProps> = ({ 
  className = '', 
  animated = false,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-12 h-4',
    md: 'w-16 h-5',
    lg: 'w-20 h-6'
  };

  const textSizes = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-xs'
  };

  return (
    <div 
      className={`${sizeClasses[size]} relative ${animated ? 'floating' : ''} ${className}`}
      style={{
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
      }}
    >
      {/* Main taxi sign body */}
      <div className="relative w-full h-full">
        {/* Yellow background with gradient */}
        <div 
          className="w-full h-full rounded-sm border border-black/20"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--military-gold)) 0%, #FFD700 50%, hsl(var(--military-gold)) 100%)',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 3px rgba(0,0,0,0.2)'
          }}
        >
          {/* TAXI text */}
          <div className={`absolute inset-0 flex items-center justify-center ${textSizes[size]} font-bold text-black tracking-wider`}>
            TAXI
          </div>
          
          {/* Glossy overlay effect */}
          <div 
            className="absolute inset-0 rounded-sm opacity-30"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)'
            }}
          />
        </div>
        
        {/* Side mounting brackets */}
        <div className="absolute -left-0.5 top-1/2 transform -translate-y-1/2 w-1 h-2 bg-gray-600 rounded-sm opacity-80" />
        <div className="absolute -right-0.5 top-1/2 transform -translate-y-1/2 w-1 h-2 bg-gray-600 rounded-sm opacity-80" />
        
        {/* Optional glow effect for animation */}
        {animated && (
          <div 
            className="absolute inset-0 rounded-sm animate-pulse-gentle"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--military-gold))/0.8 0%, transparent 100%)',
              filter: 'blur(1px)',
              zIndex: -1,
              transform: 'scale(1.1)'
            }}
          />
        )}
      </div>
    </div>
  );
};