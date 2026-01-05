import { Header } from '@/components/Header';
import { BrandCard } from '@/components/BrandCard';
import { brands } from '@/data/phones';
import { PageTransition } from '@/components/PageTransition';

export default function SellPage() {
  return (
    <PageTransition className="app-container">
      <Header />
      
      <section className="page-content">
        <div className="page-header">
          <h1 className="page-header-title">Sell Your Phone</h1>
          <p className="page-header-subtitle">Select your phone brand to get started</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
