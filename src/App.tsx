import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import type { Product, CartItem } from "./types";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 🛒 เพิ่มสินค้าในตะกร้า
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 🔢 อัปเดตจำนวนสินค้า
  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // ❌ ลบสินค้าออกจากตะกร้า
  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* ✅ Navbar แสดงทุกหน้า */}
        <Navbar
          cartItemsCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
        />

        {/* 🛒 ตะกร้าสินค้า */}
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />

        {/* 🔀 Routing แต่ละหน้า - เพิ่ม flex-1 ให้ยืดเต็มพื้นที่ */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Home onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/products"
              element={<Products onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetail onAddToCart={handleAddToCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* ✅ Footer จะอยู่ด้านล่างสุดเสมอ */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;