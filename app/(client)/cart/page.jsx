"use client";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-shop_dark_green mb-4">
          Your Cart
        </h1>
        <p className="text-gray-500">Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-shop_dark_green mb-8">
        Your Shopping Cart
      </h1>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Link
              href={`/product/${item.id}`}
              className="flex items-center gap-5 group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain border rounded-lg group-hover:scale-105 transition-transform"
              />
              <div>
                <h2 className="font-semibold text-lg text-shop_dark_green group-hover:underline">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
              </div>
            </Link>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-semibold hover:text-red-700 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total + Actions */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold text-gray-700">Total:</span>
          <span className="text-2xl font-extrabold text-shop_dark_green">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-red-600 transition-all"
          >
            Clear Cart
          </button>
          <button
            className="bg-shop_dark_green text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-shop_light_green transition-all"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
