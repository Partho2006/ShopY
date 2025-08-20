"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // ✅ Next.js hook
import products from "@/constants/products";
import NoProductAvailable from "./NoProducts Available";
import Productscard from "./Productscard";
import MobileFilterButton from "./MobileFilterButton";
import { Slider } from "@/components/ui/slider";

export default function Shop() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category"); // ✅ read from URL

  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Filtering logic
  const filteredProducts = products.filter((p) => {
    const categoryMatch =
      !category || p.category.split(",").map((c) => c.trim()).includes(category);
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="gap-6 border-t-2">
      <MobileFilterButton
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <div className="flex">
        {/* Sidebar */}
        {/* Sidebar */}
        <aside className=" bg-white md:p-6 p-3 shadow-lg border-r border-gray-200 hidden md:block rounded-2xl">
          {/* Categories */}
          <h2 className="font-bold text-lg mb-4 text-shop_dark_green border-b pb-2 border-gray-300">
            Categories
          </h2>
          <div className="space-y-2">
            {[
              "Men", "Women", "Clothing", "Home",
              "Accessories", "Appliances", "Smartphones", "Cameras", "Headphones",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory((prev) => (prev === cat ? null : cat))}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2
          ${category === cat
                    ? "bg-shop_dark_green text-white shadow-md scale-[1.02]"
                    : "bg-gray-50 hover:bg-shop_light_green/20 text-shop_dark_green hover:text-shop_dark_green"
                  }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${category === cat ? "bg-white" : "bg-shop_dark_green/40"
                    }`}
                ></span>
                {cat}
              </button>
            ))}
          </div>

          {/* Price Slider */}
          <h2 className="font-bold text-lg mt-6 mb-3 text-shop_dark_green border-b pb-2 border-gray-300">
            Price
          </h2>
          <div className="px-2">
            <Slider
              min={0}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="w-full text-shop_dark_green"
            />
            <div className="flex justify-between mt-3 text-sm text-shop_dark_green font-semibold">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full px-4 py-5 m-2 bg-gradient-to-r from-shop_dark_green to-shop_light_green rounded-3xl shadow-inner">
          {filteredProducts.length === 0 ? (
            <NoProductAvailable
              selectedTab={category || priceRange}
              className="w-full"
            />
          ) : (
            <Productscard products={filteredProducts} />
          )}
        </main>
      </div>
    </div>
  );
}
