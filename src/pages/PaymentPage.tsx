import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { BackButton } from '@/components/BackButton';
import { PageTransition } from '@/components/PageTransition';
import { CreditCard, Building2, Wallet, Check, AlertTriangle } from 'lucide-react';

const paymentOptions = [
  { id: 'upi', name: 'UPI', description: 'Google Pay, PhonePe, Paytm', icon: '📲' },
  { id: 'bank', name: 'Bank Transfer', description: 'Direct transfer to your account', icon: '🏦' },
  { id: 'wallet', name: 'Wallet', description: 'Paytm, PhonePe wallet', icon: '💳' },
];

export default function PaymentPage() {
  const navigate = useNavigate();
  const { selectedPhone, calculatePrice, savedAddress, paymentMethod, setPaymentMethod, addOrder } = useApp();
  const [selected, setSelected] = useState(paymentMethod || '');
  const [showModal, setShowModal] = useState(false);

  if (!selectedPhone || !savedAddress) {
    navigate('/sell');
    return null;
  }

  const finalPrice = calculatePrice();

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    setShowModal(true);
  };

  const handleConfirmPayment = () => {
    setPaymentMethod(selected);
    
    // Create order
    addOrder({
      phone: selectedPhone,
      finalPrice,
      paymentMethod: paymentOptions.find(p => p.id === selected)?.name || '',
      address: savedAddress,
      status: 'Pickup Scheduled',
    });

    navigate('/confirmation');
  };

  return (
    <PageTransition className="app-container pb-32">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <BackButton to="/address" />
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Amount</p>
            <p className="font-bold text-primary">₹{finalPrice.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>

      <section className="px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <CreditCard size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Payment Method</h1>
            <p className="text-sm text-muted-foreground">How would you like to receive payment?</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="card-elevated p-4 mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">ORDER SUMMARY</h3>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{selectedPhone.image}</span>
            <div className="flex-1">
              <p className="font-semibold text-foreground">{selectedPhone.model}</p>
              <p className="text-sm text-muted-foreground">{selectedPhone.brand}</p>
            </div>
            <p className="font-bold text-primary">₹{finalPrice.toLocaleString('en-IN')}</p>
          </div>
          <div className="pt-3 border-t border-border">
            <p className="text-sm text-muted-foreground">
              📍 {savedAddress.address}, {savedAddress.pincode}
            </p>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-3">
          {paymentOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`condition-option w-full text-left flex items-center gap-4 ${
                selected === option.id ? 'selected' : ''
              }`}
            >
              <span className="text-3xl">{option.icon}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{option.name}</h4>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selected === option.id 
                  ? 'bg-primary border-primary' 
                  : 'border-border'
              }`}>
                {selected === option.id && <Check size={14} className="text-primary-foreground" />}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Demo Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-3xl p-6 max-w-sm w-full animate-scale-in">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={32} className="text-secondary" />
            </div>
            <h2 className="text-xl font-bold text-foreground text-center mb-2">
              Demo Payment
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              This is a demo payment. No real transaction will happen.
            </p>
            <div className="space-y-3">
              <button onClick={handleConfirmPayment} className="btn-cta">
                Confirm Payment
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 rounded-xl font-semibold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
}
