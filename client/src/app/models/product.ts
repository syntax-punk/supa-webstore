export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercent: number;
  imageUrl: string;
  type: string;
  syrupBrand: string;
  ingredients: string[];
  quantityInFridge: number;
}