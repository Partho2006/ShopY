"use client";
import React from "react";
import { useFavorites } from "@/components/FavoritesContext";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

const Productscard = ({ products }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  // ❤️ Toggle favorite
  const toggleLike = (product) => {
    if (favorites.some((fav) => fav.id === product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  // 🛒 Add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    window.alert("Added to cart");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
      {products.map((product) => {
        const OutofStock = product.inStock === 0;

        return (
          <div
            key={product.id}
            className="border-2 rounded-lg p-4 shadow hover:shadow-lg transition flex justify-between items-center flex-col bg-[#fffaf5]"
          >
            {/* Badge + Like Button */}
            <div className="flex justify-around items-center gap-35">
              <span className="text-sm font-semibold text-red-500">
                {product.badge}
              </span>
              <button
                title={
                  favorites.some((fav) => fav.id === product.id)
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
                onClick={() => toggleLike(product)}
                className={`w-6 h-6 flex justify-center items-center transition-all duration-300 rounded-full ${favorites.some((fav) => fav.id === product.id)
                  ? "text-red-500"
                  : "text-gray-500 hover:text-red-500"
                  }`}
              >
                ♥
              </button>
            </div>
            <Link href={`/product/${product.id}`} className="flex justify-between items-center flex-col">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4 transition-transform duration-300 hover:scale-105"
              />

              {/* Info */}
              <p className="text-xs text-gray-500">{product.category}</p>
              <h3 className="text-sm font-semibold">{product.title}</h3>
            </Link>
            
            {/* Rating */}
            <div className="flex items-center text-sm text-shop_dark_green">
              {"★".repeat(product.rating)}
              <span className="ml-1 text-gray-600">
                ({product.reviews} Reviews)
              </span>
            </div>

            {/* Stock + Price */}
            <p className="text-sm text-gray-700 mt-1">
              In Stock: {product.inStock}
            </p>
            <p className="text-base font-bold text-shop_dark_green">
              {typeof product.price === "number"
                ? `$${product.price.toFixed(2)}`
                : "Price N/A"}
              {product.originalPrice &&
                typeof product.originalPrice === "number" && (
                  <span className="line-through text-gray-400 text-sm ml-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
            </p>

            {/* Add to Cart */}
            <button
              disabled={OutofStock}
              onClick={() => handleAddToCart(product)}
              className={`mt-3 w-full py-1.5 rounded text-white transition ${OutofStock
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-violet-600 hover:bg-violet-800"
                }`}
            >
              {OutofStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Productscard;
