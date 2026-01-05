import { ReactNode } from 'react';

interface MobileAppWrapperProps {
  children: ReactNode;
}

export function MobileAppWrapper({ children }: MobileAppWrapperProps) {
  return (
    <div className="mobile-app-container">
      <div className="mobile-app-content">
        {children}
      </div>
    </div>
  );
}
