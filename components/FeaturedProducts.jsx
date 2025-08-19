"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { Star, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import products from "@/constants/products"; // ✅ your product list

export default function FeaturedProducts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const featured = products.filter((p) => [26, 27, 28, 29, 30, 9].includes(p.id));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked favorites just for you.
            </p>
          </div>
          <Link href="/shop">
            <div className="border border-[#1a1a1a] px-4 py-2 rounded-md font-semibold text-[#1a1a1a] bg-shop_light_green hover:bg-shop_dark_green hover:text-white group cursor-pointer flex items-center ">
              View All
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="aspect-square rounded-2xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          ) : (
            featured.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="card-shadow rounded-2xl overflow-hidden bg-white transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-lg font-medium">
                          {product.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-[#1a1a1a] group-hover:text-[#6b7c6f] transition-colors truncate">
                        {product.title}
                      </h3>
                      {product.rating && (
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">
                            {product.rating}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-shop_dark_green">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.brand && (
                        <span className="text-xs text-shop_light_green font-medium">
                          {product.brand}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
