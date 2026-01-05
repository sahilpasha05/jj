import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade' | 'slideUp' | 'slideDown';
}

export function PageTransition({ 
  children, 
  className = '', 
  variant = 'slideUp' 
}: PageTransitionProps) {
  const animationClass = {
    fade: 'opacity-0 animate-fade-in',
    slideUp: 'translate-y-4 opacity-0 animate-slide-up',
    slideDown: '-translate-y-4 opacity-0 animate-slide-down'
  }[variant];

  return (
    <div className={`screen-enter ${animationClass} ${className}`}>
      {children}
    </div>
  );
}
