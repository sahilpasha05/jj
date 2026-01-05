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
      <PageTransition className="app-container">
        <Header />
        <div className="px-4 py-6">
          <p className="text-center text-muted-foreground">Brand not found</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="app-container">
      <Header />
      
      <div className="px-4 py-4">
        <BackButton to="/sell" />
      </div>

      <section className="page-content">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(225 73% 57% / 0.15) 0%, hsl(225 73% 57% / 0.05) 100%)' }}>
            <img 
              src={brand.image} 
              alt={brand.name}
              className="w-10 h-10 object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <h1 className="page-header-title text-2xl">{brand.name} Phones</h1>
            <p className="text-sm text-muted-foreground">{models.length} models available</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {models.map((model) => (
            <PhoneModelCard key={model.id} model={model} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
