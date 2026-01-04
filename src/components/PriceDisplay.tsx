import { useEffect, useState } from 'react';

interface PriceDisplayProps {
  price: number;
  label?: string;
  size?: 'default' | 'large';
}

export function PriceDisplay({ price, label = 'Your Quote', size = 'default' }: PriceDisplayProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(timer);
  }, [price]);

  return (
    <div className="text-center">
      <p className="text-sm font-medium text-muted-foreground mb-1">{label}</p>
      <p className={`price-display pulse-price ${animate ? 'animate-price-pop' : ''} ${
        size === 'large' ? 'text-5xl' : 'text-4xl'
      }`}>
        ₹{price.toLocaleString('en-IN')}
      </p>
    </div>
  );
}
