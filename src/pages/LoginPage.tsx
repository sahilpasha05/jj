import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '@/components/BackButton';
import { PageTransition } from '@/components/PageTransition';
import { useToast } from '@/hooks/use-toast';
import { Smartphone, AlertCircle, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const isValidMobile = /^[6-9]\d{9}$/.test(mobile);
  const hasError = touched && mobile.length > 0 && !isValidMobile;

  const handleGetOTP = async () => {
    if (!isValidMobile) {
      toast({
        title: 'Invalid Number',
        description: 'Please enter a valid 10-digit mobile number',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate OTP sending delay
    setTimeout(() => {
      toast({
        title: 'OTP Sent Successfully! ✓',
        description: `OTP sent to +91 ${mobile}`,
      });
      setIsLoading(false);
      navigate('/otp', { state: { mobile } });
    }, 600);
  };

  return (
    <PageTransition className="app-container">
      {/* Header */}
      <div className="px-4 py-4">
        <BackButton to="/final-price" />
      </div>

      <section className="px-4 py-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Smartphone size={40} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Login to Continue
          </h1>
          <p className="text-muted-foreground">
            Enter your mobile number to proceed
          </p>
        </div>

        {/* Mobile Input */}
        <div className="card-elevated p-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            Mobile Number
          </label>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted text-foreground font-medium">
              <span>🇮🇳</span>
              <span>+91</span>
            </div>
            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
              onBlur={() => setTouched(true)}
              placeholder="Enter 10-digit number"
              className={`flex-1 px-4 py-3 rounded-xl border-2 bg-background text-foreground text-lg font-medium placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                hasError 
                  ? 'border-destructive focus:border-destructive' 
                  : mobile.length === 10 && isValidMobile
                  ? 'border-success focus:border-success'
                  : 'border-border focus:border-primary'
              }`}
            />
          </div>
          
          {hasError && (
            <div className="flex items-center gap-2 mt-3 text-destructive text-sm">
              <AlertCircle size={16} />
              <span>Invalid mobile number. Must start with 6-9 and be 10 digits</span>
            </div>
          )}

          {mobile.length === 10 && isValidMobile && (
            <div className="flex items-center gap-2 mt-3 text-success text-sm">
              <CheckCircle size={16} />
              <span>Mobile number is valid</span>
            </div>
          )}
          
          <p className="text-xs text-muted-foreground mt-3">
            We'll send you a one-time password to verify your number
          </p>

          <button
            onClick={handleGetOTP}
            disabled={!isValidMobile || isLoading}
            className={`btn-primary mt-6 ${(!isValidMobile || isLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Sending OTP...' : 'Get OTP'}
          </button>
        </div>

        {/* Demo Notice */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          This is a demo. No real SMS will be sent.
        </p>
      </section>
    </PageTransition>
  );
}
