"use client";
import { useState } from "react";
import { X } from "lucide-react";
import products from "@/constants/products";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/components/SearchContext";
import NoProductAvailable from "./NoProducts Available"; // assuming you have this component
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
            className="fixed top-20 left-1/2 -translate-x-1/2 bg-white rounded-lg p-6 w-full max-w-2xl z-50 shadow-lg"
          >
            {/* Close button */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-shop_dark_green transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-bold mb-4">Search Products</h2>

            {/* Input */}
            <input
              type="text"
              placeholder="Type to search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              className="border px-3 py-2 rounded w-full mb-6"
            />

            {/* Results */}
            {searchTerm.trim() === "" ? (
              <p className="text-gray-500 font-semibold text-center">
                Start typing to search products...
              </p>
            ) : filteredProducts.length === 0 ? (
              <NoProductAvailable />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="p-3 rounded border-2 border-shop_light_green hover:border-shop_dark_green hover:bg-violet-200 flex items-center gap-3"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{product.title}</h3>
                      <p className="text-shop_dark_green font-bold">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
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
