// app/shop/page.jsx
import Shop from "@/components/Shop";
import { FavoritesProvider } from "@/components/FavoritesContext";

export default function ShopPage() {
  return (
    <FavoritesProvider>
      <main className="p-5">
        <h1 className="text-2xl font-bold mb-4">Shop All Products</h1>
        <Shop />
      </main>
    </FavoritesProvider>
  );
}
