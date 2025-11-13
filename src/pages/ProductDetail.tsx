import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/mockData";
import type { Product } from "../types";

interface ProductDetailProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">
          ❌ ไม่พบสินค้าที่คุณเลือก
        </h2>
        <Link
          to="/products"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          กลับไปหน้าสินค้า
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">
            ฿{product.price.toLocaleString()}
          </p>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            เพิ่มลงตะกร้า
          </button>

          <div className="mt-6">
            <Link to="/products" className="text-blue-600 underline">
              ← กลับไปหน้าสินค้า
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
