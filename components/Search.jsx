"use client";
import { useState } from "react";
import { X, Search as SearchIcon } from "lucide-react";
import products from "@/constants/products";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/components/SearchContext";
import NoProductAvailable from "./NoProducts Available"; 
import Link from "next/link";

export default function Search() {
  const { isSearchOpen, setIsSearchOpen } = useSearch();
  const [searchTerm, setSearchTerm] = useState("");

  // Only filter if there is a search term
  const filteredProducts =
    searchTerm.trim() === ""
      ? []
      : products.filter((product) =>
          (product?.title ?? "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          {/* Dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsSearchOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 bg-gradient-to-br from-white to-shop_light_green/10 rounded-2xl p-6 w-full max-w-2xl z-50 shadow-2xl border border-shop_light_green/50"
          >
            {/* Close button */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-shop_dark_green transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold mb-5 text-shop_dark_green flex items-center gap-2">
              <SearchIcon className="w-6 h-6 text-shop_dark_green" />
              Search Products
            </h2>

            {/* Input */}
            <input
              type="text"
              placeholder="Type to search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              className="border-2 border-shop_light_green focus:border-shop_dark_green outline-none px-4 py-2 rounded-lg w-full mb-6 shadow-sm transition-all duration-200"
            />

            {/* Results */}
            {searchTerm.trim() === "" ? (
              <p className="text-shop_dark_green font-semibold text-center py-6">
                Start typing to search products...
              </p>
            ) : filteredProducts.length === 0 ? (
              <NoProductAvailable />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-80 overflow-y-auto pr-2">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={`/product/${product.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-3 p-4 rounded-xl border border-shop_light_green/60 bg-white/80 hover:bg-shop_light_green/20 hover:shadow-md transition-all duration-300"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-contain rounded-md border border-gray-200 bg-white hover:scale-105 transition-transform duration-300"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">{product.title}</h3>
                        <p className="text-shop_dark_green font-bold">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </Link>
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
