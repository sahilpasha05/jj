import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { BackButton } from '@/components/BackButton';
import { PriceDisplay } from '@/components/PriceDisplay';
import { TrustBadges } from '@/components/TrustBadges';
import { PageTransition } from '@/components/PageTransition';
import { CheckCircle } from 'lucide-react';

export default function FinalPricePage() {
  const navigate = useNavigate();
  const { selectedPhone, calculatePrice, isLoggedIn } = useApp();

  if (!selectedPhone) {
    navigate('/sell');
    return null;
  }

  const finalPrice = calculatePrice();

  const handleSellNow = () => {
    if (isLoggedIn) {
      navigate('/address');
    } else {
      navigate('/login');
    }
  };

  return (
    <PageTransition className="app-container pb-32">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border px-4 py-4">
        <BackButton to="/condition/functional" />
      </div>

      {/* Price Card */}
      <section className="px-4 py-8">
        <div className="card-elevated p-8 text-center">
          <div className="w-20 h-20 rounded-3xl bg-success/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-success" />
          </div>
          
          <h1 className="text-xl font-bold text-foreground mb-2">
            Best Price for Your Phone!
          </h1>
          <p className="text-muted-foreground mb-6">
            Based on the condition you provided
          </p>

          <PriceDisplay price={finalPrice} label="Your Final Quote" size="large" />

          {/* Phone Summary */}
          <div className="flex items-center justify-center gap-3 mt-6 p-4 rounded-xl bg-muted">
            <span className="text-3xl">{selectedPhone.image}</span>
            <div className="text-left">
              <p className="font-semibold text-foreground">{selectedPhone.model}</p>
              <p className="text-sm text-muted-foreground">{selectedPhone.brand}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 pb-8">
        <TrustBadges />
      </section>

      {/* Features */}
      <section className="px-4 pb-8">
        <div className="space-y-3">
          {[
            { icon: '🚚', text: 'Free doorstep pickup within 24 hours' },
            { icon: '💵', text: 'Instant payment on pickup' },
            { icon: '🔒', text: 'Safe & secure transaction' },
            { icon: '📱', text: 'Data wiping assistance included' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-muted">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="sticky-bottom max-w-md mx-auto">
        <button onClick={handleSellNow} className="btn-cta">
          Sell Now for ₹{finalPrice.toLocaleString('en-IN')}
        </button>
      </div>
    </PageTransition>
  );
}
