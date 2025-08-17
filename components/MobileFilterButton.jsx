"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlignLeft } from "lucide-react";
import Logo from "./Logo";

export default function MobileFilterButton({
    category,
    setCategory,
    selectedBrand,
    setSelectedBrand,
    selectedPrice,
    setSelectedPrice,
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-white">
            {/* Button (only visible on mobile) */}
            <button
                className="md:hidden flex items-center px-4 py-2 gap-2 border rounded-lg shadow-sm w-full justify-center text-black font-semibold mt-3"
                onClick={() => setIsOpen(true)}
            >
                <AlignLeft />
                Categorise
            </button>

            {/* Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/90 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer content */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 left-0 h-full w-72 bg-black/90 z-50 shadow-lg p-5 overflow-y-auto"
                        >
                            <div className="flex items-center justify-between">
                                {/* Categories */}
                                <h2 className="font-bold text-lg mb-4">
                                    <Logo />
                                </h2>

                                {/* Close */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-500 mb-4"
                                >
                                    ✖
                                </button>
                            </div>

                            {/*Category*/}
                            <h2 className="font-bold text-lg mt-3 mb-3">Category</h2>
                            <div className="space-y-2 border-b border-shop_light_green pb-3">
                                {[
                                    "Men", "Women", "Clothing", "Kitchen Appliances",
                                    "Television", "Refrigerators", "Washing Machine", "Smartphones",
                                    "Mobiles", "Cameras", "Airbuds",
                                ].map((cat) => (
                                    <label
                                        key={cat}
                                        className={`flex items-center gap-2 cursor-pointer font-semibold ${category === cat ? "text-shop_dark_green font-bold" : ""
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={category === cat}
                                            onChange={() =>
                                                setCategory((prev) => (prev === cat ? null : cat))
                                            }
                                            onClick={() => setIsOpen(false)}
                                        />
                                        {cat}
                                    </label>
                                ))}
                            </div>

                            {/* Brands */}
                            <h2 className="font-bold text-lg mt-3 mb-3">Brands</h2>
                            <div className="space-y-2 border-b border-shop_light_green pb-3">
                                {["Apple", "Samsung", "Sony", "Nike", "Zara", "Levi's"].map(
                                    (brand) => (
                                        <label
                                            key={brand}
                                            className={`flex items-center gap-2 cursor-pointer font-semibold ${selectedBrand === brand
                                                    ? "text-shop_dark_green font-bold"
                                                    : ""
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedBrand === brand}
                                                onChange={() =>
                                                    setSelectedBrand((prev) =>
                                                        prev === brand ? null : brand
                                                    )
                                                }
                                                onClick={() => setIsOpen(false)}
                                            />
                                            {brand}
                                        </label>
                                    )
                                )}
                            </div>

                            {/* Price */}
                            <h2 className="font-bold text-lg mt-3 mb-3">Price</h2>
                            <div className="space-y-2 border-b border-shop_light_green pb-3">
                                {[
                                    "Under $100",
                                    "$100-$300",
                                    "$300-$500",
                                    "Over $500",
                                ].map((range) => (
                                    <label
                                        key={range}
                                        className={`flex items-center gap-2 cursor-pointer font-semibold ${selectedPrice === range
                                                ? "text-shop_dark_green font-bold"
                                                : ""
                                            }`}>
                                        <input
                                            type="checkbox"
                                            checked={selectedPrice === range}
                                            onChange={() =>
                                                setSelectedPrice((prev) =>
                                                    prev === range ? null : range
                                                )
                                            }
                                            onClick={() => setIsOpen(false)}
                                        />
                                        {range}
                                    </label>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
