import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  to?: string;
  label?: string;
}

export function BackButton({ to, label }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
    >
      <ArrowLeft size={20} />
      {label && <span>{label}</span>}
    </button>
  );
}
