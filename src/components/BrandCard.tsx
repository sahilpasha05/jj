import { useNavigate } from 'react-router-dom';
import type { PhoneBrand } from '@/data/phones';

interface BrandCardProps {
  brand: PhoneBrand;
}

export function BrandCard({ brand }: BrandCardProps) {
  const navigate = useNavigate();
  const IconComponent = brand.Icon;

  return (
    <button
      onClick={() => navigate(`/sell/${brand.id}`)}
      className="brand-card aspect-square"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
        <IconComponent size={24} className="text-primary" />
      </div>
      <span className="text-sm font-semibold text-foreground">{brand.name}</span>
    </button>
  );
}
