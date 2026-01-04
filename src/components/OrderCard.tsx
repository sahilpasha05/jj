import { Smartphone, ChevronRight } from 'lucide-react';

interface OrderCardProps {
  order: {
    id: string;
    phone: {
      brand: string;
      model: string;
    };
    finalPrice: number;
    status: string;
    date: string;
  };
}

export function OrderCard({ order }: OrderCardProps) {
  const statusColor = order.status === 'Completed' 
    ? 'bg-success/10 text-success' 
    : 'bg-secondary/10 text-secondary';

  return (
    <div className="card-elevated flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
        <Smartphone size={20} className="text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground truncate">{order.phone.model}</h4>
        <p className="text-sm text-muted-foreground">{order.phone.brand}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColor}`}>
            {order.status}
          </span>
          <span className="text-xs text-muted-foreground">{order.date}</span>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-primary">₹{order.finalPrice.toLocaleString('en-IN')}</p>
        <ChevronRight size={18} className="text-muted-foreground ml-auto" />
      </div>
    </div>
  );
}
