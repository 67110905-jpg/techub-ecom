import type { Product } from '../types';

/**
 * Mock Data สำหรับสินค้าอุปกรณ์คอมพิวเตอร์
 * ใช้สำหรับแสดงผลในเว็บไซต์
 */
export const products: Product[] = [
  {
    id: 1,
    name: "Gaming Keyboard RGB",
    price: 1190,
    category: "Keyboard",
    image: "https://images.unsplash.com/photo-1618051510237-5182d6dc332c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "คีย์บอร์ดเกมมิ่งระดับมืออาชีพ พร้อม RGB Backlight",
    stock: 15,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 950,
    category: "Mouse",
    image: "https://images.unsplash.com/photo-1636489895903-931c009d3574?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "เมาส์ไร้สายสำหรับเกมเมอร์ DPI สูงสุด 16000",
    stock: 23,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: "27\" 144Hz Gaming Monitor",
    price: 5990,
    category: "Monitor",
    image: "https://images.unsplash.com/photo-1666771410003-8437c4781d49?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "จอเกมมิ่ง 27 นิ้ว QHD 144Hz 1ms Response Time",
    stock: 8,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 4,
    name: "Wireless Keyboard ",
    price: 1090,
    category: "Keyboard",
    image: "https://images.unsplash.com/photo-1708033777801-37deb9d4bec4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "คีย์บอร์ดไร้สาย ดีไซน์น่ารักๆคิคุอาโนเนะ พร้อมปุ่ม Multimedia",
    stock: 45,
    rating: 4.6,
    reviews: 67
  },
  {
    id: 5,
    name: "Mousepad Pikaju",
    price: 390,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1625842269025-dc4640c2523e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "แผ่นรองเมาส์พร้อมลาย Pikaju สุดน่ารัก",
    stock: 67,
    rating: 4.3,
    reviews: 234
  },
  {
    id: 6,
    name: "HDMI Cable 2M",
    price: 290,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1756576357688-c637013d3483?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "สาย HDMI ความยาว 2 เมตร รองรับ 4K 60Hz",
    stock: 32,
    rating: 4.4,
    reviews: 91
  },
  {
    id: 7,
    name: "Webcam 1080P 60FPS",
    price: 2390,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1636569826709-8e07f6104992?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "กล้อง Webcam คมชัด 1080P พร้อม Auto Focus",
    stock: 19,
    rating: 4.5,
    reviews: 112
  },
  {
    id: 8,
    name: "Gaming Headset 7.1",
    price: 2190,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1629429407756-4a7703614972?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "หูฟังเกมมิ่ง Surround Sound 7.1 พร้อมไมโครโฟน",
    stock: 27,
    rating: 4.6,
    reviews: 178
  },
  {
    id: 9,
    name: "SSD 1TB",
    price: 1590,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1628557119555-fb3d687cc310?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "SSD พกพา ความเร็วสูง 1TB USB 3.2 Gen 2",
    stock: 41,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 10,
    name: "Xbox Controller",
    price: 1590,
    category: "Joy controller",
    image: "https://images.unsplash.com/photo-1636908067903-abaedc57ab2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "จอย Xbox รองรับ PC แบตอึด 20 ชม.",
    stock: 38,
    rating: 4.4,
    reviews: 145
  },
  {
    id: 11,
    name: "Internet cables 10m",
    price: 790,
    category: "Accessories",
    image: "https://plus.unsplash.com/premium_photo-1675024368160-5bacaa752300?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "สายแลน Cat6 ความยาว 10 เมตร รองรับความเร็วสูง",
    stock: 56,
    rating: 4.2,
    reviews: 167
  },
  {
    id: 12,
    name: "Blue Light Glasses",
    price: 890,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1639789975707-965add2cf0e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "แว่นกรองแสงสีน้ำเงิน ลดอาการปวดตาจากจอคอม",
    stock: 73,
    rating: 4.3,
    reviews: 89
  }
];

/**
 * Categories สำหรับกรองสินค้า
 */
export const categories = ["All", "Keyboard", "Mouse", "Monitor", "Audio", "Accessories", "Storage", "Joy controller"];
