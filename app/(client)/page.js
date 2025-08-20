import Container from "@/components/Container";
import "./globals.css";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import { Truck, Shield, RefreshCw } from "lucide-react";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure checkout",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy",
    },
  ];

  return (
    <div className="bg-[#f5f7f6] min-h-screen">
      <Container>
        {/* Hero Banner */}
        <HomeBanner />

        {/* Features Section */}
        <section className="py-16 mt-10 bg-gradient-to-r from-shop_light_green to-shop_dark_green rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/90 rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-shop_light_green to-shop_dark_green rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <CategoryGrid />
        </section>

        {/* Featured Products Section */}
        <section className="py-10 my-5">
          <FeaturedProducts />
        </section>
      </Container>
    </div>
  );
}
