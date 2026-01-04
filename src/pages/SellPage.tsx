import { Header } from '@/components/Header';
import { BrandCard } from '@/components/BrandCard';
import { brands } from '@/data/phones';
import { PageTransition } from '@/components/PageTransition';

export default function SellPage() {
  return (
    <PageTransition className="app-container">
      <Header />
      
      <section className="px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Sell Your Phone</h1>
        <p className="text-muted-foreground mb-6">Select your phone brand to get started</p>
        
        <div className="grid grid-cols-3 gap-3">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
