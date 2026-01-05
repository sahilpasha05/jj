import { Header } from '@/components/Header';
import { BrandCard } from '@/components/BrandCard';
import { brands } from '@/data/phones';
import { PageTransition } from '@/components/PageTransition';
import { Smartphone, Shield, Zap, Truck, CircleDollarSign, Package, CheckCircle, Star, Clock, TrendingUp, Award, Users, BadgeCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <PageTransition className="w-full pb-20">
      <Header />
      
      {/* Hero Section */}
      <section className="px-4 pt-4 pb-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 p-6 text-white shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3">
                <TrendingUp size={12} /> Trending
              </div>
              <h1 className="text-2xl font-bold leading-tight mb-2">
                Sell Your Old Phone
              </h1>
              <p className="text-sm text-white/90 mb-4">
                Get instant cash with best prices
              </p>
              <button 
                onClick={() => navigate('/sell')}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/95 active:scale-95 transition-all shadow-lg"
              >
                Get Started <ArrowRight size={16} />
              </button>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Smartphone size={36} />
            </div>
          </div>

          {/* Features */}
          <div className="relative grid grid-cols-3 gap-2 mt-6">
            {[
              { icon: Shield, label: 'Verified' },
              { icon: Zap, label: 'Instant' },
              { icon: Truck, label: 'Free Pickup' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-2.5 py-2 rounded-xl">
                <item.icon size={14} />
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 pb-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Customers', value: '50K+', Icon: Users, color: 'text-blue-600' },
            { label: 'Devices', value: '1L+', Icon: Smartphone, color: 'text-green-600' },
            { label: 'Rating', value: '4.8★', Icon: Star, color: 'text-amber-500' },
          ].map((stat) => (
            <div key={stat.label} className="card-mobile text-center py-4">
              <div className={`w-10 h-10 rounded-full ${stat.color.replace('text', 'bg').replace('600', '100')} flex items-center justify-center mx-auto mb-2`}>
                <stat.Icon size={20} className={stat.color} />
              </div>
              <div className="font-bold text-lg text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Selection */}
      <section className="px-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="mobile-heading-md text-foreground">Popular Brands</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Select your phone brand</p>
          </div>
          <button 
            onClick={() => navigate('/sell')}
            className="text-blue-600 text-sm font-semibold tap-target min-h-0 flex items-center gap-1"
          >
            View All <ArrowRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {brands.slice(0, 6).map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 pb-6">
        <h2 className="mobile-heading-md text-foreground mb-4">Why Choose Us?</h2>
        <div className="space-y-3">
          {[
            {
              Icon: Award,
              title: 'Best Price Guaranteed',
              desc: 'Get the highest value for your device',
              color: 'bg-blue-50 text-blue-600'
            },
            {
              Icon: Clock,
              title: 'Instant Payment',
              desc: 'Get paid within 24 hours',
              color: 'bg-green-50 text-green-600'
            },
            {
              Icon: BadgeCheck,
              title: 'Safe & Secure',
              desc: '100% data privacy guaranteed',
              color: 'bg-purple-50 text-purple-600'
            },
            {
              Icon: Truck,
              title: 'Free Doorstep Pickup',
              desc: 'We come to your location',
              color: 'bg-amber-50 text-amber-600'
            },
          ].map((item) => (
            <div key={item.title} className="card-mobile flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                <item.Icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm text-foreground mb-0.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 pb-6">
        <h2 className="mobile-heading-md text-foreground mb-4">How It Works</h2>
        <div className="space-y-3">
          {[
            { step: '1', title: 'Select Phone', desc: 'Choose brand & model', Icon: Smartphone },
            { step: '2', title: 'Get Quote', desc: 'Answer questions', Icon: CircleDollarSign },
            { step: '3', title: 'Schedule Pickup', desc: 'Free pickup', Icon: Package },
            { step: '4', title: 'Get Paid', desc: 'Instant payment', Icon: CheckCircle },
          ].map((item) => (
            <div key={item.step} className="card-mobile flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <item.Icon size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-blue-600">{item.step}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 pb-6">
        <h2 className="mobile-heading-md text-foreground mb-4">Customer Reviews</h2>
        <div className="space-y-3">
          {[
            { name: 'Rahul S.', rating: 5, comment: 'Quick and hassle-free! Got the best price.', time: '2 days ago' },
            { name: 'Priya P.', rating: 5, comment: 'Professional service. Instant payment.', time: '1 week ago' },
          ].map((review, idx) => (
            <div key={idx} className="card-mobile">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                  {review.name[0]}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-foreground">{review.name}</div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <BadgeCheck size={16} className="text-blue-600" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} />
                <span>{review.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white shadow-xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
          <div className="relative text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Sell?</h3>
            <p className="text-sm text-white/90 mb-4">
              Get your phone's value in under 2 minutes
            </p>
            <button 
              onClick={() => navigate('/sell')}
              className="w-full bg-white text-blue-600 font-bold py-3.5 px-6 rounded-xl tap-target active:scale-95 transition-all shadow-lg"
            >
              Start Selling Now
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
