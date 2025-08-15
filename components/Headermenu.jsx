"use client"
import data from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Headermenu = () => {
  const pathname = usePathname()
  return (
    <div className='hidden md:inline-flex items-center gap-6 text-sm font-semibold text-lightColor'>
      {data.map((item) => (
        <Link key={item.title} href={item.link} className={`relative group hover:text-shop_light_green transition-all duration-300 
        ${pathname === item.link ? 'text-shop_light_green' : ''}`}>
          {item.title}
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 group-hover:right-0 transition-all duration-300 ${pathname === item.link ? 'w-1/2' : ''}`}></span>
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 group-hover:left-0 transition-all duration-300 ${pathname === item.link ? 'w-1/2' : ''}`}></span>
        </Link>
      ))}
    </div>
  )
}

export default Headermenu
