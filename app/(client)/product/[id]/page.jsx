"use client";
import { useParams } from "next/navigation";
import products from "@/constants/products";
import { useCart } from "@/components/CartContext";
import { useFavorites } from "@/components/FavoritesContext";
import NoProductAvailable from "@/components/NoProducts Available";
import { Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id.toString() === id);

    const { addToCart } = useCart();
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

    const [quantity, setQuantity] = useState(1);

    if (!product) return <NoProductAvailable />;

    const isFav = favorites.some((f) => f.id === product.id);

    // Delivery Date Calculation
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 2);
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 4);

    // ✅ JS version (no type annotation)
    const formatDate = (date) =>
        date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

    return (
        <div>
            {/* Back Navigation */}
            <div className="px-20 py-6 font-semibold">
                <Link
                    href="/shop"
                    className="text-shop_dark_green hover:text-violet-900 transition-all duration-200"
                >
                    ← Back to Shopping
                </Link>
            </div>

            <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 bg-white rounded-lg shadow-lg">
                {/* Product Image */}
                <div className="flex justify-center items-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full max-w-sm h-[350px] object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                    <p className="text-gray-500">{product.brand}</p>
                    <p className="text-gray-500 mb-3">{product.category}</p>

                    {/* Price */}
                    <div className="text-2xl font-extrabold text-shop_dark_green mb-1">
                        ${product.price.toFixed(2)}
                    </div>
                    {product.originalPrice && (
                        <div className="line-through text-gray-400 font-semibold mb-3">
                            ${product.originalPrice.toFixed(2)}
                        </div>
                    )}

                    {/* Description */}
                    <p className="mt-2 text-gray-700">
                        {product.description || "No description available."}
                    </p>

                    {/* Stock */}
                    <p className="mt-3 text-sm font-semibold">
                        {product.inStock > 0 ? (
                            <span className="text-shop_light_green">
                                In Stock: {product.inStock}
                            </span>
                        ) : (
                            <span className="text-red-600">Out of Stock</span>
                        )}
                    </p>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-1 text-yellow-500">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star
                                key={i}
                                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                className="w-5 h-5"
                            />
                        ))}
                        <span className="text-gray-600 ml-2">
                            {Number(product.rating).toFixed(1)}
                        </span>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-5">
                        <span className="font-semibold">Quantity:</span>
                        <input
                            type="number"
                            min={1}
                            max={product.inStock}
                            value={quantity}
                            onChange={(e) =>
                                setQuantity(
                                    Math.max(1, Math.min(product.inStock, Number(e.target.value)))
                                )
                            }
                            className="border rounded w-20 px-3 py-2"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button
                            disabled={product.inStock === 0}
                            onClick={() => addToCart(product, quantity)}
                            className={`text-white px-5 py-3 rounded font-bold w-1/2 transition-all duration-200 shadow 
                ${product.inStock === 0
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-shop_dark_green hover:bg-violet-700"
                                }`}
                        >
                            {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
                        </button>

                        <button
                            onClick={() =>
                                isFav ? removeFromFavorites(product.id) : addToFavorites(product)
                            }
                            className={`px-5 py-3 rounded w-1/2 font-bold transition-all duration-200 shadow
                ${isFav
                                    ? "bg-red-100 text-red-600 border border-red-600 hover:bg-red-200"
                                    : "border border-shop_dark_green text-shop_dark_green hover:bg-shop_light_green hover:text-white"
                                }`}
                        >
                            {isFav ? "Remove Favorite" : "Add to Favorites"}
                        </button>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mt-6 border rounded p-4 bg-gray-50 w-full md:col-span-2">
                    <h3 className="font-bold text-lg text-gray-800">Customer Reviews</h3>
                    <div className="text-gray-500 mt-2">
                        <div className="mt-2 border rounded p-3 bg-gray-50 w-full md:col-span-2">
                            <div className="space-y-4 mt-2">
                                <div>
                                    <p className="font-semibold">Partho ⭐⭐⭐⭐☆</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery Info */}
                <div className="mt-6 border rounded p-4 bg-gray-50 md:col-span-2">
                    <p>
                        <strong>Delivery:</strong> Free delivery by{" "}
                        <span className="text-shop_dark_green">
                            {formatDate(startDate)} - {formatDate(endDate)}
                        </span>
                    </p>
                    <p>
                        <strong>Return Policy:</strong> 7-day replacement/return
                    </p>
                    <p>
                        <strong>Warranty:</strong> 1-Year Manufacturer Warranty
                    </p>
                </div>
            </div>
        </div>
    );
}
