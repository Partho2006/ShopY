import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";

export default function CategoryGrid() {
    const categories = [
        {
            name: "Clothing",
            slug: "clothing",
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&crop=center",
            description: "Curated fashion essentials"
        },
        {
            name: "Accessories",
            slug: "accessories",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center",
            description: "Statement pieces"
        },
        {
            name: "Appliances",
            slug: "appliances",
            image: "data:image/jpeg;base64,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",
            description: "Modern essentials"
        },
        {
            name: "Home",
            slug: "home",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
            description: "Living luxuriously"
        }
    ];

    return (
        <section className="py-15 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
                        Shop by Category
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our carefully curated collections, each designed to elevate your lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`${createPageUrl("Products")}?category=${category.slug}`}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl card-shadow bg-white transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#6b7c6f] transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}