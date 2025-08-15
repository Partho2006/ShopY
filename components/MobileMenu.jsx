"use client"
import { AlignLeftIcon } from 'lucide-react'
import React, { useState } from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Open Menu Button */}
      <button onClick={() => setIsOpen(true)} className="flex items-center">
        <AlignLeftIcon className='md:hidden cursor-pointer flex items-center text-lightColor hover:text-shop_light_green transition-all duration-300' />
      </button>

      {/* Side Menu */}
      <div className="md:hidden flex items-center">
        <SideMenu
          isOpen={isOpen}            
          onClose={() => setIsOpen(false)} 
        />
      </div>
    </div>
  )
}

export default MobileMenu
