import React from 'react'
import Logo from './Logo'
import { X } from 'lucide-react'
import data from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialMedia from './SocialMedia'
import { useOutsideClick } from '@/hooks/index1'

const SideMenu = ({ isOpen, onClose }) => {
    const pathname = usePathname()
    const sidebar = useOutsideClick(onClose) 
    return (
        <div className={` fixed top-0 left-0 w-full h-screen bg-black/80 z-50 flex items-start shadow-xl transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='w-3/4 h-full bg-black/80 flex flex-col p-6'>
                <div className='flex items-center justify-between gap-5'>
                    <Logo className="text-white" />
                    <button
                        onClick={onClose}
                        className='text-white text-xl hover:text-shop_light_green transition-all duration-300 cursor-pointer'>
                        <X className='w-6 h-6' />
                    </button>
                </div>
                <div ref={sidebar} className='flex flex-col space-y-4 mt-10 text-white text-lg top-0'>
                    {data.map((item) => (
                        <Link key={item.title} href={item.link} className={`relative group hover:text-shop_light_green transition-all duration-300 font-semibold 
                         ${pathname === item.link ? 'text-shop_light_green' : ''}`}>
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div>
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}

export default SideMenu
