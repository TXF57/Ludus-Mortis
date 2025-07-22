interface GeometricSymbolProps {
  type: 'square' | 'circle' | 'triangle';
  size?: number;
  className?: string;
}

export function GeometricSymbol({ type, size = 80, className = "" }: GeometricSymbolProps) {
  const baseClasses = "stroke-white fill-none stroke-2 transition-all duration-700 hover:stroke-primary-foreground hover:scale-110";
  
  switch (type) {
    case 'square':
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" className={`${baseClasses} ${className}`}>
          <rect x="15" y="15" width="50" height="50" />
          <rect x="25" y="25" width="30" height="30" opacity="0.3" />
        </svg>
      );
    
    case 'circle':
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" className={`${baseClasses} ${className}`}>
          <circle cx="40" cy="40" r="25" />
          <circle cx="40" cy="40" r="15" opacity="0.3" />
          <circle cx="40" cy="40" r="5" opacity="0.6" />
        </svg>
      );
    
    case 'triangle':
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" className={`${baseClasses} ${className}`}>
          <polygon points="40,15 65,60 15,60" />
          <polygon points="40,25 55,50 25,50" opacity="0.3" />
        </svg>
      );
    
    default:
      return null;
  }
}