export interface PhoneBrand {
  id: string;
  name: string;
  logo: string;
}

export interface PhoneModel {
  id: string;
  brandId: string;
  name: string;
  image: string;
  basePrice: number;
  storage: string;
}

export const brands: PhoneBrand[] = [
  { id: 'apple', name: 'Apple', logo: '🍎' },
  { id: 'samsung', name: 'Samsung', logo: '📱' },
  { id: 'oneplus', name: 'OnePlus', logo: '1️⃣' },
  { id: 'xiaomi', name: 'Xiaomi', logo: '📲' },
  { id: 'vivo', name: 'Vivo', logo: '📳' },
  { id: 'oppo', name: 'Oppo', logo: '🔲' },
  { id: 'realme', name: 'Realme', logo: '⚡' },
];

export const phoneModels: PhoneModel[] = [
  // Apple
  { id: 'iphone15promax', brandId: 'apple', name: 'iPhone 15 Pro Max', image: '📱', basePrice: 85000, storage: '256GB' },
  { id: 'iphone15pro', brandId: 'apple', name: 'iPhone 15 Pro', image: '📱', basePrice: 75000, storage: '128GB' },
  { id: 'iphone15', brandId: 'apple', name: 'iPhone 15', image: '📱', basePrice: 55000, storage: '128GB' },
  { id: 'iphone14promax', brandId: 'apple', name: 'iPhone 14 Pro Max', image: '📱', basePrice: 70000, storage: '256GB' },
  { id: 'iphone14pro', brandId: 'apple', name: 'iPhone 14 Pro', image: '📱', basePrice: 60000, storage: '128GB' },
  { id: 'iphone14', brandId: 'apple', name: 'iPhone 14', image: '📱', basePrice: 45000, storage: '128GB' },
  { id: 'iphone13', brandId: 'apple', name: 'iPhone 13', image: '📱', basePrice: 35000, storage: '128GB' },
  { id: 'iphone12', brandId: 'apple', name: 'iPhone 12', image: '📱', basePrice: 25000, storage: '64GB' },
  { id: 'iphone11', brandId: 'apple', name: 'iPhone 11', image: '📱', basePrice: 18000, storage: '64GB' },
  
  // Samsung
  { id: 's24ultra', brandId: 'samsung', name: 'Galaxy S24 Ultra', image: '📱', basePrice: 75000, storage: '256GB' },
  { id: 's24plus', brandId: 'samsung', name: 'Galaxy S24+', image: '📱', basePrice: 55000, storage: '256GB' },
  { id: 's24', brandId: 'samsung', name: 'Galaxy S24', image: '📱', basePrice: 45000, storage: '128GB' },
  { id: 's23ultra', brandId: 'samsung', name: 'Galaxy S23 Ultra', image: '📱', basePrice: 60000, storage: '256GB' },
  { id: 's23', brandId: 'samsung', name: 'Galaxy S23', image: '📱', basePrice: 38000, storage: '128GB' },
  { id: 'zfold5', brandId: 'samsung', name: 'Galaxy Z Fold 5', image: '📱', basePrice: 90000, storage: '256GB' },
  { id: 'zflip5', brandId: 'samsung', name: 'Galaxy Z Flip 5', image: '📱', basePrice: 50000, storage: '256GB' },
  { id: 'a54', brandId: 'samsung', name: 'Galaxy A54', image: '📱', basePrice: 20000, storage: '128GB' },
  
  // OnePlus
  { id: '12pro', brandId: 'oneplus', name: 'OnePlus 12', image: '📱', basePrice: 45000, storage: '256GB' },
  { id: '11r', brandId: 'oneplus', name: 'OnePlus 11R', image: '📱', basePrice: 28000, storage: '128GB' },
  { id: 'nord3', brandId: 'oneplus', name: 'OnePlus Nord 3', image: '📱', basePrice: 22000, storage: '128GB' },
  { id: 'nord-ce3', brandId: 'oneplus', name: 'OnePlus Nord CE 3', image: '📱', basePrice: 16000, storage: '128GB' },
  { id: '10pro', brandId: 'oneplus', name: 'OnePlus 10 Pro', image: '📱', basePrice: 32000, storage: '128GB' },
  { id: '9pro', brandId: 'oneplus', name: 'OnePlus 9 Pro', image: '📱', basePrice: 25000, storage: '128GB' },
  
  // Xiaomi
  { id: '14ultra', brandId: 'xiaomi', name: 'Xiaomi 14 Ultra', image: '📱', basePrice: 55000, storage: '256GB' },
  { id: '14', brandId: 'xiaomi', name: 'Xiaomi 14', image: '📱', basePrice: 40000, storage: '256GB' },
  { id: '13pro', brandId: 'xiaomi', name: 'Xiaomi 13 Pro', image: '📱', basePrice: 35000, storage: '256GB' },
  { id: 'redminote13pro', brandId: 'xiaomi', name: 'Redmi Note 13 Pro+', image: '📱', basePrice: 18000, storage: '256GB' },
  { id: 'redminote13', brandId: 'xiaomi', name: 'Redmi Note 13', image: '📱', basePrice: 12000, storage: '128GB' },
  { id: 'poco-f5', brandId: 'xiaomi', name: 'Poco F5', image: '📱', basePrice: 20000, storage: '256GB' },
  
  // Vivo
  { id: 'x100pro', brandId: 'vivo', name: 'Vivo X100 Pro', image: '📱', basePrice: 50000, storage: '256GB' },
  { id: 'x90pro', brandId: 'vivo', name: 'Vivo X90 Pro', image: '📱', basePrice: 40000, storage: '256GB' },
  { id: 'v30pro', brandId: 'vivo', name: 'Vivo V30 Pro', image: '📱', basePrice: 28000, storage: '256GB' },
  { id: 'v29', brandId: 'vivo', name: 'Vivo V29', image: '📱', basePrice: 22000, storage: '128GB' },
  { id: 'y100', brandId: 'vivo', name: 'Vivo Y100', image: '📱', basePrice: 14000, storage: '128GB' },
  
  // Oppo
  { id: 'findx7ultra', brandId: 'oppo', name: 'Find X7 Ultra', image: '📱', basePrice: 55000, storage: '256GB' },
  { id: 'reno11pro', brandId: 'oppo', name: 'Oppo Reno 11 Pro', image: '📱', basePrice: 32000, storage: '256GB' },
  { id: 'reno11', brandId: 'oppo', name: 'Oppo Reno 11', image: '📱', basePrice: 25000, storage: '256GB' },
  { id: 'f25pro', brandId: 'oppo', name: 'Oppo F25 Pro', image: '📱', basePrice: 18000, storage: '128GB' },
  { id: 'a79', brandId: 'oppo', name: 'Oppo A79', image: '📱', basePrice: 12000, storage: '128GB' },
  
  // Realme
  { id: 'gt5pro', brandId: 'realme', name: 'Realme GT 5 Pro', image: '📱', basePrice: 38000, storage: '256GB' },
  { id: '12pro', brandId: 'realme', name: 'Realme 12 Pro+', image: '📱', basePrice: 26000, storage: '256GB' },
  { id: 'narzo70pro', brandId: 'realme', name: 'Narzo 70 Pro', image: '📱', basePrice: 16000, storage: '128GB' },
  { id: 'c67', brandId: 'realme', name: 'Realme C67', image: '📱', basePrice: 10000, storage: '128GB' },
  { id: '11pro', brandId: 'realme', name: 'Realme 11 Pro+', image: '📱', basePrice: 20000, storage: '256GB' },
];

export const getModelsByBrand = (brandId: string) => 
  phoneModels.filter(model => model.brandId === brandId);

export const getBrandById = (brandId: string) =>
  brands.find(brand => brand.id === brandId);
