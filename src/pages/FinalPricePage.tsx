import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { BackButton } from '@/components/BackButton';
import { PriceDisplay } from '@/components/PriceDisplay';
import { TrustBadges } from '@/components/TrustBadges';
import { PageTransition } from '@/components/PageTransition';
import { CheckCircle, Smartphone, Truck, Banknote, Shield, HardDrive } from 'lucide-react';

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
      <div className="sticky top-0 z-50 bg-card/98 backdrop-blur-2xl border-b border-border px-4 py-4">
        <BackButton to="/condition/functional" />
      </div>

      {/* Price Card */}
      <section className="page-content">
        <div className="card-premium p-8 text-center">
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-success-pop" style={{ background: 'linear-gradient(135deg, hsl(142 71% 45% / 0.2) 0%, hsl(142 71% 45% / 0.1) 100%)' }}>
            <CheckCircle size={44} className="text-success" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Best Price for Your Phone!
          </h1>
          <p className="text-muted-foreground mb-8">
            Based on the condition you provided
          </p>

          <PriceDisplay price={finalPrice} label="Your Final Quote" size="large" />

          {/* Phone Summary */}
          <div className="flex items-center gap-4 mt-8 p-4 rounded-2xl border border-primary/10" style={{ background: 'linear-gradient(90deg, hsl(225 73% 57% / 0.08) 0%, hsl(225 73% 57% / 0.03) 100%)' }}>
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
              <Smartphone size={24} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground">{selectedPhone.model}</p>
              <p className="text-sm text-muted-foreground">{selectedPhone.brand}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="page-content">
        <TrustBadges />
      </section>

      {/* Features */}
      <section className="page-content">
        <h3 className="font-bold text-foreground mb-4">Why Sell With SellKar?</h3>
        <div className="space-y-3">
          {[
            { Icon: Truck, text: 'Free doorstep pickup within 24 hours' },
            { Icon: Banknote, text: 'Instant payment on pickup' },
            { Icon: Shield, text: 'Safe & secure transaction' },
            { Icon: HardDrive, text: 'Data wiping assistance included' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border transition-all duration-200 hover:shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.Icon size={20} className="text-primary" />
              </div>
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
