import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { BackButton } from '@/components/BackButton';
import { PhoneModelCard } from '@/components/PhoneModelCard';
import { PageTransition } from '@/components/PageTransition';
import { getModelsByBrand, getBrandById } from '@/data/phones';

export default function BrandModelsPage() {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = getBrandById(brandId || '');
  const models = getModelsByBrand(brandId || '');

  if (!brand) {
    return (
      <PageTransition className="w-full">
        <Header />
        <div className="px-4 py-6">
          <p className="text-center text-muted-foreground">Brand not found</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="w-full">
      <Header />
      
      <div className="px-4 py-3">
        <BackButton to="/sell" />
      </div>

      <section className="px-4 pb-8">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(135deg, hsl(225 73% 57% / 0.15) 0%, hsl(225 73% 57% / 0.05) 100%)' }}>
            <img 
              src={brand.image} 
              alt={brand.name}
              className="w-9 h-9 object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <h1 className="mobile-heading-md">{brand.name}</h1>
            <p className="mobile-text-sm text-muted-foreground">{models.length} models available</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {models.map((model) => (
            <PhoneModelCard key={model.id} model={model} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
