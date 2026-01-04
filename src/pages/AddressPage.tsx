import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { BackButton } from '@/components/BackButton';
import { PageTransition } from '@/components/PageTransition';
import { MapPin, User, Phone, Home, Hash, Smartphone } from 'lucide-react';

export default function AddressPage() {
  const navigate = useNavigate();
  const { user, savedAddress, setSavedAddress, selectedPhone, calculatePrice } = useApp();

  const [form, setForm] = useState({
    name: savedAddress?.name || '',
    mobile: savedAddress?.mobile || user?.mobile || '',
    address: savedAddress?.address || '',
    pincode: savedAddress?.pincode || '',
  });

  useEffect(() => {
    if (savedAddress) {
      setForm({
        name: savedAddress.name,
        mobile: savedAddress.mobile,
        address: savedAddress.address,
        pincode: savedAddress.pincode,
      });
    } else if (user?.mobile) {
      setForm(prev => ({ ...prev, mobile: user.mobile }));
    }
  }, [savedAddress, user]);

  if (!selectedPhone) {
    navigate('/sell');
    return null;
  }

  const isValid = form.name.length >= 2 && 
                  /^[6-9]\d{9}$/.test(form.mobile) && 
                  form.address.length >= 10 && 
                  /^\d{6}$/.test(form.pincode);

  const handleSubmit = () => {
    if (isValid) {
      setSavedAddress(form);
      navigate('/payment');
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground font-medium placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all";

  return (
    <PageTransition className="app-container pb-32">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <BackButton to="/final-price" />
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Your Quote</p>
            <p className="font-bold text-primary">₹{calculatePrice().toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>

      <section className="px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <MapPin size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Pickup Address</h1>
            <p className="text-sm text-muted-foreground">Where should we pick up your phone?</p>
          </div>
        </div>

        {/* Phone Summary */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted mb-6">
          <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
            <Smartphone size={20} className="text-muted-foreground" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground">{selectedPhone.model}</p>
            <p className="text-sm text-muted-foreground">{selectedPhone.brand}</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <User size={16} className="text-muted-foreground" />
              Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter your full name"
              className={inputClass}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Phone size={16} className="text-muted-foreground" />
              Mobile Number
            </label>
            <div className="flex items-center gap-3">
              <div className="px-4 py-3 rounded-xl bg-muted text-foreground font-medium">
                +91
              </div>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={form.mobile}
                onChange={(e) => setForm(prev => ({ ...prev, mobile: e.target.value.replace(/\D/g, '') }))}
                placeholder="10-digit number"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Home size={16} className="text-muted-foreground" />
              Complete Address
            </label>
            <textarea
              rows={3}
              value={form.address}
              onChange={(e) => setForm(prev => ({ ...prev, address: e.target.value }))}
              placeholder="House/Flat no., Building, Street, Landmark"
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Hash size={16} className="text-muted-foreground" />
              Pincode
            </label>
            <input
              type="tel"
              inputMode="numeric"
              maxLength={6}
              value={form.pincode}
              onChange={(e) => setForm(prev => ({ ...prev, pincode: e.target.value.replace(/\D/g, '') }))}
              placeholder="6-digit pincode"
              className={inputClass}
            />
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="sticky-bottom max-w-md mx-auto">
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className={`btn-cta ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Confirm Pickup Address
        </button>
      </div>
    </PageTransition>
  );
}
