import React from "react";
import { products, categories } from "../data/mockData";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types";

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filtered = products.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        สินค้าทั้งหมด
      </h1>

      <div className="flex justify-center mb-6">
        <select
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "All" ? "ทั้งหมด" : c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
