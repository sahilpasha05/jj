import { Check, Sparkles, Search, AlertTriangle, XCircle, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Search,
  AlertTriangle,
  XCircle,
  CheckCircle,
};

interface ConditionOptionProps {
  id: string;
  title: string;
  description: string;
  iconName: string;
  selected: boolean;
  onSelect: () => void;
}

export function ConditionOption({ 
  title, 
  description, 
  iconName, 
  selected, 
  onSelect 
}: ConditionOptionProps) {
  const IconComponent = iconMap[iconName] || Sparkles;

  return (
    <button
      onClick={onSelect}
      className={`condition-option w-full text-left flex items-start gap-4 ${selected ? 'selected' : ''}`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        selected ? 'bg-primary/20' : 'bg-muted'
      }`}>
        <IconComponent size={22} className={selected ? 'text-primary' : 'text-muted-foreground'} />
      </div>
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
