import type { LucideIcon } from 'lucide-react';
import { Apple, Smartphone, Zap, CircleDot, Box, Hexagon, Triangle } from 'lucide-react';

export interface PhoneBrand {
  id: string;
  name: string;
  Icon: LucideIcon;
  image: string;
}

export interface PhoneModel {
  id: string;
  brandId: string;
  name: string;
  basePrice: number;
  storage: string;
  image?: string;
}

export const brands: PhoneBrand[] = [
  { id: 'apple', name: 'Apple', Icon: Apple, image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0001_Apple.jpg' },
  { id: 'samsung', name: 'Samsung', Icon: Smartphone, image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0011_Samsung.jpg' },
  { id: 'oneplus', name: 'OnePlus', Icon: Zap, image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0014_OnePlus.jpg' },
  { id: 'xiaomi', name: 'Xiaomi', Icon: CircleDot, image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0003_Xiaomi.jpg' },
  { id: 'vivo', name: 'Vivo', Icon: Box, image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0006_Vivo.jpg' },
  { id: 'oppo', name: 'Oppo', Icon: Hexagon, image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0007_Oppo.jpg' },
  { id: 'realme', name: 'Realme', Icon: Triangle, image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0002_Realme.jpg' },
];

export const phoneModels: PhoneModel[] = [
  // Apple
  { id: 'iphone15promax', brandId: 'apple', name: 'iPhone 15 Pro Max', basePrice: 85000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0036_iPhone_15_Pro_Max.jpg' },
  { id: 'iphone15pro', brandId: 'apple', name: 'iPhone 15 Pro', basePrice: 75000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0035_iPhone_15_Pro.jpg' },
  { id: 'iphone15', brandId: 'apple', name: 'iPhone 15', basePrice: 55000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0033_iPhone_15.jpg' },
  { id: 'iphone14promax', brandId: 'apple', name: 'iPhone 14 Pro Max', basePrice: 70000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0032_iPhone_14_Pro_Max.jpg' },
  { id: 'iphone14pro', brandId: 'apple', name: 'iPhone 14 Pro', basePrice: 60000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0031_iPhone_14_Pro.jpg' },
  { id: 'iphone14', brandId: 'apple', name: 'iPhone 14', basePrice: 45000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0029_iPhone_14.jpg' },
  { id: 'iphone13', brandId: 'apple', name: 'iPhone 13', basePrice: 35000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0025_iPhone_13.jpg' },
  { id: 'iphone12', brandId: 'apple', name: 'iPhone 12', basePrice: 25000, storage: '64GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0021_iPhone_12.jpg' },
  { id: 'iphone11', brandId: 'apple', name: 'iPhone 11', basePrice: 18000, storage: '64GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0018_iPhone_11.jpg' },
  
  // Samsung
  { id: 's24ultra', brandId: 'samsung', name: 'Galaxy S24 Ultra', basePrice: 75000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0121_Samsung_Galaxy_S24_Ultra_5G.jpg' },
  { id: 's24plus', brandId: 'samsung', name: 'Galaxy S24+', basePrice: 55000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0120_Samsung_Galaxy_S24_Plus_5G.jpg' },
  { id: 's24', brandId: 'samsung', name: 'Galaxy S24', basePrice: 45000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0118_Samsung_Galaxy_S24_5G.jpg' },
  { id: 's23ultra', brandId: 'samsung', name: 'Galaxy S23 Ultra', basePrice: 60000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0117_Samsung_Galaxy_S23_Ultra_5G.jpg' },
  { id: 's23', brandId: 'samsung', name: 'Galaxy S23', basePrice: 38000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0114_Samsung_Galaxy_S23_5G.jpg' },
  { id: 'zfold5', brandId: 'samsung', name: 'Galaxy Z Fold 5', basePrice: 90000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0137_Samsung_Galaxy_Z_Fold_5.jpg' },
  { id: 'zflip5', brandId: 'samsung', name: 'Galaxy Z Flip 5', basePrice: 50000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0132_Samsung_Galaxy_Z_Flip_5.jpg' },
  { id: 'a54', brandId: 'samsung', name: 'Galaxy A54', basePrice: 20000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0031_Samsung_Galaxy_A54_5G.jpg' },
  
  // OnePlus
  { id: '12pro', brandId: 'oneplus', name: 'OnePlus 12', basePrice: 45000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0053_OnePlus_12_5G.jpg' },
  { id: '11r', brandId: 'oneplus', name: 'OnePlus 11R', basePrice: 28000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0052_OnePlus_11R_5G.jpg' },
  { id: 'nord3', brandId: 'oneplus', name: 'OnePlus Nord 3', basePrice: 22000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0080_OnePlus_Nord_3_5G.jpg' },
  { id: 'nord-ce3', brandId: 'oneplus', name: 'OnePlus Nord CE 3', basePrice: 16000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0085_OnePlus_Nord_CE_3_5G.jpg' },
  { id: '10pro', brandId: 'oneplus', name: 'OnePlus 10 Pro', basePrice: 32000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0048_OnePlus_10_Pro_5G.jpg' },
  { id: '9pro', brandId: 'oneplus', name: 'OnePlus 9 Pro', basePrice: 25000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0074_OnePlus_9_Pro.jpg' },
  
  // Xiaomi
  { id: '14ultra', brandId: 'xiaomi', name: 'Xiaomi 14 Ultra', basePrice: 55000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0308_Xiaomi_14_Ultra.jpg' },
  { id: '14', brandId: 'xiaomi', name: 'Xiaomi 14', basePrice: 40000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0306_Xiaomi_14.jpg' },
  { id: '13pro', brandId: 'xiaomi', name: 'Xiaomi 13 Pro', basePrice: 35000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0305_Xiaomi_13_Pro_5G.jpg' },
  { id: 'redminote13pro', brandId: 'xiaomi', name: 'Redmi Note 13 Pro+', basePrice: 18000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0296_Redmi_Note_13_Pro_Plus_5G.jpg' },
  { id: 'redminote13', brandId: 'xiaomi', name: 'Redmi Note 13', basePrice: 12000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0294_Redmi_Note_13_5G.jpg' },
  { id: 'poco-f5', brandId: 'xiaomi', name: 'Poco F5', basePrice: 20000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0012_Poco_F5_5G.jpg' },
  
  // Vivo
  { id: 'x100pro', brandId: 'vivo', name: 'Vivo X100 Pro', basePrice: 50000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0183_Vivo_X100_Pro.jpg' },
  { id: 'x90pro', brandId: 'vivo', name: 'Vivo X90 Pro', basePrice: 40000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0202_Vivo_X90_pro.jpg' },
  { id: 'v30pro', brandId: 'vivo', name: 'Vivo V30 Pro', basePrice: 28000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0176_VIVO_V30_Pro_5G.jpg' },
  { id: 'v29', brandId: 'vivo', name: 'Vivo V29', basePrice: 22000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0172_VIVO_V29.jpg' },
  { id: 'y100', brandId: 'vivo', name: 'Vivo Y100', basePrice: 14000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0211_Vivo_Y100.jpg' },
  
  // Oppo
  { id: 'findx7ultra', brandId: 'oppo', name: 'Find X7 Ultra', basePrice: 55000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0172_Oppo_Find_X8_5G.jpg' },
  { id: 'reno11pro', brandId: 'oppo', name: 'Oppo Reno 11 Pro', basePrice: 32000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0187_Oppo_Reno_11_Pro_5G.jpg' },
  { id: 'reno11', brandId: 'oppo', name: 'Oppo Reno 11', basePrice: 25000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0186_Oppo_Reno_11_5G.jpg' },
  { id: 'f25pro', brandId: 'oppo', name: 'Oppo F25 Pro', basePrice: 18000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0151_Oppo_F25_pro_5G.jpg' },
  { id: 'a79', brandId: 'oppo', name: 'Oppo A79', basePrice: 12000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0129_Oppo_A79_5G.jpg' },
  
  // Realme
  { id: 'gt5pro', brandId: 'realme', name: 'Realme GT 5 Pro', basePrice: 38000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0120_Realme_GT_5G.jpg' },
  { id: '12pro', brandId: 'realme', name: 'Realme 12 Pro+', basePrice: 26000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0052_Realme_12_Pro_Plus_5G.jpg' },
  { id: 'narzo70pro', brandId: 'realme', name: 'Narzo 70 Pro', basePrice: 16000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0147_Realme_Narzo_70_Pro_5G.jpg' },
  { id: 'c67', brandId: 'realme', name: 'Realme C67', basePrice: 10000, storage: '128GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0115_Realme_C67_5G.jpg' },
  { id: '11pro', brandId: 'realme', name: 'Realme 11 Pro+', basePrice: 20000, storage: '256GB', image: 'https://raw.githubusercontent.com/Sahil098n9ph/phone-model-images/main/0047_Realme_11_Pro_Plus_5G.jpg' },
];

export const getModelsByBrand = (brandId: string) => 
  phoneModels.filter(model => model.brandId === brandId);

export const getBrandById = (brandId: string) =>
  brands.find(brand => brand.id === brandId);
