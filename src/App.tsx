import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import { BottomNav } from "@/components/BottomNav";
import { SplashScreen } from "@/components/SplashScreen";
import { MobileAppWrapper } from "@/components/MobileAppWrapper";

import Index from "./pages/Index";
import SellPage from "./pages/SellPage";
import BrandModelsPage from "./pages/BrandModelsPage";
import ConditionPage from "./pages/ConditionPage";
import FinalPricePage from "./pages/FinalPricePage";
import LoginPage from "./pages/LoginPage";
import OTPPage from "./pages/OTPPage";
import AddressPage from "./pages/AddressPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if splash has been shown in this session
    const hasSeen = sessionStorage.getItem('splash-shown');
    if (hasSeen) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('splash-shown', 'true');
    setShowSplash(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          <BrowserRouter>
            <MobileAppWrapper>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sell" element={<SellPage />} />
                <Route path="/sell/:brandId" element={<BrandModelsPage />} />
                <Route path="/condition/:step" element={<ConditionPage />} />
                <Route path="/final-price" element={<FinalPricePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/otp" element={<OTPPage />} />
                <Route path="/address" element={<AddressPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <BottomNav />
            </MobileAppWrapper>
          </BrowserRouter>
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
