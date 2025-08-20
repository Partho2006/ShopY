import React from "react";
import Productcard from "@/components/Productscard";
import allProducts from "@/constants/products";
import NoProductAvailable from "@/components/NoProducts Available";

const HotDeals = () => {
  const hotDeals = allProducts.filter((product) => product.badge === "🔥");

  return (
    <div className="bg-[#f5f7f6] min-h-screen">
      {/* Header Section */}
      <div className="">
        <div className="bg-gradient-to-r from-shop_light_green to-shop_dark_green shadow-lg">
          <div className="max-w-7xl mx-auto py-10 px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
              🔥 Hottest Deals Just for You!
            </h1>
            <p className="text-white/90 mt-3 text-lg">
              Save big on our top-selling products — grab them before they’re
              gone!
            </p>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 rounded-2xl mt-5 bg-gradient-to-r from-shop_light_green to-shop_dark_green">
        {hotDeals.length > 0 ? (
          <div className="">
            <Productcard products={hotDeals} />
          </div>
        ) : (
          <div className="mt-10 flex justify-center">
            <NoProductAvailable />
          </div>
        )}
      </div>

      {/* Footer CTA */}
      {hotDeals.length > 0 && (
        <div className="bg-gradient-to-r from-shop_dark_green to-shop_light_green py-12 mt-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold">
              Don’t Miss Out on These Hot Deals 🔥
            </h2>
            <p className="mt-2 text-white/90">
              Limited-time offers with unbeatable discounts. Shop now before
              they sell out!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotDeals;

