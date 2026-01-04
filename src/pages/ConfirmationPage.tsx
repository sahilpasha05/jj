import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { PageTransition } from '@/components/PageTransition';
import { Check, MapPin, CreditCard, Smartphone, Home } from 'lucide-react';

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const { orders, resetFlow } = useApp();
  const [showContent, setShowContent] = useState(false);

  const latestOrder = orders[0];

  useEffect(() => {
    // Show content after success animation
    const timer = setTimeout(() => setShowContent(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!latestOrder) {
    navigate('/');
    return null;
  }

  const handleGoHome = () => {
    resetFlow();
    navigate('/');
  };

  const handleViewOrders = () => {
    resetFlow();
    navigate('/profile');
  };

  return (
    <PageTransition className="app-container">
      <section className="px-4 py-12">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6 animate-success-pop">
            <svg className="w-12 h-12" viewBox="0 0 50 50">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="hsl(var(--success))"
                strokeWidth="3"
                className="animate-success-pop"
              />
              <path
                d="M15 25 L22 32 L35 18"
                fill="none"
                stroke="hsl(var(--success))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-checkmark"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Pickup Scheduled Successfully!
          </h1>
          <p className="text-muted-foreground">
            We'll pick up your phone within 24 hours
          </p>
        </div>

        {/* Order Details */}
        {showContent && (
          <div className="space-y-4 animate-slide-up">
            {/* Phone & Price */}
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Order Details</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{latestOrder.phone.image}</span>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{latestOrder.phone.model}</p>
                  <p className="text-sm text-muted-foreground">{latestOrder.phone.brand}</p>
                </div>
                <p className="text-xl font-bold text-primary">
                  ₹{latestOrder.finalPrice.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Payment Method</h3>
              </div>
              <p className="text-muted-foreground">{latestOrder.paymentMethod}</p>
            </div>

            {/* Pickup Address */}
            <div className="card-elevated p-4">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Pickup Address</h3>
              </div>
              <p className="text-foreground font-medium">{latestOrder.address.name}</p>
              <p className="text-muted-foreground text-sm">{latestOrder.address.address}</p>
              <p className="text-muted-foreground text-sm">
                {latestOrder.address.pincode} • +91 {latestOrder.address.mobile}
              </p>
            </div>

            {/* Order ID */}
            <div className="p-4 rounded-xl bg-muted text-center">
              <p className="text-xs text-muted-foreground mb-1">Order ID</p>
              <p className="font-mono font-bold text-foreground">{latestOrder.id}</p>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4">
              <button onClick={handleViewOrders} className="btn-primary">
                View My Orders
              </button>
              <button
                onClick={handleGoHome}
                className="w-full py-4 rounded-2xl font-semibold text-muted-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                <Home size={20} />
                Back to Home
              </button>
            </div>
          </div>
        )}
      </section>
    </PageTransition>
  );
}
