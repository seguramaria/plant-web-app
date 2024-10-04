export type Data = {
  name: string;
  icon: string;
  products: Product[];
};

export type Product = {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  quantity?: number;
};
