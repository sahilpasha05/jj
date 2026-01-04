import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PhoneSelection {
  brand: string;
  model: string;
  basePrice: number;
}

interface ConditionAnswers {
  screen: string | null;
  body: string | null;
  functional: string | null;
}

interface Address {
  name: string;
  mobile: string;
  address: string;
  pincode: string;
}

interface Order {
  id: string;
  phone: PhoneSelection;
  finalPrice: number;
  paymentMethod: string;
  address: Address;
  status: 'Pickup Scheduled' | 'Completed';
  date: string;
}

interface User {
  mobile: string;
  name: string;
}

interface AppContextType {
  // Auth
  isLoggedIn: boolean;
  user: User | null;
  login: (mobile: string) => void;
  logout: () => void;
  updateUserName: (name: string) => void;

  // Phone Selection
  selectedPhone: PhoneSelection | null;
  setSelectedPhone: (phone: PhoneSelection | null) => void;

  // Condition Flow
  conditionAnswers: ConditionAnswers;
  setConditionAnswer: (step: keyof ConditionAnswers, value: string) => void;
  resetConditionAnswers: () => void;
  calculatePrice: () => number;

  // Address
  savedAddress: Address | null;
  setSavedAddress: (address: Address) => void;

  // Payment
  paymentMethod: string | null;
  setPaymentMethod: (method: string) => void;

  // Orders
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'date'>) => void;

  // Reset flow
  resetFlow: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  USER: 'sellkar_user',
  ADDRESS: 'sellkar_address',
  ORDERS: 'sellkar_orders',
  PAYMENT: 'sellkar_payment',
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [selectedPhone, setSelectedPhone] = useState<PhoneSelection | null>(null);
  const [conditionAnswers, setConditionAnswers] = useState<ConditionAnswers>({
    screen: null,
    body: null,
    functional: null,
  });
  const [savedAddress, setSavedAddressState] = useState<Address | null>(null);
  const [paymentMethod, setPaymentMethodState] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEYS.USER);
    const storedAddress = localStorage.getItem(STORAGE_KEYS.ADDRESS);
    const storedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
    const storedPayment = localStorage.getItem(STORAGE_KEYS.PAYMENT);

    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setIsLoggedIn(true);
    }
    if (storedAddress) setSavedAddressState(JSON.parse(storedAddress));
    if (storedOrders) setOrders(JSON.parse(storedOrders));
    if (storedPayment) setPaymentMethodState(storedPayment);
  }, []);

  const login = (mobile: string) => {
    const newUser = { mobile, name: '' };
    setUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.ADDRESS);
    localStorage.removeItem(STORAGE_KEYS.PAYMENT);
    setSavedAddressState(null);
    setPaymentMethodState(null);
  };

  const updateUserName = (name: string) => {
    if (user) {
      const updated = { ...user, name };
      setUser(updated);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updated));
    }
  };

  const setConditionAnswer = (step: keyof ConditionAnswers, value: string) => {
    setConditionAnswers(prev => ({ ...prev, [step]: value }));
  };

  const resetConditionAnswers = () => {
    setConditionAnswers({ screen: null, body: null, functional: null });
  };

  const calculatePrice = () => {
    if (!selectedPhone) return 0;
    let price = selectedPhone.basePrice;
    
    // Screen condition multiplier
    if (conditionAnswers.screen === 'perfect') price *= 1;
    else if (conditionAnswers.screen === 'minor') price *= 0.85;
    else if (conditionAnswers.screen === 'cracked') price *= 0.6;
    else if (conditionAnswers.screen === 'broken') price *= 0.3;

    // Body condition multiplier
    if (conditionAnswers.body === 'perfect') price *= 1;
    else if (conditionAnswers.body === 'minor') price *= 0.9;
    else if (conditionAnswers.body === 'major') price *= 0.75;
    else if (conditionAnswers.body === 'broken') price *= 0.5;

    // Functional condition multiplier
    if (conditionAnswers.functional === 'working') price *= 1;
    else if (conditionAnswers.functional === 'partial') price *= 0.7;
    else if (conditionAnswers.functional === 'notWorking') price *= 0.4;

    return Math.round(price);
  };

  const setSavedAddress = (address: Address) => {
    setSavedAddressState(address);
    localStorage.setItem(STORAGE_KEYS.ADDRESS, JSON.stringify(address));
  };

  const setPaymentMethod = (method: string) => {
    setPaymentMethodState(method);
    localStorage.setItem(STORAGE_KEYS.PAYMENT, method);
  };

  const addOrder = (order: Omit<Order, 'id' | 'date'>) => {
    const newOrder: Order = {
      ...order,
      id: `ORD${Date.now()}`,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    };
    const updated = [newOrder, ...orders];
    setOrders(updated);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(updated));
  };

  const resetFlow = () => {
    setSelectedPhone(null);
    resetConditionAnswers();
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
        updateUserName,
        selectedPhone,
        setSelectedPhone,
        conditionAnswers,
        setConditionAnswer,
        resetConditionAnswers,
        calculatePrice,
        savedAddress,
        setSavedAddress,
        paymentMethod,
        setPaymentMethod,
        orders,
        addOrder,
        resetFlow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
