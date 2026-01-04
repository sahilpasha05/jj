import { Truck, Zap, Shield } from 'lucide-react';

const badges = [
  { icon: Truck, text: 'Free Pickup' },
  { icon: Zap, text: 'Instant Payment' },
  { icon: Shield, text: 'Verified Professionals' },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {badges.map(({ icon: Icon, text }) => (
        <div key={text} className="trust-badge">
          <Icon size={16} />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
