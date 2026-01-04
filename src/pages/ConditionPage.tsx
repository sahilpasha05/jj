import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { BackButton } from '@/components/BackButton';
import { ConditionOption } from '@/components/ConditionOption';
import { PriceDisplay } from '@/components/PriceDisplay';
import { PageTransition } from '@/components/PageTransition';

const conditionSteps = {
  screen: {
    title: 'Screen Condition',
    subtitle: 'How is your phone screen?',
    nextStep: '/condition/body',
    prevStep: null,
    options: [
      { id: 'perfect', title: 'Perfect', description: 'No scratches, no cracks', icon: '✨' },
      { id: 'minor', title: 'Minor Scratches', description: 'Light scratches, barely visible', icon: '🔍' },
      { id: 'cracked', title: 'Cracked', description: 'Visible cracks but working', icon: '💔' },
      { id: 'broken', title: 'Broken Display', description: 'Display not working properly', icon: '❌' },
    ],
  },
  body: {
    title: 'Body Condition',
    subtitle: 'How is your phone body?',
    nextStep: '/condition/functional',
    prevStep: '/condition/screen',
    options: [
      { id: 'perfect', title: 'Perfect', description: 'No dents, no scratches', icon: '✨' },
      { id: 'minor', title: 'Minor Wear', description: 'Light scratches or small marks', icon: '🔍' },
      { id: 'major', title: 'Major Wear', description: 'Visible dents or scratches', icon: '⚠️' },
      { id: 'broken', title: 'Damaged', description: 'Bent or broken parts', icon: '❌' },
    ],
  },
  functional: {
    title: 'Functional Condition',
    subtitle: 'Is everything working?',
    nextStep: '/final-price',
    prevStep: '/condition/body',
    options: [
      { id: 'working', title: 'All Working', description: 'Camera, speaker, buttons all work', icon: '✅' },
      { id: 'partial', title: 'Partial Issues', description: 'Some features not working', icon: '⚠️' },
      { id: 'notWorking', title: 'Major Issues', description: 'Multiple features not working', icon: '❌' },
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
    if (currentAnswer) {
      navigate(currentStep.nextStep);
    }
  };

  const progress = step === 'screen' ? 33 : step === 'body' ? 66 : 100;

  return (
    <PageTransition className="app-container pb-32">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <BackButton to={currentStep.prevStep || `/sell/${selectedPhone?.brand.toLowerCase()}`} />
          <PriceDisplay price={calculatePrice()} label="Current Quote" />
        </div>
        
        {/* Progress Bar */}
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Phone Info */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
          <span className="text-2xl">{selectedPhone.image}</span>
          <div>
            <p className="font-semibold text-foreground">{selectedPhone.model}</p>
            <p className="text-sm text-muted-foreground">{selectedPhone.brand}</p>
          </div>
        </div>
      </div>

      {/* Question */}
      <section className="px-4 pb-6">
        <h1 className="text-xl font-bold text-foreground mb-1">{currentStep.title}</h1>
        <p className="text-muted-foreground mb-6">{currentStep.subtitle}</p>

        <div className="space-y-3">
          {currentStep.options.map((option) => (
            <ConditionOption
              key={option.id}
              id={option.id}
              title={option.title}
              description={option.description}
              icon={option.icon}
              selected={currentAnswer === option.id}
              onSelect={() => handleSelect(option.id)}
            />
          ))}
        </div>
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
