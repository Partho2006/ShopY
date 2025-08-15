"use client"
import React, { useState, useEffect } from 'react';
import HomeTabBar from './HomeTabBar';
import { productType } from '@/constants/data'; // assuming this one uses named export
import { Loader } from 'lucide-react';
import NoProductAvailable from './NoProducts Available';
import Productcard from './Productscard';
import allProducts from '@/constants/products'; // ✅ default import

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.value || '');


  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const filtered = allProducts.filter(product => {
        const category = product.category?.toLowerCase() || "";
        return selectedTab
          ? category.includes(selectedTab.toLowerCase()) // selectedTab is now "clothing"
          : true;
      });

      setProducts(filtered);
      setLoading(false);
    }, 300); // faster feedback
  }, [selectedTab]);

  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {loading ? (
        <div className="flex items-center justify-center flex-wrap gap-4 mt-4">
          <Loader className="w-6 h-6 animate-spin" />
          <span>Product is loading...</span>
        </div>
      ) : products.length > 0 ? (
        <Productcard products={products} selectedTab={selectedTab} />
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
};

export default ProductGrid;
