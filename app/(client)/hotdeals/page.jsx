import React from 'react';
import Productcard from '@/components/Productscard';
import allProducts from '@/constants/products';
import NoProductAvailable from '@/components/NoProducts Available';

const HotDeals = () => {
  const hotDeals = allProducts.filter(product => product.badge === '🔥');

  return (
    <>
      <div className=" bg-white shadow-md sticky top-12 z-20 opacity-90">
        <div className="text-black font-bold text-2xl p-4">Hotest Deals Just for you....</div>
      </div>
      {hotDeals.length > 0 ? (

        <Productcard products={hotDeals} />
      ) : (
        <NoProductAvailable />
      )}
    </>
  );
};

export default HotDeals;
