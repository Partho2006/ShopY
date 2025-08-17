"use client";
import { useParams } from "next/navigation";
import products from "@/constants/products"; // your products array
import { useCart } from "@/components/CartContext";
import { useFavorites } from "@/components/FavoritesContext";
import NoProductAvailable from "@/components/NoProducts Available";
import { Star } from "lucide-react";
import { useState } from "react";

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id.toString() === id);

    const { addToCart } = useCart();
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <NoProductAvailable />;
    }

    const isFav = favorites.some((f) => f.id === product.id);

    return (
        <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[350px] object-contain rounded shadow transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Product Info */}
            <div>
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-500">{product.brand}</p>
                <p className="text-gray-500 mb-3">{product.category}</p>

                {/* Price */}
                <div className="text-xl font-bold text-shop_dark_green mb-2">
                    ${product.price.toFixed(2)}
                </div>
                {product.originalPrice && (
                    <div className="line-through text-gray-400 font-semibold">
                        ${product.originalPrice.toFixed(2)}
                    </div>
                )}

                {/* Description */}
                <p className="mt-2">{product.description || "No description available."}</p>

                {/* Stock */}
                <p className="mt-2 text-sm text-gray-600 font-semibold">
                    In Stock: {product.inStock}
                </p>

                {/* Rating */}
                <p className="mt-2 text-sm text-gray-600 flex items-center gap-2 font-semibold">
                    <Star className="text-shop_light_green w-5 h-5" />
                    {product.rating}
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center gap-3 mt-4">
                    <span className="font-semibold">Quantity:</span>
                    <input
                        type="number"
                        min={0}
                        max={product.inStock}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="border rounded w-16 px-2 py-1"
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4 justify-between">
                    <button
                        disabled={product.inStock === 0}
                        onClick={() => addToCart(product, quantity)}
                        className={`text-white px-4 py-2 rounded font-bold w-1/2 
                                ${product.inStock === 0
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-violet-600 hover:bg-violet-800"
                            }`}
                    >
                        {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
                    </button>

                    <button
                        onClick={() =>
                            isFav ? removeFromFavorites(product.id) : addToFavorites(product)
                        }
                        className={`px-4 py-2 rounded border w-1/2 font-bold hover:border-2 border-shop_dark_green text-shop_dark_green`}
                    >
                        {isFav ? "Remove Favorite" : "Add to Favorites"}
                    </button>
                </div>
            </div>

            {/* Reviews */}
            <div className="mt-2 border rounded p-3 bg-gray-50 w-full md:col-span-2">
                <h3 className="font-bold text-lg">Customer Reviews</h3>
                <div className="space-y-4 mt-2">
                    <div>
                        <p className="font-semibold">Partho ⭐⭐⭐⭐☆</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            {/* Delivery Info */}
            <div className="mt-2 border rounded p-3 bg-gray-50 md:col-span-2">
                <p>
                    <strong>Delivery:</strong> Free delivery by{" "}
                    <span className="text-shop_dark_green">Aug 21 - Aug 23</span>
                </p>
                <p>
                    <strong>Return Policy:</strong> 7-day replacement/return
                </p>
                <p>
                    <strong>Warranty:</strong> 1-Year Manufacturer Warranty
                </p>
            </div>
        </div>
    );
}
