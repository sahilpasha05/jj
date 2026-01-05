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
    <PageTransition className="w-full flex flex-col min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <BackButton to={currentStep.prevStep || `/sell/${selectedPhone?.brand.toLowerCase()}`} />
            <div className="text-right">
              <div className="text-xs text-gray-500 font-medium mb-0.5">Current Quote</div>
              <PriceDisplay price={calculatePrice()} label="" />
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Phone Info */}
      <div className="px-4 py-4 bg-gradient-to-br from-blue-50 to-blue-50/50">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-blue-100 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Smartphone size={22} className="text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-base truncate">{selectedPhone.model}</p>
            <p className="text-sm text-gray-600">{selectedPhone.brand}</p>
          </div>
        </div>
      </div>

      {/* Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-6 pb-32">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{currentStep.title}</h1>
            <p className="text-sm text-gray-600">{currentStep.subtitle}</p>
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
            <div className="flex items-start gap-3 mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
              <AlertCircle size={20} className="flex-shrink-0 text-blue-600 mt-0.5" />
              <p className="text-sm text-blue-900 font-medium">Please select an option to continue</p>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Bottom Button */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="px-4 py-4 pb-safe">
          <button
            onClick={handleContinue}
            disabled={!currentAnswer}
            className={`w-full py-4 px-6 rounded-xl font-bold text-base text-white transition-all ${
              !currentAnswer 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30 active:scale-[0.98]'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </PageTransition>
  );
}
