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
      className="brand-card aspect-square flex flex-col items-center justify-center"
    >
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 overflow-hidden transition-transform duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, hsl(225 73% 57% / 0.15) 0%, hsl(225 73% 57% / 0.05) 100%)' }}>
        <img 
          src={brand.image} 
          alt={brand.name}
          className="w-10 h-10 object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-xs font-bold text-foreground tracking-tight text-center leading-tight">{brand.name}</span>
    </button>
  );
}
