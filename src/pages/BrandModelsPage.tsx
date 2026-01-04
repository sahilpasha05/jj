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

      <section className="px-4 pb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-3xl">
            {brand.logo}
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">{brand.name} Phones</h1>
            <p className="text-sm text-muted-foreground">{models.length} models available</p>
          </div>
        </div>

        <div className="space-y-3">
          {models.map((model) => (
            <PhoneModelCard key={model.id} model={model} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
