"use client";
import { useState } from "react";
import products from "@/constants/products";
import NoProductAvailable from "./NoProducts Available";
import { useFavorites } from "@/components/FavoritesContext";
import { useCart } from "@/components/CartContext";
import Productscard from "./Productscard"; // ✅ import your product card component

export default function Shop() {
  const [category, setCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  // Price range helper
  const priceInRange = (price, range) => {
    switch (range) {
      case "Under $100": return price < 100;
      case "$100-$300": return price >= 100 && price <= 300;
      case "$300-$500": return price > 300 && price <= 500;
      case "Over $500": return price > 500;
      default: return true;
    }
  };

  // Filtering logic
  const filteredProducts = products.filter((p) => {
    const categoryMatch = !category || p.category.split(",").map(c => c.trim()).includes(category);
    const brandMatch = !selectedBrand || p.brand === selectedBrand;
    const priceMatch = !selectedPrice || priceInRange(p.price, selectedPrice);
    return categoryMatch && brandMatch && priceMatch;
  });

  return (
    <div className="flex lg:px-6 gap-6 border-t-2">
      {/* Sidebar */}
      <aside className="lg:w-1/6 w-auto bg-white md:p-5 p-1 shadow border-r-2">
        <h2 className="font-bold text-lg mb-3">Categories</h2>
        <div className="space-y-2">
          {[
            "Men", "Women", "Clothing", "Kitchen Appliances",
            "Television", "Refrigerators", "Washing Machine", "Smartphones",
            "Mobiles", "Cameras", "Airbuds",
          ].map((cat) => (
            <label
              key={cat}
              className={`flex items-center gap-2 cursor-pointer lg:font-semibold hover:text-shop_dark_green transition-all duration-200 ${category === cat ? "text-shop_dark_green font-bold" : ""}`}
            >
              <input
                type="checkbox"
                checked={category === cat}
                onChange={() => setCategory(prev => prev === cat ? null : cat)}
              />
              {cat}
            </label>
          ))}
        </div>

        <h2 className="font-bold text-lg mt-6 mb-3">Brands</h2>
        <div className="space-y-2">
          {["Apple", "Samsung", "Sony", "Nike", "Zara", "Levi's"].map((brand) => (
            <label
              key={brand}
              className={`flex items-center gap-2 cursor-pointer lg:font-semibold hover:text-shop_dark_green transition-all duration-200 ${selectedBrand === brand ? "text-shop_dark_green font-bold" : ""}`}
            >
              <input
                type="checkbox"
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(prev => prev === brand ? null : brand)}
              />
              {brand}
            </label>
          ))}
        </div>

        <h2 className="font-bold text-lg mt-6 mb-3">Price</h2>
        <div className="space-y-2">
          {["Under $100", "$100-$300", "$300-$500", "Over $500"].map((range) => (
            <label
              key={range}
              className={`flex items-center gap-2 cursor-pointer lg:font-semibold hover:text-shop_dark_green transition-all duration-200 ${selectedPrice === range ? "text-shop_dark_green font-bold" : ""}`}
            >
              <input
                type="checkbox"
                checked={selectedPrice === range}
                onChange={() => setSelectedPrice(prev => prev === range ? null : range)}
              />
              {range}
            </label>
          ))}
        </div>
      </aside>

      {/* Product Grid */}
      <main className="w-3/4 lg:p-5 md:p-1 p-0">
        {filteredProducts.length === 0 ? (
          <NoProductAvailable
            selectedTab={category || selectedBrand || selectedPrice}
            className="w-full"
          />
        ) : (
          <Productscard products={filteredProducts} /> // ✅ use your reusable component
        )}
      </main>
    </div>
  );
}
