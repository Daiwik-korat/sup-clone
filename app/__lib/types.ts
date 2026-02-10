export interface Product {
  name: string;
  imageUrl: string;
  price: number;
  tag: string;
}

export interface ProductBundle {
  products: Product[];
}

export interface FAQ  {
  answer: string;
  question: string;
};
