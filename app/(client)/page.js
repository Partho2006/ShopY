import Container from "@/components/Container";
import "./globals.css";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import { ArrowRight, Star, Truck, Shield, RefreshCw } from "lucide-react";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure checkout"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy"
    }
  ];

  return (
    <div>
      <Container>
        <HomeBanner />
        {/* Features Section */}
        <section className="py-15 mt-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#6b7c6f]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-[#6b7c6f]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CategoryGrid />
        <FeaturedProducts />
      </Container>
    </div>
  );
}

