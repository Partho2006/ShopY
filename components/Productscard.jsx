"use client";
import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

const Productscard = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-6">
      {products.map((product) => {
        const OutofStock = product.inStock === 0;

        return (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group"
          >
            <div className="card-shadow rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-lg bg-shop_light_pink group-hover:scale-[1.02]">
              {/* Product Image */}
              <div className="aspect-square overflow-hidden bg-gray-50">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
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
              <div className="p-5 space-y-3">
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
                  {product.description || product.category}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-shop_dark_green">
                    {typeof product.price === "number"
                      ? `$${product.price.toFixed(2)}`
                      : "Price N/A"}
                  </span>

                  {product.brand && (
                    <span className="text-xs text-shop_light_green font-medium">
                      {product.brand}
                    </span>
                  )}
                </div>

                {/* Stock Info */}
                <p
                  className={`text-xs font-medium ${
                    OutofStock ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {OutofStock ? "Out of Stock" : `In Stock: ${product.inStock}`}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Productscard;
