import React from "react";
import { Shield, Award, Users, Leaf } from "lucide-react";
import Logo from "@/components/Logo";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Every product undergoes rigorous quality checks to ensure excellence.",
    },
    {
      icon: Award,
      title: "Curated Selection",
      description:
        "Hand-picked products from the world's finest artisans and brands.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Your satisfaction is our priority with dedicated support and service.",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description:
        "Committed to ethical sourcing and environmentally conscious practices.",
    },
  ];

  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-shop_light_green/20 to-shop_dark_green/10 py-24">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-shop_dark_green mb-6 tracking-tight">
            Our Story
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <Logo /> was born from a simple belief: luxury should be accessible,
            authentic, and sustainable. We curate the finest products from
            artisans and designers who share our commitment to quality and
            craftsmanship.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-shop_dark_green mb-4 tracking-tight">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our values guide every decision we make, from the products we
              select to the experiences we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#fafafa] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-shop_light_green/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-shop_dark_green" />
                </div>
                <h3 className="text-xl font-semibold text-shop_dark_green mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-gradient-to-r from-white to-shop_light_green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-shop_dark_green tracking-tight">
                Crafted with Purpose
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every product in our collection tells a story. From the initial
                design concept to the final finishing touches, we work closely
                with creators who pour their passion into every piece.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe that luxury isn't just about price—it's about the
                care, attention to detail, and the timeless quality that comes
                from true craftsmanship.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=450&fit=crop&crop=center"
                  alt="Artisan crafting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-shop_dark_green rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-shop_light_green/10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Happy Customers" },
              { number: "50+", label: "Premium Products" },
              { number: "50+", label: "Partner Brands" },
              { number: "25", label: "Countries Served" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="text-4xl font-bold mb-2 text-shop_dark_green">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
