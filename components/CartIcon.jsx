import React from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

const CartIcon = () => {
  return (
    <Link href={'/cart'} className='group relative p-2 hover:bg-gray-200 rounded-full hover:text-shop_dark_green transition-all duration-200'>
      <ShoppingBag className='w-5 h-5 group '/>
      <span className='absolute w-3.5 h-3.5 top-0 right-0 bg-shop_dark_green text-white rounded-full flex items-center justify-center group text-xs'>0</span>
    </Link>
  )
}

export default CartIcon
