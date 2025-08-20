// "use client";
// Header.jsx (server component)
import Container from '@/components/Container'
import Logo from './Logo'
import Headermenu from './Headermenu'
import CartIcon from './CartIcon'
import FavIcon from './FavIcon'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'
import HeaderClient from './HeaderClient'

const Header = async () => {
  const user = await currentUser()

  return (
    <header className='py-3 border-b border-black/20 sticky top-0 z-50 backdrop-blur-md bg-shop_light_green/30'>
      <Container className="flex items-center justify-between">
        <HeaderClient user={user} />
      </Container>
    </header>
  )
}

export default Header
