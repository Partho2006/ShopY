import Link from 'next/link';

const HomeBanner = () => {
  return (
    <div className="bg-shop_light_pink py-5 mt-5 rounded-2xl md:py-0 flex items-center justify-between">
      <div className="flex flex-col items-start justify-center gap-4 px-4 md:px-5">
        <p className='text-2xl md:text-4xl font-semibold text-lightColor mb-2'>
          Grab the best deals of the season!
        </p>
        <Link href="/shop" className="text-white font-semibold text-lg bg-shop_light_green border rounded-2xl px-4 py-2 hover:bg-shop_light_green/80 transition-all duration-200">
          Shop Now
        </Link>
      </div>

      <div>
        <img
          src="https://png.pngtree.com/png-clipart/20250423/original/pngtree-young-man-listening-to-music-on-smartphone-with-headphones-isolated-white-png-image_20777913.png" // ✅ this path is relative to /public
          alt="Banner Image"
          width={300}
          height={200}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
