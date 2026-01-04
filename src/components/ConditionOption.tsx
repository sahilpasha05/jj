import { Check } from 'lucide-react';

interface ConditionOptionProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onSelect: () => void;
}

export function ConditionOption({ 
  title, 
  description, 
  icon, 
  selected, 
  onSelect 
}: ConditionOptionProps) {
  return (
    <button
      onClick={onSelect}
      className={`condition-option w-full text-left flex items-start gap-4 ${selected ? 'selected' : ''}`}
    >
      <span className="text-3xl">{icon}</span>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
      </div>
      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
        selected 
          ? 'bg-primary border-primary' 
          : 'border-border'
      }`}>
        {selected && <Check size={14} className="text-primary-foreground" />}
      </div>
    </button>
  );
}
