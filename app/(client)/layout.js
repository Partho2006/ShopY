import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { SearchProvider } from "@/components/SearchContext";
import { FavoritesProvider } from "@/components/FavoritesContext";
import { CartProvider } from "@/components/CartContext";
import Search from "@/components/Search";
import Favicon from "@/components/FavIcon";

export const metadata = {
  title: "Shopy",
  description: "An E-commerce website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <SearchProvider>
            <FavoritesProvider>
              <CartProvider>
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                  <Search /> {/* Always rendered, but hidden until open */}
                  <Favicon /> {/* Hidden until open */}
                </div>
              </CartProvider>
            </FavoritesProvider>
          </SearchProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}


