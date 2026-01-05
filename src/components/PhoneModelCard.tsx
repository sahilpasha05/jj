import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import type { PhoneModel } from '@/data/phones';
import { getBrandById } from '@/data/phones';
import { Smartphone } from 'lucide-react';

interface PhoneModelCardProps {
  model: PhoneModel;
}

export function PhoneModelCard({ model }: PhoneModelCardProps) {
  const navigate = useNavigate();
  const { setSelectedPhone, resetConditionAnswers } = useApp();
  const brand = getBrandById(model.brandId);

  const handleSelect = () => {
    resetConditionAnswers();
    setSelectedPhone({
      brand: brand?.name || '',
      model: model.name,
      basePrice: model.basePrice,
    });
    navigate('/condition/screen');
  };

  return (
    <button
      onClick={handleSelect}
      className="card-interactive flex flex-col items-center gap-3 w-full p-4 text-center"
    >
      <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
        {model.image ? (
          <img 
            src={model.image} 
            alt={model.name}
            className="w-full h-full object-contain p-4 z-10"
            loading="lazy"
          />
        ) : brand?.image ? (
          <img 
            src={brand.image} 
            alt={brand.name}
            className="w-16 h-16 object-contain z-10"
            loading="lazy"
          />
        ) : (
          <Smartphone size={56} className="text-primary z-10" strokeWidth={1.5} />
        )}
      </div>
      <div className="w-full">
        <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-1">{model.name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{model.storage}</p>
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-0.5">Get up to</p>
          <p className="text-base font-bold text-primary">₹{model.basePrice.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </button>
  );
}
