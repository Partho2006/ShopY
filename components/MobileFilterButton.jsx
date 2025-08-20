"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlignLeft, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Logo from "./Logo";

export default function MobileFilterButton({
  category,
  setCategory,
  priceRange,
  setPriceRange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Men", "Women", "Clothing", "Home",
    "Accessories", "Appliances", "Smartphones", "Cameras", "Headphones",
  ];

  return (
    <div>
      {/* Open button (only mobile) */}
      <button
        className="md:hidden flex items-center px-4 py-2 gap-2 border rounded-lg shadow w-full justify-center text-black font-semibold mt-3"
        onClick={() => setIsOpen(true)}
      >
        <AlignLeft size={20} />
        Filters
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-80 bg-black z-50 shadow-lg p-5 overflow-y-auto rounded-r-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold">
                    <Logo className="text-white text-2xl"/>
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-shop_dark_green font-bold text-lg"
                >
                  <X />
                </button>
              </div>

              {/* Categories */}
              <h3 className="font-bold text-md mb-3 text-white border-b pb-2 border-gray-300">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory((prev) => (prev === cat ? null : cat))}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2
                      ${
                        category === cat
                          ? "bg-shop_dark_green text-white shadow scale-[1.02]"
                          : "bg-black/80 hover:bg-shop_light_green/20 text-white"
                      }`} 
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        category === cat ? "bg-white" : "bg-shop_dark_green/40"
                      }`}
                      onClick={()=>setIsOpen(false)} 
                    />
                    {cat}
                  </button>
                ))}
              </div>

              {/* Price Filter */}
              <h3 className="font-bold text-md mt-6 mb-3 text-white border-b pb-2 border-gray-300">
                Price
              </h3>
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
