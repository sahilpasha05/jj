import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { BackButton } from '@/components/BackButton';
import { PageTransition } from '@/components/PageTransition';
import { MapPin, User, Phone, Home, Hash, Smartphone, AlertCircle, CheckCircle } from 'lucide-react';

export default function AddressPage() {
  const navigate = useNavigate();
  const { user, savedAddress, setSavedAddress, selectedPhone, calculatePrice } = useApp();

  const [form, setForm] = useState({
    name: savedAddress?.name || '',
    mobile: savedAddress?.mobile || user?.mobile || '',
    address: savedAddress?.address || '',
    pincode: savedAddress?.pincode || '',
  });

  const [touched, setTouched] = useState({
    name: false,
    mobile: false,
    address: false,
    pincode: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Validation functions
  const validateName = (name: string) => name.length >= 2;
  const validateMobile = (mobile: string) => /^[6-9]\d{9}$/.test(mobile);
  const validateAddress = (address: string) => address.length >= 10;
  const validatePincode = (pincode: string) => /^\d{6}$/.test(pincode);

  // Error states
  const errors = {
    name: touched.name && form.name.length > 0 && !validateName(form.name),
    mobile: touched.mobile && form.mobile.length > 0 && !validateMobile(form.mobile),
    address: touched.address && form.address.length > 0 && !validateAddress(form.address),
    pincode: touched.pincode && form.pincode.length > 0 && !validatePincode(form.pincode),
  };

  const isValid = validateName(form.name) && 
                  validateMobile(form.mobile) && 
                  validateAddress(form.address) && 
                  validatePincode(form.pincode);

  const handleSubmit = async () => {
    // Mark all fields as touched
    setTouched({
      name: true,
      mobile: true,
      address: true,
      pincode: true,
    });

    if (!isValid) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSavedAddress(form);
      setIsSubmitting(false);
      navigate('/payment');
    }, 600);
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border-2 bg-background text-foreground font-medium placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 outline-none transition-all";

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
              onBlur={() => handleBlur('name')}
              placeholder="Enter your full name"
              className={`${inputClass} ${
                errors.name 
                  ? 'border-destructive focus:border-destructive' 
                  : form.name.length >= 2 && touched.name
                  ? 'border-success focus:border-success'
                  : 'border-border focus:border-primary'
              }`}
            />
            {errors.name && (
              <div className="flex items-center gap-2 mt-2 text-destructive text-xs">
                <AlertCircle size={14} />
                <span>Name must be at least 2 characters</span>
              </div>
            )}
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
                onBlur={() => handleBlur('mobile')}
                placeholder="10-digit number"
                className={`${inputClass} ${
                  errors.mobile 
                    ? 'border-destructive focus:border-destructive' 
                    : form.mobile.length === 10 && validateMobile(form.mobile) && touched.mobile
                    ? 'border-success focus:border-success'
                    : 'border-border focus:border-primary'
                }`}
              />
            </div>
            {errors.mobile && (
              <div className="flex items-center gap-2 mt-2 text-destructive text-xs">
                <AlertCircle size={14} />
                <span>Invalid mobile number</span>
              </div>
            )}
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
              onBlur={() => handleBlur('address')}
              placeholder="House/Flat no., Building, Street, Landmark"
              className={`${inputClass} resize-none ${
                errors.address 
                  ? 'border-destructive focus:border-destructive' 
                  : form.address.length >= 10 && touched.address
                  ? 'border-success focus:border-success'
                  : 'border-border focus:border-primary'
              }`}
            />
            {errors.address && (
              <div className="flex items-center gap-2 mt-2 text-destructive text-xs">
                <AlertCircle size={14} />
                <span>Address must be at least 10 characters</span>
              </div>
            )}
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
              onBlur={() => handleBlur('pincode')}
              placeholder="6-digit pincode"
              className={`${inputClass} ${
                errors.pincode 
                  ? 'border-destructive focus:border-destructive' 
                  : form.pincode.length === 6 && touched.pincode
                  ? 'border-success focus:border-success'
                  : 'border-border focus:border-primary'
              }`}
            />
            {errors.pincode && (
              <div className="flex items-center gap-2 mt-2 text-destructive text-xs">
                <AlertCircle size={14} />
                <span>Pincode must be 6 digits</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="sticky-bottom max-w-md mx-auto">
        <button
          onClick={handleSubmit}
          disabled={!isValid || isSubmitting}
          className={`btn-cta ${(!isValid || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Saving Address...' : 'Confirm Pickup Address'}
        </button>
      </div>
    </PageTransition>
  );
}
