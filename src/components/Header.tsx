import { MapPin, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold text-foreground">
            Sellkar<span className="text-primary">India</span>
          </span>
        </div>

        {/* Location Selector */}
        <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground hover:bg-muted/80 transition-colors">
          <MapPin size={14} className="text-primary" />
          <span>Mumbai</span>
          <ChevronDown size={14} className="text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
