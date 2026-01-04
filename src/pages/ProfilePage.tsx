import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { PageTransition } from '@/components/PageTransition';
import { Header } from '@/components/Header';
import { OrderCard } from '@/components/OrderCard';
import { User, MapPin, CreditCard, LogOut, ChevronRight, Package } from 'lucide-react';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { isLoggedIn, user, savedAddress, paymentMethod, orders, logout } = useApp();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <PageTransition className="app-container">
      <Header />

      <section className="px-4 py-6">
        {/* Profile Card */}
        <div className="card-elevated p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <User size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              {isLoggedIn && user ? (
                <>
                  <h2 className="text-lg font-bold text-foreground">
                    {user.name || 'User'}
                  </h2>
                  <p className="text-muted-foreground">+91 {user.mobile}</p>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-bold text-foreground">Guest User</h2>
                  <p className="text-muted-foreground">Login to access all features</p>
                </>
              )}
            </div>
            {isLoggedIn && (
              <button className="text-sm font-medium text-primary hover:underline">
                Edit
              </button>
            )}
          </div>

          {!isLoggedIn && (
            <button
              onClick={() => navigate('/login')}
              className="btn-primary mt-4"
            >
              Login / Sign Up
            </button>
          )}
        </div>

        {/* Saved Address */}
        {savedAddress && (
          <div className="card-elevated p-4 mb-4">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-primary mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Saved Address</h3>
                <p className="text-sm text-muted-foreground">{savedAddress.name}</p>
                <p className="text-sm text-muted-foreground">{savedAddress.address}</p>
                <p className="text-sm text-muted-foreground">{savedAddress.pincode}</p>
              </div>
              <button className="text-sm font-medium text-primary hover:underline">
                Edit
              </button>
            </div>
          </div>
        )}

        {/* Payment Preference */}
        {paymentMethod && (
          <div className="card-elevated p-4 mb-6">
            <div className="flex items-center gap-3">
              <CreditCard size={20} className="text-primary" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Payment Preference</h3>
                <p className="text-sm text-muted-foreground capitalize">{paymentMethod}</p>
              </div>
              <button className="text-sm font-medium text-primary hover:underline">
                Change
              </button>
            </div>
          </div>
        )}

        {/* Order History */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Package size={20} className="text-primary" />
            <h2 className="text-lg font-bold text-foreground">Order History</h2>
          </div>

          {orders.length > 0 ? (
            <div className="space-y-3">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <Package size={32} className="text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">No Orders Yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Start selling your old phone to see orders here
              </p>
              <button
                onClick={() => navigate('/sell')}
                className="btn-cta"
              >
                Sell Now
              </button>
            </div>
          )}
        </div>

        {/* Logout */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="w-full p-4 rounded-2xl border-2 border-destructive/20 text-destructive font-semibold flex items-center justify-center gap-2 hover:bg-destructive/5 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        )}
      </section>
    </PageTransition>
  );
}
