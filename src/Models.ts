export interface Order {
  id: number;
  orderAt: Date;
  amount: number;
  shippings: Shipping[];
}
export interface OrderResponse {
  id: number;
  orderAt: string;
  amount: number;
  shippings: Shipping[];
}

export interface OrderProduct {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  stock: Stock;
}

export interface Stock {
  color: string;
  size: string;
  quantity: number;
}

export interface Shipping {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  message: string;
  products: OrderProduct[];
}
