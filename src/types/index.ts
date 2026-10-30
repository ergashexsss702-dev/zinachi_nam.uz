export type CategoryType = 'zina' | 'mdf' | 'tobut';

export type Language = 'uz' | 'ru' | 'en';

export interface ProductItem {
  id: string;
  code: string;
  category: CategoryType;
  title: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  badge?: Record<Language, string>;
  features: Record<Language, string[]>;
  estimatedPriceRange?: string;
}

export interface WoodType {
  id: string;
  code: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  density: string;
  durability: Record<Language, string>;
  image: string;
}

export interface FinishColor {
  id: string;
  name: Record<Language, string>;
  hex: string;
  colorClass: string;
  image: string;
  textureNote?: Record<Language, string>;
}

export interface MDFGrade {
  id: string;
  name: Record<Language, string>;
  thickness: string;
  description: Record<Language, string>;
}

export interface CountryInfo {
  code: string;
  name: Record<Language, string>;
  dialCode: string;
  flag: string;
  placeholder: string;
}

export interface OrderFormData {
  category: CategoryType;
  // Step 1: Design selection
  designId: string;
  designCode: string;
  designTitle: string;
  designImage: string;

  // Step 2: Wood type or Material grade
  woodTypeId?: string;
  woodTypeName?: string;
  mdfGradeId?: string;
  mdfGradeName?: string;

  // Step 3: Colors and Finishes (up to 2 choices)
  selectedFinishes: string[];
  selectedFinishNames: string[];

  // Step 4: Dimensions & Quantity (for doors & caskets or custom stair dimensions)
  widthCm?: string;
  heightCm?: string;
  thicknessCm?: string;
  quantity: number;

  // Step 5: Customer Contact & Delivery Info
  customerName: string;
  phoneNumber: string;
  countryCode: string;
  deliveryAddress: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  notes: string;
}
