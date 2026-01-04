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
      <span className="text-4xl mb-2">{brand.logo}</span>
      <span className="text-sm font-semibold text-foreground">{brand.name}</span>
    </button>
  );
}
