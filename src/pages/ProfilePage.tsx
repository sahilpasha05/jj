import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { PageTransition } from '@/components/PageTransition';
import { Header } from '@/components/Header';
import { OrderCard } from '@/components/OrderCard';
import { User, MapPin, CreditCard, LogOut, ChevronRight, Package, AlertTriangle, Settings, HelpCircle, Bell, Shield, Star, FileText } from 'lucide-react';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { isLoggedIn, user, savedAddress, paymentMethod, orders, logout } = useApp();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutConfirm = () => {
    logout();
    setShowLogoutConfirm(false);
    navigate('/');
  };

  const menuItems = [
    { icon: Settings, label: 'Account Settings', path: '/settings' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: HelpCircle, label: 'Help & Support', path: '/support' },
    { icon: Shield, label: 'Privacy Policy', path: '/privacy' },
    { icon: FileText, label: 'Terms & Conditions', path: '/terms' },
    { icon: Star, label: 'Rate Us', path: '/rate' },
  ];

  return (
    <PageTransition className="w-full pb-20">
      <Header />

      <section className="px-4 py-6 space-y-4">
        {/* Profile Card */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <User size={32} className="text-primary-foreground" />
            </div>
            <div className="flex-1">
              {isLoggedIn && user ? (
                <>
                  <h2 className="text-lg font-bold text-foreground">
                    {user.name || 'User'}
                  </h2>
                  <p className="text-sm text-muted-foreground">+91 {user.mobile}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">Premium Member</span>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-bold text-foreground">Guest User</h2>
                  <p className="text-sm text-muted-foreground">Login to access all features</p>
                </>
              )}
            </div>
            {isLoggedIn && (
              <button className="text-sm font-medium text-primary tap-target">
                Edit
              </button>
            )}
          </div>

          {!isLoggedIn && (
            <button
              onClick={() => navigate('/login')}
              className="w-full mt-4 bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl tap-target haptic-button"
            >
              Login / Sign Up
            </button>
          )}
        </div>

        {/* Quick Stats */}
        {isLoggedIn && (
          <div className="grid grid-cols-3 gap-3">
            <div className="card-mobile text-center">
              <div className="font-bold text-xl text-foreground">{orders.length}</div>
              <div className="text-xs text-muted-foreground">Orders</div>
            </div>
            <div className="card-mobile text-center">
              <div className="font-bold text-xl text-green-600">₹{orders.reduce((sum, o) => sum + o.finalPrice, 0).toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Earned</div>
            </div>
            <div className="card-mobile text-center">
              <div className="font-bold text-xl text-foreground">{orders.filter(o => o.status === 'completed').length}</div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
          </div>
        )}

        {/* Saved Info Section */}
        {isLoggedIn && (
          <div className="space-y-3">
            {savedAddress && (
              <div className="card-elevated p-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">Saved Address</h3>
                    <p className="text-sm text-muted-foreground">{savedAddress.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{savedAddress.address}</p>
                    <p className="text-sm text-muted-foreground">{savedAddress.pincode}</p>
                  </div>
                  <button className="text-sm font-medium text-primary tap-target min-h-0">
                    Edit
                  </button>
                </div>
              </div>
            )}

            {paymentMethod && (
              <div className="card-elevated p-4">
                <div className="flex items-center gap-3">
                  <CreditCard size={20} className="text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Payment Method</h3>
                    <p className="text-sm text-muted-foreground capitalize">{paymentMethod}</p>
                  </div>
                  <button className="text-sm font-medium text-primary tap-target min-h-0">
                    Change
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Menu Items */}
        <div>
          <h2 className="mobile-heading-md mb-3">More Options</h2>
          <div className="card-elevated divide-y divide-border">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => console.log(`Navigate to ${item.path}`)}
                className="w-full flex items-center gap-3 p-4 tap-target hover:bg-accent/50 transition-colors first:rounded-t-3xl last:rounded-b-3xl"
              >
                <item.icon size={20} className="text-primary flex-shrink-0" />
                <span className="flex-1 text-left font-medium text-foreground">{item.label}</span>
                <ChevronRight size={20} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Order History */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="mobile-heading-md">Order History</h2>
            {orders.length > 3 && (
              <button className="text-sm font-semibold text-primary tap-target min-h-0">
                View All
              </button>
            )}
          </div>

          {orders.length > 0 ? (
            <div className="space-y-3">
              {orders.slice(0, 3).map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <div className="card-elevated p-8 text-center">
              <div className="empty-state-icon mx-auto">
                <Package size={32} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">No Orders Yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Start selling your old phone to see orders here
              </p>
              <button
                onClick={() => navigate('/sell')}
                className="bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl tap-target haptic-button"
              >
                Sell Now
              </button>
            </div>
          )}
        </div>

        {/* App Info */}
        <div className="card-mobile bg-muted/50 text-center">
          <p className="text-xs text-muted-foreground mb-1">SellKar v1.0.0</p>
          <p className="text-xs text-muted-foreground">Made with ❤️ in India</p>
        </div>

        {/* Logout */}
        {isLoggedIn && (
          <button
            onClick={() => setShowLogoutConfirm(true)}
            className="w-full p-4 rounded-2xl border-2 border-destructive/20 text-destructive font-semibold flex items-center justify-center gap-2 transition-all tap-target haptic-button"
          >
            <LogOut size={20} />
            Logout
          </button>
        )}
      </section>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-3xl p-6 max-w-sm w-full animate-scale-in">
            <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={32} className="text-destructive" />
            </div>
            <h2 className="text-xl font-bold text-foreground text-center mb-2">
              Logout?
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Are you sure you want to logout? Your session will end.
            </p>
            <div className="space-y-3">
              <button 
                onClick={handleLogoutConfirm} 
                className="w-full bg-destructive text-destructive-foreground font-semibold py-3 px-6 rounded-xl tap-target haptic-button"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="w-full py-3 rounded-xl font-semibold text-muted-foreground hover:bg-muted transition-colors tap-target"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
}
