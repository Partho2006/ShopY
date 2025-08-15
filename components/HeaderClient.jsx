// HeaderClient.jsx (client component)
"use client";

import { useSearch } from "@/components/SearchContext";
import Logo from './Logo'
import Headermenu from './Headermenu'
import CartIcon from './CartIcon'
import FavIcon from './FavIcon'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'
import { Search as SearchIcon, ShoppingBag } from "lucide-react";
import { useFavorites } from "@/components/FavoritesContext";
import { Heart } from "lucide-react";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

export default function HeaderClient({ user }) {
  const { setIsSearchOpen } = useSearch();
  const { setIsFavoritesOpen } = useFavorites();
  const { cartCount } = useCart();

  return (
    <>
      <div className="gap-3 flex items-center justify-start md:gap-0">
        <MobileMenu />
        <Logo />
      </div>
      <Headermenu />
      <div className='flex items-center justify-end gap-2 text-lightColor'>
        
        <button
          onClick={() => setIsSearchOpen(true)}
          className="p-2 hover:bg-gray-200 rounded-full hover:text-shop_dark_green">
          <SearchIcon className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => setIsFavoritesOpen(true)}
          className="p-2 hover:bg-gray-200 rounded-full hover:text-shop_dark_green">
          <Heart className="w-5 h-5" />
        </button>
        
        <Link href={'/cart'} className='group relative p-2 hover:bg-gray-200 rounded-full hover:text-shop_dark_green transition-all duration-200'>
          <ShoppingBag className='w-5 h-5 group ' />
          <span className='absolute w-3.5 h-3.5 top-0 right-0 bg-shop_dark_green text-white rounded-full flex items-center justify-center group text-xs'>{cartCount}</span>
        </Link>
        
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {!user && <SignIn />}
        </ClerkLoaded>
      </div>
    </>
  );
}
