import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { BackButton } from '@/components/BackButton';
import { OTPInput } from '@/components/OTPInput';
import { PageTransition } from '@/components/PageTransition';
import { useToast } from '@/hooks/use-toast';
import { Shield } from 'lucide-react';

export default function OTPPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useApp();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);

  const mobile = (location.state as { mobile?: string })?.mobile || '';

  if (!mobile) {
    navigate('/login');
    return null;
  }

  const handleOTPComplete = (otp: string) => {
    setIsVerifying(true);
    
    // Simulate verification delay
    setTimeout(() => {
      login(mobile);
      toast({
        title: 'Verified Successfully! ✓',
        description: 'You are now logged in',
      });
      navigate('/address');
    }, 500);
  };

  const handleResend = () => {
    toast({
      title: 'OTP Resent! ✓',
      description: `New OTP sent to +91 ${mobile}`,
    });
  };

  return (
    <PageTransition className="app-container">
      {/* Header */}
      <div className="px-4 py-4">
        <BackButton to="/login" />
      </div>

      <section className="px-4 py-8">
        {/* Icon */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Shield size={40} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Enter OTP
          </h1>
          <p className="text-muted-foreground">
            We've sent a code to +91 {mobile}
          </p>
        </div>

        {/* OTP Input */}
        <div className="card-elevated p-6">
          <OTPInput onComplete={handleOTPComplete} />
          
          {isVerifying && (
            <p className="text-center text-primary font-medium mt-4">
              Verifying...
            </p>
          )}

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground mb-2">
              Didn't receive the code?
            </p>
            <button
              onClick={handleResend}
              className="text-primary font-semibold text-sm hover:underline"
            >
              Resend OTP
            </button>
          </div>
        </div>

        {/* Demo Notice */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Demo mode: Enter any 4 digits to continue
        </p>
      </section>
    </PageTransition>
  );
}
