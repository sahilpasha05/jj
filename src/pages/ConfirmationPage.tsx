import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { PageTransition } from '@/components/PageTransition';
import { MapPin, CreditCard, Smartphone, Home } from 'lucide-react';

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
    <PageTransition className="w-full flex flex-col min-h-screen pb-20">
      <section className="flex-1 overflow-y-auto px-4 py-8 pb-32">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6 animate-success-pop">
            <svg className="w-12 h-12" viewBox="0 0 50 50">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                className="animate-success-pop"
              />
              <path
                d="M15 25 L22 32 L35 18"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-checkmark"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Pickup Scheduled!
          </h1>
          <p className="text-gray-600">
            We'll pick up your phone within 24 hours
          </p>
        </div>

        {/* Order Details */}
        {showContent && (
          <div className="space-y-4 animate-slide-up">
            {/* Phone & Price */}
            <div className="card-mobile">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone size={20} className="text-blue-600" />
                <h3 className="font-semibold text-gray-900">Order Details</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Smartphone size={22} className="text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{latestOrder.phone.model}</p>
                  <p className="text-sm text-gray-600">{latestOrder.phone.brand}</p>
                </div>
                <p className="text-xl font-bold text-blue-600 flex-shrink-0">
                  ₹{latestOrder.finalPrice.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="card-mobile">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard size={20} className="text-blue-600" />
                <h3 className="font-semibold text-gray-900">Payment Method</h3>
              </div>
              <p className="text-gray-700 font-medium">{latestOrder.paymentMethod}</p>
            </div>

            {/* Pickup Address */}
            <div className="card-mobile">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-blue-600" />
                <h3 className="font-semibold text-gray-900">Pickup Address</h3>
              </div>
              <p className="text-gray-900 font-medium">{latestOrder.address.name}</p>
              <p className="text-gray-600 text-sm mt-1">{latestOrder.address.address}</p>
              <p className="text-gray-600 text-sm mt-1">
                {latestOrder.address.pincode} • +91 {latestOrder.address.mobile}
              </p>
            </div>

            {/* Order ID */}
            <div className="p-4 rounded-xl bg-gray-100 text-center">
              <p className="text-xs text-gray-500 mb-1">Order ID</p>
              <p className="font-mono font-bold text-gray-900 text-sm">{latestOrder.id}</p>
            </div>
          </div>
        )}
      </section>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
        <div className="max-w-md mx-auto px-4 py-4 pb-safe space-y-3">
          <button 
            onClick={handleViewOrders} 
            className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-all"
          >
            View My Orders
          </button>
          <button
            onClick={handleGoHome}
            className="w-full py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </button>
        </div>
      </div>
    </PageTransition>
  );
}
