import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { BrandCard } from '@/components/BrandCard';
import { brands } from '@/data/phones';
import { PageTransition } from '@/components/PageTransition';
import { Smartphone, Shield, Zap, Truck, CircleDollarSign, Package, CheckCircle, Star, Clock, TrendingUp, Award, Users, BadgeCheck, ArrowRight, ChevronRight, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({ customers: 0, devices: 0, rating: 0 });

  useEffect(() => {
    // Counter animation effect
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOut(progress);
      
      setCounts({
        customers: Math.min(Math.floor(50000 * easedProgress), 50000),
        devices: Math.min(Math.floor(100000 * easedProgress), 100000),
        rating: Math.min(4.8 * easedProgress, 4.8)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const formatCount = (num: number) => {
    if (num >= 100000) return '1L+';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K+';
    return num.toString();
  };

  return (
    <PageTransition className="w-full pb-24">
      <Header />
      
      {/* Hero Section */}
      <section className="px-4 pt-4 pb-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 p-6 text-white shadow-xl isolate">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-16 translate-x-16 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl translate-y-12 -translate-x-12 animate-float-delayed"></div>
          
          {/* Particles */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-300"></div>
          
          <div className="relative flex items-start justify-between gap-4 z-10">
            <div className="flex-1 animate-slide-in-up">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium mb-4 border border-white/20">
                <TrendingUp size={12} className="text-yellow-300" /> 
                <span className="text-white/95">Trending Platform</span>
              </div>
              
              <h1 className="text-3xl font-bold leading-tight mb-3 tracking-tight">
                Sell Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">Old Phone</span>
              </h1>
              
              <p className="text-sm text-blue-50/90 mb-6 leading-relaxed max-w-[200px]">
                Get instant cash with best prices guaranteed. Free doorstep pickup.
              </p>
              
              <button 
                onClick={() => navigate('/sell')}
                className="group relative inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 active:scale-95 transition-all shadow-lg animate-pulse-glow overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-blue-100/30 to-transparent skew-x-12"></div>
              </button>
            </div>
            
            <div className="w-28 h-28 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
              <Smartphone size={48} className="text-white drop-shadow-lg" />
              
              {/* Floating badges around icon */}
              <div className="absolute top-2 right-2 bg-green-500 w-3 h-3 rounded-full border-2 border-white/20 animate-pulse"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="relative grid grid-cols-3 gap-2 mt-8">
            {[
              { icon: Shield, label: 'Verified', color: 'text-emerald-300', bg: 'bg-emerald-500/20' },
              { icon: Zap, label: 'Instant', color: 'text-amber-300', bg: 'bg-amber-500/20' },
              { icon: Truck, label: 'Pickup', color: 'text-blue-200', bg: 'bg-blue-500/20' },
            ].map((item, idx) => (
              <div 
                key={item.label} 
                className={`flex flex-col items-center justify-center gap-1.5 ${item.bg} backdrop-blur-sm p-2.5 rounded-xl border border-white/10 animate-slide-in-up`}
                style={{ animationDelay: `${(idx + 3) * 100}ms` }}
              >
                <item.icon size={16} className={item.color} />
                <span className="text-[10px] font-medium text-white/90 uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 pb-8">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Customers', rawValue: counts.customers, value: formatCount(counts.customers), Icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Devices', rawValue: counts.devices, value: formatCount(counts.devices), Icon: Smartphone, color: 'text-purple-600', bg: 'bg-purple-50' },
            { label: 'Rating', rawValue: counts.rating, value: counts.rating.toFixed(1) + '★', Icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
          ].map((stat, idx) => (
            <div 
              key={stat.label} 
              className="group bg-white rounded-2xl p-3 text-center border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className={`w-10 h-10 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <stat.Icon size={18} />
              </div>
              <div className="font-bold text-lg text-slate-800 leading-tight">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase font-semibold text-slate-400 mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Selection */}
      <section className="px-4 pb-8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              Popular Brands
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">Select your phone brand</p>
          </div>
          <button 
            onClick={() => navigate('/sell')}
            className="group flex items-center gap-1 text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg active:scale-95 transition-all"
          >
            View All <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {brands.slice(0, 6).map((brand, idx) => (
            <div 
              key={brand.id}
              className="animate-slide-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 pb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-5 pl-1 border-l-4 border-blue-600">Why Choose Us?</h2>
        <div className="space-y-3">
          {[
            {
              Icon: Award,
              title: 'Best Price Guaranteed',
              desc: 'Get the highest value for your device',
              color: 'text-blue-600',
              gradient: 'from-blue-50 to-blue-100'
            },
            {
              Icon: Clock,
              title: 'Instant Payment',
              desc: 'Get paid within 24 hours',
              color: 'text-emerald-600',
              gradient: 'from-emerald-50 to-emerald-100'
            },
            {
              Icon: BadgeCheck,
              title: 'Safe & Secure',
              desc: '100% data privacy guaranteed',
              color: 'text-purple-600',
              gradient: 'from-purple-50 to-purple-100'
            },
            {
              Icon: Truck,
              title: 'Free Doorstep Pickup',
              desc: 'We come to your location',
              color: 'text-amber-600',
              gradient: 'from-amber-50 to-amber-100'
            },
          ].map((item, idx) => (
            <div 
              key={item.title} 
              className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-up hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} ${item.color} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                <item.Icon size={24} />
              </div>
              <div className="flex-1 pt-0.5">
                <h3 className="font-bold text-sm text-slate-800 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 pb-8 bg-slate-50/50 py-8 -mx-0">
        <div className="px-2">
          <div className="text-center mb-8">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">Simple Process</span>
            <h2 className="text-2xl font-bold text-slate-900">How It Works</h2>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200"></div>
            
            <div className="space-y-6">
              {[
                { step: '1', title: 'Select Phone', desc: 'Choose brand & model', Icon: Smartphone, color: 'bg-blue-500' },
                { step: '2', title: 'Get Quote', desc: 'Answer questions correctly', Icon: CircleDollarSign, color: 'bg-purple-500' },
                { step: '3', title: 'Schedule Pickup', desc: 'Free doorstep service', Icon: Package, color: 'bg-amber-500' },
                { step: '4', title: 'Get Paid', desc: 'Instant bank transfer', Icon: CheckCircle, color: 'bg-emerald-500' },
              ].map((item, idx) => (
                <div key={item.step} className="relative flex items-center gap-4 animate-slide-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className={`relative z-10 w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center flex-shrink-0 shadow-lg ring-4 ring-white`}>
                    <item.Icon size={20} />
                    <div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-sm text-slate-800">{item.title}</h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 pb-8 pt-6">
        <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
          Customer Love
          <span className="text-red-500 text-sm">❤️</span>
        </h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-none">
          {[
            { name: 'Rahul Sharma', rating: 5, comment: 'Sold my iPhone 13 within 24 hours. Best price in the market!', time: '2 days ago', initials: 'RS', color: 'bg-indigo-500' },
            { name: 'Priya Patel', rating: 5, comment: 'Very professional pickup agent. Money was transferred instantly.', time: '1 week ago', initials: 'PP', color: 'bg-pink-500' },
            { name: 'Amit Kumar', rating: 4, comment: 'Good experience overall. Pickup was slightly delayed but good price.', time: '2 weeks ago', initials: 'AK', color: 'bg-orange-500' },
          ].map((review, idx) => (
            <div 
              key={idx} 
              className="snap-center min-w-[280px] bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors"
            >
              <Quote className="absolute top-4 right-4 text-slate-100 rotate-180 group-hover:text-blue-50 transition-colors" size={40} />
              
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className={`w-10 h-10 rounded-full ${review.color} shadow-md flex items-center justify-center text-white font-bold text-sm`}>
                  {review.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">{review.name}</div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={10} 
                        className={`${i < review.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 mb-3 leading-relaxed relative z-10">"{review.comment}"</p>
              
              <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400 border-t border-slate-50 pt-3">
                <Clock size={10} />
                <span>{review.time}</span>
                <span className="ml-auto flex items-center gap-1 text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                  <BadgeCheck size={10} /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-2xl isolate group">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-900 opacity-90"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/30 transition-colors duration-500"></div>
          
          <div className="relative text-center z-10">
            <h3 className="text-2xl font-bold mb-3 tracking-tight">Ready to Sell?</h3>
            <p className="text-blue-100/80 mb-6 text-sm">
              Join 50,000+ happy customers who got the best price for their old devices.
            </p>
            <button 
              onClick={() => navigate('/sell')}
              className="w-full bg-white text-blue-900 font-bold py-4 px-6 rounded-xl hover:bg-blue-50 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 animate-pulse-glow"
            >
              Start Selling Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
