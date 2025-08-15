"use client";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFavorites } from "@/components/FavoritesContext";
import Link from "next/link";

export default function Favorites() {
  const { isFavoritesOpen, setIsFavoritesOpen, favorites, removeFromFavorites } = useFavorites();

  return (
    <AnimatePresence>
      {isFavoritesOpen && (
        <>
          {/* Dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsFavoritesOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 bg-white rounded-lg p-6 w-full max-w-3xl z-50 shadow-lg"
          >
            {/* Close button */}
            <button
              onClick={() => setIsFavoritesOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-shop_dark_green transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-bold mb-4">Your Favorites</h2>

            {/* List */}
            {favorites.length === 0 ? (
              <p className="text-gray-500 font-semibold">No favorite products yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                {favorites.map((product, index) => (
                    <Link
                      key={`link-${product.id}`}
                      href={`/product/${product.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="p-3 rounded border-2 border-shop_light_green hover:border-shop_dark_green hover:bg-violet-200 flex items-center gap-3"
                    >
                      
                        {/* Product image */}
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-20 h-20 object-contain rounded transition-transform duration-300 hover:scale-100"
                        />

                        {/* Product info */}
                        <div className="flex-1">
                          <h3 className="font-semibold">{product.title}</h3>
                          <p className="text-sm text-gray-500">{product.brand}</p>
                          <p className="font-bold text-shop_dark_green">${product.price.toFixed(2)}</p>
                        </div>

                        {/* Remove button */}
                        <button
                          onClick={() => removeFromFavorites(product.id)}
                          className="text-sm text-red-500 hover:underline font-semibold"
                        >
                          Remove
                        </button>
                    </Link>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
