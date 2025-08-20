// app/shop/page.jsx
"use client";

import Shop from "@/components/Shop";
import { FavoritesProvider } from "@/components/FavoritesContext";
import Link from "next/link";
import { Suspense } from "react";

export default function ShopPage() {
  return (
    <FavoritesProvider>
      <main className="bg-[#f5f7f6] min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-shop_light_green to-shop_dark_green py-16 shadow-md">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              🛍️ Shop All Products
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Discover carefully curated products that blend quality, style, and
              unbeatable value.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold text-shop_dark_green">
              Explore Our Collection
            </h2>
            <p className="text-gray-600 mt-2 md:mt-0">
              Handpicked just for you ✨
            </p>
          </div>

          {/* ✅ Wrap Shop in Suspense */}
          <Suspense fallback={<div className="text-gray-500">Loading products...</div>}>
            <Shop />
          </Suspense>
        </section>
      </main>
    </FavoritesProvider>
  );
}
