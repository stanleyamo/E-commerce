export interface Product {
  id: number | string;
  name: string;
  category: string;
  price: number;       // base price
  image: string;       // main image
  images?: string[];   // additional images for carousel
  description?: string;
  sizes?: string[];    // available sizes
  sizePrice?: Record<string, number>; // extra price per size (optional)
}

// Item in cart
export interface CartItem extends Product {
  size: string;       // selected size
  quantity: number;   // quantity of this item in cart
}
