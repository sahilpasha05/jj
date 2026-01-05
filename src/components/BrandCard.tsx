import { useNavigate } from 'react-router-dom';
import type { PhoneBrand } from '@/data/phones';

interface BrandCardProps {
  brand: PhoneBrand;
}

export function BrandCard({ brand }: BrandCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/sell/${brand.id}`)}
      className="brand-card aspect-square"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 overflow-hidden">
        <img 
          src={brand.image} 
          alt={brand.name}
          className="w-9 h-9 object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-sm font-semibold text-foreground">{brand.name}</span>
    </button>
  );
}
