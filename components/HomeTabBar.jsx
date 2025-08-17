import { productType } from '@/constants/data'
import React from 'react'

const HomeTabBar = ({ selectedTab, setSelectedTab }) => {
    return (
            <div className="flex gap-1 md:gap-2 text-sm font-semibold items-center ">
                {productType.map((item) => (
                    <button
                        key={item.title}
                        className={`border-2 border-shop_light_green text-black  p-2 px-2 md:px-3 rounded-full transition-all duration-300 mt-3
                          ${selectedTab === item.value ? 'bg-shop_light_green text-white' : 'bg-shop_light_green/30 hover:bg-shop_light_green/50'}`}
                        onClick={() => setSelectedTab(item.value)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
    )
}

export default HomeTabBar

