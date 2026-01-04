import { Header } from '@/components/Header';
import { BrandCard } from '@/components/BrandCard';
import { brands } from '@/data/phones';
import { PageTransition } from '@/components/PageTransition';
import { Smartphone, Shield, Zap, Truck, CircleDollarSign, Package, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <PageTransition className="app-container">
      <Header />
      
      {/* Hero Section */}
      <section className="px-4 py-8">
        <div className="card-elevated bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 rounded-3xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold leading-tight mb-2">
                Sell Your Old Phone Instantly
              </h1>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Best price • Free pickup • Instant payment
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium">
                  <Shield size={12} /> Verified
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium">
                  <Zap size={12} /> Fast
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium">
                  <Truck size={12} /> Free Pickup
                </span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Smartphone size={32} className="text-primary-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Selection */}
      <section className="px-4 pb-8">
        <h2 className="text-lg font-bold text-foreground mb-4">Select Your Phone Brand</h2>
        <div className="grid grid-cols-3 gap-3">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 pb-8">
        <h2 className="text-lg font-bold text-foreground mb-4">How It Works</h2>
        <div className="space-y-3">
          {[
            { step: '1', title: 'Select Your Phone', desc: 'Choose brand & model', Icon: Smartphone },
            { step: '2', title: 'Get Best Price', desc: 'Answer few questions', Icon: CircleDollarSign },
            { step: '3', title: 'Schedule Pickup', desc: 'We come to your door', Icon: Package },
            { step: '4', title: 'Get Paid Instantly', desc: 'Cash or bank transfer', Icon: CheckCircle },
          ].map((item) => (
            <div key={item.step} className="card-elevated flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <item.Icon size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{item.step}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
