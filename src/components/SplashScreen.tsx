import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-primary via-primary to-secondary flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-60 h-60 rounded-full bg-white/5 blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
        {/* Logo Circle */}
        <div className="animate-bounce">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center border-2 border-white/40">
            <Sparkles className="w-12 h-12 text-white animate-spin" strokeWidth={1.5} />
          </div>
        </div>

        {/* App Name */}
        <div className="space-y-2">
          <h1 className="text-5xl font-black text-white tracking-tighter animate-fade-in-up">
            SellKar
          </h1>
          <p className="text-lg font-semibold text-white/80 animate-fade-in-up delay-100">
            Get Best Price for Your Phone
          </p>
        </div>

        {/* Subtext */}
        <div className="mt-8 space-y-3 animate-fade-in-up delay-200">
          <div className="flex items-center justify-center gap-2 text-white/70">
            <div className="w-1 h-1 rounded-full bg-white/60"></div>
            <span className="text-sm font-medium">Instant Valuation</span>
            <div className="w-1 h-1 rounded-full bg-white/60"></div>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/70">
            <div className="w-1 h-1 rounded-full bg-white/60"></div>
            <span className="text-sm font-medium">Free Home Pickup</span>
            <div className="w-1 h-1 rounded-full bg-white/60"></div>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/70">
            <div className="w-1 h-1 rounded-full bg-white/60"></div>
            <span className="text-sm font-medium">Instant Payment</span>
            <div className="w-1 h-1 rounded-full bg-white/60"></div>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="mt-12 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white to-white/40 animate-loading-bar"></div>
        </div>
      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loadingBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up.delay-100 {
          animation-delay: 0.2s;
        }

        .animate-fade-in-up.delay-200 {
          animation-delay: 0.4s;
        }

        .animate-loading-bar {
          animation: loadingBar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
