import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { BackButton } from '@/components/BackButton';
import { ConditionOption } from '@/components/ConditionOption';
import { PriceDisplay } from '@/components/PriceDisplay';
import { PageTransition } from '@/components/PageTransition';
import { Smartphone, AlertCircle } from 'lucide-react';

const conditionSteps = {
  screen: {
    title: 'Screen Condition',
    subtitle: 'How is your phone screen?',
    nextStep: '/condition/body',
    prevStep: null,
    options: [
      { id: 'perfect', title: 'Perfect', description: 'No scratches, no cracks', icon: 'Sparkles' },
      { id: 'minor', title: 'Minor Scratches', description: 'Light scratches, barely visible', icon: 'Search' },
      { id: 'cracked', title: 'Cracked', description: 'Visible cracks but working', icon: 'AlertTriangle' },
      { id: 'broken', title: 'Broken Display', description: 'Display not working properly', icon: 'XCircle' },
    ],
  },
  body: {
    title: 'Body Condition',
    subtitle: 'How is your phone body?',
    nextStep: '/condition/functional',
    prevStep: '/condition/screen',
    options: [
      { id: 'perfect', title: 'Perfect', description: 'No dents, no scratches', icon: 'Sparkles' },
      { id: 'minor', title: 'Minor Wear', description: 'Light scratches or small marks', icon: 'Search' },
      { id: 'major', title: 'Major Wear', description: 'Visible dents or scratches', icon: 'AlertTriangle' },
      { id: 'broken', title: 'Damaged', description: 'Bent or broken parts', icon: 'XCircle' },
    ],
  },
  functional: {
    title: 'Functional Condition',
    subtitle: 'Is everything working?',
    nextStep: '/final-price',
    prevStep: '/condition/body',
    options: [
      { id: 'working', title: 'All Working', description: 'Camera, speaker, buttons all work', icon: 'CheckCircle' },
      { id: 'partial', title: 'Partial Issues', description: 'Some features not working', icon: 'AlertTriangle' },
      { id: 'notWorking', title: 'Major Issues', description: 'Multiple features not working', icon: 'XCircle' },
    ],
  },
};

export default function ConditionPage() {
  const { step } = useParams<{ step: 'screen' | 'body' | 'functional' }>();
  const navigate = useNavigate();
  const { selectedPhone, conditionAnswers, setConditionAnswer, calculatePrice } = useApp();

  if (!step || !conditionSteps[step]) {
    navigate('/sell');
    return null;
  }

  if (!selectedPhone) {
    navigate('/sell');
    return null;
  }

  const currentStep = conditionSteps[step];
  const currentAnswer = conditionAnswers[step];

  const handleSelect = (optionId: string) => {
    setConditionAnswer(step, optionId);
  };

  const handleContinue = () => {
    if (!currentAnswer) {
      return;
    }
    navigate(currentStep.nextStep);
  };

  const handleBack = () => {
    if (currentStep.prevStep) {
      navigate(currentStep.prevStep);
    } else {
      navigate(`/sell/${selectedPhone?.brand.toLowerCase()}`);
    }
  };

  const progress = step === 'screen' ? 33 : step === 'body' ? 66 : 100;

  return (
    <PageTransition className="app-container pb-32">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card/98 backdrop-blur-2xl border-b border-border px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <BackButton to={currentStep.prevStep || `/sell/${selectedPhone?.brand.toLowerCase()}`} />
          <PriceDisplay price={calculatePrice()} label="Current Quote" />
        </div>
        
        {/* Progress Bar */}
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-hero transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Phone Info */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-4 p-4 rounded-2xl border border-primary/10" style={{ background: 'linear-gradient(135deg, hsl(225 73% 57% / 0.08) 0%, hsl(225 73% 57% / 0.03) 100%)' }}>
          <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
            <Smartphone size={24} className="text-primary" />
          </div>
          <div>
            <p className="font-bold text-foreground text-base">{selectedPhone.model}</p>
            <p className="text-sm text-muted-foreground">{selectedPhone.brand}</p>
          </div>
        </div>
      </div>

      {/* Question */}
      <section className="page-content">
        <div className="space-y-2 mb-8">
          <h1 className="page-header-title">{currentStep.title}</h1>
          <p className="page-header-subtitle">{currentStep.subtitle}</p>
        </div>

        <div className="space-y-3">
          {currentStep.options.map((option) => (
            <ConditionOption
              key={option.id}
              id={option.id}
              title={option.title}
              description={option.description}
              iconName={option.icon}
              selected={currentAnswer === option.id}
              onSelect={() => handleSelect(option.id)}
            />
          ))}
        </div>

        {/* Selection Guidance */}
        {!currentAnswer && (
          <div className="flex items-center gap-3 mt-8 p-4 rounded-xl bg-secondary/10 text-secondary">
            <AlertCircle size={20} className="flex-shrink-0" />
            <p className="text-sm font-medium">Please select an option to continue</p>
          </div>
        )}
      </section>

      {/* Sticky CTA */}
      <div className="sticky-bottom max-w-md mx-auto">
        <button
          onClick={handleContinue}
          disabled={!currentAnswer}
          className={`btn-cta ${!currentAnswer ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Continue
        </button>
      </div>
    </PageTransition>
  );
}
