export type IconKind =
  | "card"
  | "document"
  | "envelope"
  | "banner"
  | "box"
  | "bag"
  | "drink"
  | "apparel"
  | "tech"
  | "badge"
  | "trophy";

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: IconKind;
}

export interface ProductOption {
  label: string;
  values: string[];
}

export interface Product {
  slug: string;
  categorySlug: string;
  name: string;
  shortDesc: string;
  description: string;
  priceFrom: number;
  icon: IconKind;
  featured?: boolean;
  options: ProductOption[];
}

export interface CartItem {
  productSlug: string;
  name: string;
  unitPrice: number;
  quantity: number;
  selections: Record<string, string>;
  icon: IconKind;
}
