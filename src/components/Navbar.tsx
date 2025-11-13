import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartItemsCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* ✅ Logo กลับหน้าแรก */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold">TecHub Ecom</span>
          </Link>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition">หน้าแรก</Link>
            <Link to="/products" className="hover:text-blue-200 transition">สินค้า</Link>
            <Link to="/about" className="hover:text-blue-200 transition">เกี่ยวกับเรา</Link>
            <Link to="/contact" className="hover:text-blue-200 transition">ติดต่อ</Link>
          </div>

          {/* ✅ Cart + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-blue-700 rounded-lg transition"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block py-2 hover:bg-blue-700 px-4 rounded" onClick={() => setIsMenuOpen(false)}>หน้าแรก</Link>
            <Link to="/products" className="block py-2 hover:bg-blue-700 px-4 rounded" onClick={() => setIsMenuOpen(false)}>สินค้า</Link>
            <Link to="/about" className="block py-2 hover:bg-blue-700 px-4 rounded" onClick={() => setIsMenuOpen(false)}>เกี่ยวกับเรา</Link>
            <Link to="/contact" className="block py-2 hover:bg-blue-700 px-4 rounded" onClick={() => setIsMenuOpen(false)}>ติดต่อ</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
