
/**
 * Product interface - กำหนดโครงสร้างข้อมูลสินค้า
 */
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: number;
  rating: number;
  reviews: number;
}

/**
 * CartItem interface - กำหนดโครงสร้างข้อมูลสินค้าในตะกร้า
 */
export interface CartItem extends Product {
  quantity: number;
}