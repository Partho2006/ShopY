"use client";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFavorites } from "@/components/FavoritesContext";
import Link from "next/link";

export default function Favorites() {
  const { isFavoritesOpen, setIsFavoritesOpen, favorites, removeFromFavorites } =
    useFavorites();

  return (
    <AnimatePresence>
      {isFavoritesOpen && (
        <>
          {/* Dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsFavoritesOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 bg-gradient-to-br from-white to-shop_light_green/10 rounded-2xl p-6 w-full max-w-3xl z-50 shadow-2xl border border-shop_light_green/50"
          >
            {/* Close button */}
            <button
              onClick={() => setIsFavoritesOpen(false)}
              className="absolute top-4 right-4 text-shop_dark_green transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-5 text-shop_dark_green">
              Your Favorites
            </h2>

            {/* List */}
            {favorites.length === 0 ? (
              <p className="text-gray-500 font-semibold text-center py-8">
                No favorite products yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-80 overflow-y-auto pr-2">
                {favorites.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-shop_light_green/60 bg-white/80 hover:bg-shop_light_green/20 hover:shadow-md transition-all duration-300"
                  >
                    <Link
                      href={`/product/${product.id}`}
                      onClick={() => setIsFavoritesOpen(false)}
                      className="flex items-center gap-3 flex-1"
                    >
                      {/* Product image */}
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 h-20 object-contain rounded-md border border-gray-200 bg-white hover:scale-105 transition-transform duration-300"
                      />

                      {/* Product info */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-500">{product.brand}</p>
                        <p className="font-bold text-shop_dark_green">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </Link>

                    {/* Remove button */}
                    <button
                      onClick={() => removeFromFavorites(product.id)}
                      className="text-xs font-semibold text-red-500 hover:bg-red-100 px-2 py-1 rounded transition-all"
                    >
                      ✕ Remove
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
