"use client";
import { useParams } from "next/navigation";
import products from "@/constants/products"; // your products array
import { useCart } from "@/components/CartContext";
import { useFavorites } from "@/components/FavoritesContext";
import NoProductAvailable from "@/components/NoProducts Available";
import { Star } from "lucide-react";

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id.toString() === id);

    const { addToCart } = useCart();
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

    if (!product) {
        return (
            <NoProductAvailable />
        )
    }

    const isFav = favorites.some((f) => f.id === product.id);

    return (
        <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-[350px] object-contain rounded shadow transition-transform duration-300 hover:scale-105"
            />

            {/* Product Info */}
            <div>
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-500">{product.brand}</p>
                <p className="text-gray-500 mb-3">{product.category}</p>

                <div className="text-xl font-bold text-shop_dark_green mb-2">
                    ${product.price.toFixed(2)}
                </div>

                {product.originalPrice && (
                    <div className="line-through text-gray-400 font-semibold">
                        ${product.originalPrice.toFixed(2)}
                    </div>
                )}

                <p className="mt-2">{product.description || "No description available."}</p>

                {/* Stock */}
                <p className="mt-2 text-sm text-gray-600 font-semibold">
                    In Stock: {product.inStock}
                </p>

                <p className="mt-2 text-sm text-gray-600 flex items-center gap-2 font-semibold"><Star className="text-shop_light_green w-5 h-5"/>{product.rating}</p>

                {/* Buttons */}
                <div className="flex gap-4 mt-4 justify-between">
                <button
                    onClick={() => addToCart(product)}
                    className="bg-violet-600 text-white px-4 py-2 rounded font-bold hover:bg-violet-800 w-1/2"
                >
                    Add to Cart
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
        </div >
    );
}
