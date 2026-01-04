import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import type { PhoneModel } from '@/data/phones';
import { getBrandById } from '@/data/phones';
import { Smartphone, ChevronRight } from 'lucide-react';

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
      className="card-interactive flex items-center gap-4 w-full text-left"
    >
      <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
        <Smartphone size={24} className="text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground truncate">{model.name}</h3>
        <p className="text-sm text-muted-foreground">{model.storage}</p>
      </div>
      <div className="text-right flex items-center gap-2">
        <div>
          <p className="text-xs text-muted-foreground">Get up to</p>
          <p className="text-lg font-bold text-primary">₹{model.basePrice.toLocaleString('en-IN')}</p>
        </div>
        <ChevronRight size={18} className="text-muted-foreground" />
      </div>
    </button>
  );
}
