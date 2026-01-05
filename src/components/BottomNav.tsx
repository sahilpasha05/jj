import { Home, Package, Clock, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/sell', icon: Package, label: 'Sell' },
  { path: '/confirmation', icon: Clock, label: 'Orders' },
  { path: '/profile', icon: User, label: 'Profile' },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide on certain pages
  const hiddenPaths = ['/condition', '/final-price', '/login', '/otp', '/address', '/payment'];
  const shouldHide = hiddenPaths.some(path => location.pathname.startsWith(path));
  
  if (shouldHide) return null;

  return (
    <nav className="bottom-nav">
      {navItems.map(({ path, icon: Icon, label }) => {
        const isActive = location.pathname === path || (path === '/confirmation' && location.pathname === '/confirmation');
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon 
              size={24} 
              strokeWidth={isActive ? 2.5 : 2}
              className={`transition-all duration-200 ${isActive ? 'text-primary scale-110' : 'text-muted-foreground'}`}
            />
            <span className={`text-xs font-medium transition-colors duration-200 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
