import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { BackButton } from '@/components/BackButton';
import { OTPInput } from '@/components/OTPInput';
import { PageTransition } from '@/components/PageTransition';
import { useToast } from '@/hooks/use-toast';
import { Shield, AlertCircle, CheckCircle } from 'lucide-react';

export default function OTPPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useApp();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const mobile = (location.state as { mobile?: string })?.mobile || '';

  if (!mobile) {
    navigate('/login');
    return null;
  }

  const handleOTPComplete = useCallback((otp: string) => {
    if (!otp || otp.length !== 4) {
      toast({
        title: 'Invalid OTP',
        description: 'Please enter a 4-digit OTP',
        variant: 'destructive',
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate verification delay
    setTimeout(() => {
      setVerificationSuccess(true);
      login(mobile);
      toast({
        title: 'Verified Successfully! ✓',
        description: 'You are now logged in',
      });
      
      // Navigate after success animation
      setTimeout(() => {
        navigate('/address');
      }, 800);
    }, 1000);
  }, [mobile, login, navigate, toast]);

  const handleResend = () => {
    if (resendCooldown > 0) {
      toast({
        title: 'Please Wait',
        description: `Try resending OTP after ${resendCooldown}s`,
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'OTP Resent! ✓',
      description: `New OTP sent to +91 ${mobile}`,
    });

    // Start cooldown timer
    setResendCooldown(30);
    const timer = setInterval(() => {
      setResendCooldown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
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
          <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
            verificationSuccess 
              ? 'bg-success/10 scale-100' 
              : 'bg-primary/10'
          }`}>
            {verificationSuccess ? (
              <CheckCircle size={40} className="text-success animate-success-pop" />
            ) : (
              <Shield size={40} className="text-primary" />
            )}
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {verificationSuccess ? 'Verified Successfully!' : 'Enter OTP'}
          </h1>
          <p className="text-muted-foreground">
            {verificationSuccess 
              ? 'Your account is verified'
              : `We've sent a code to +91 ${mobile}`
            }
          </p>
        </div>

        {/* OTP Input - Hide after verification */}
        {!verificationSuccess && (
          <div className="card-elevated p-6">
            <OTPInput onComplete={handleOTPComplete} disabled={isVerifying} />
            
            {isVerifying && (
              <p className="text-center text-primary font-medium mt-4 animate-pulse">
                Verifying OTP...
              </p>
            )}

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground mb-2">
                Didn't receive the code?
              </p>
              <button
                onClick={handleResend}
                disabled={resendCooldown > 0}
                className={`text-primary font-semibold text-sm hover:underline transition-opacity ${
                  resendCooldown > 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {resendCooldown > 0 
                  ? `Resend in ${resendCooldown}s` 
                  : 'Resend OTP'}
              </button>
            </div>
          </div>
        )}

        {/* Demo Notice */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Demo mode: Enter any 4 digits to continue
        </p>
      </section>
    </PageTransition>
  );
}
