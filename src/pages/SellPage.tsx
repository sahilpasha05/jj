import { Header } from '@/components/Header';
import { BrandCard } from '@/components/BrandCard';
import { brands } from '@/data/phones';
import { PageTransition } from '@/components/PageTransition';
import { TrendingUp, Shield, Zap, Search } from 'lucide-react';
import { useState } from 'react';

export default function SellPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredBrands = brands.filter(brand => 
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageTransition className="w-full pb-20">
      <Header />
      
      <section className="px-4 py-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="mobile-heading-lg mb-2">Sell Your Phone</h1>
          <p className="mobile-text-sm text-muted-foreground">
            Select your phone brand to get an instant quote
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 tap-target"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="card-mobile text-center">
            <TrendingUp size={20} className="text-green-600 mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">Best Prices</div>
          </div>
          <div className="card-mobile text-center">
            <Shield size={20} className="text-blue-600 mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">100% Safe</div>
          </div>
          <div className="card-mobile text-center">
            <Zap size={20} className="text-yellow-600 mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">2 Min Quote</div>
          </div>
        </div>

        {/* Brands Grid */}
        <div>
          <h2 className="mobile-heading-md mb-4">
            {searchQuery ? `Results (${filteredBrands.length})` : 'All Brands'}
          </h2>
          
          {filteredBrands.length > 0 ? (
            <div className="grid grid-cols-3 gap-3">
              {filteredBrands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          ) : (
            <div className="empty-state-container">
              <div className="empty-state-icon">
                <Search size={32} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">No brands found</h3>
              <p className="text-sm text-muted-foreground">
                Try searching with a different name
              </p>
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="card-mobile bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
          <div className="flex items-center gap-3">
            <Shield size={28} className="text-primary flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-foreground mb-1">
                Secure & Trusted
              </h3>
              <p className="text-xs text-muted-foreground">
                Your data is completely wiped before recycling
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
