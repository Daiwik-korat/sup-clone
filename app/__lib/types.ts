export interface Product {
  name: string;
  imageUrl: string;
  price: number;
  tag: string;
}

export interface ProductBundle {
  products: Product[];
}

export interface FAQ {
  answer: string;
  question: string;
}

export interface GroupedData {
  categoryName: string;
  products: Product[];
}

export interface Review {
  content: string;
  createdAt: Date;
  isVerified: string;
  customerName: string;
  title: string;
  rating: number;
}
