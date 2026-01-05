import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon, title, description, actionButton }: EmptyStateProps) {
  return (
    <div className="empty-state-container">
      <div className="empty-state-icon">
        <Icon size={40} />
      </div>
      <h3 className="mobile-heading-md text-foreground mb-2">{title}</h3>
      <p className="mobile-text-sm text-muted-foreground mb-6">{description}</p>
      {actionButton && (
        <button
          onClick={actionButton.onClick}
          className="btn-cta max-w-xs"
        >
          {actionButton.label}
        </button>
      )}
    </div>
  );
}
