import { Link } from "react-router-dom";

interface HomeProps {
  onAddToCart: (product: any) => void;
}

export default function Home({ onAddToCart }: HomeProps) {
  return (
    <div className="w-screen min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        ยินดีต้อนรับสู่ Techub Ecom
      </h1>

      <p className="text-xl mb-10 max-w-xl">
        แหล่งรวมสินค้าเทคโนโลยี อุปกรณ์คอมพิวเตอร์ และเกมมิ่งเกียร์คุณภาพสูง
      </p>

      <Link
        to="/products"
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md"
      >
        เลือกซื้อสินค้า
      </Link>
    </div>
  );
}
