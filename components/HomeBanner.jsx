import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="bg-shop_light_pink py-5 mt-5 rounded-2xl grid md:grid-cols-2 items-center">
      {/* Left side (text) */}
      <div className="flex flex-col items-start justify-center gap-4 px-4 md:px-8">
        <p className="text-2xl md:text-4xl font-semibold text-lightColor mb-2">
          Grab the best deals of the season!
        </p>
        <Link
          href="/shop"
          className="text-white font-semibold text-lg bg-shop_light_green border rounded-2xl px-4 py-2 hover:bg-shop_light_green/80 transition-all duration-200"
        >
          Shop Now
        </Link>

        <div className="flex items-center space-x-8 pt-6">
          <div>
            <div className="text-2xl font-bold text-[#1a1a1a]">10K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#1a1a1a]">500+</div>
            <div className="text-sm text-gray-600">Premium Products</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#1a1a1a]">50+</div>
            <div className="text-sm text-gray-600">Luxury Brands</div>
          </div>
        </div>
      </div>

      {/* Right side (image) */}
      <div className="relative flex justify-center md:justify-end px-4 md:px-8">
        <div className="aspect-square bg-gradient-to-br rounded-3xl overflow-hidden shadow-2xl max-w-sm">
          <img
            src="https://png.pngtree.com/png-clipart/20250423/original/pngtree-young-man-listening-to-music-on-smartphone-with-headphones-isolated-white-png-image_20777913.png"
            alt="Banner Image"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6b7c6f] rounded-full opacity-20"></div>
        <div className="absolute -top-6 right-85 w-24 h-24 bg-[#1a1a1a] rounded-full opacity-10"></div>
      </div>
    </div>
  );
};

export default HomeBanner;
