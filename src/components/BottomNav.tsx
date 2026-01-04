import { Home, Smartphone, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/sell', icon: Smartphone, label: 'Sell' },
  { path: '/profile', icon: User, label: 'Profile' },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide on certain pages
  const hiddenPaths = ['/condition', '/final-price', '/login', '/otp', '/address', '/payment', '/confirmation'];
  const shouldHide = hiddenPaths.some(path => location.pathname.startsWith(path));
  
  if (shouldHide) return null;

  return (
    <nav className="bottom-nav max-w-md mx-auto">
      {navItems.map(({ path, icon: Icon, label }) => {
        const isActive = location.pathname === path;
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon 
              size={24} 
              strokeWidth={isActive ? 2.5 : 2}
              className={isActive ? 'text-primary' : 'text-muted-foreground'}
            />
            <span className={`text-xs mt-1 font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
