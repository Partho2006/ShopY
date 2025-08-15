import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { quickLinksData, categoriesData } from '@/constants/data'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <Container>
        <FooterTop />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 border-y border-black/20 text-lightColor'>
          <div className=' border-black/20 p-2 border-b md:border-b-0'>
            <Logo />
            <p>Welcome to Shopy, your one-stop destination for the latest trends and unbeatable deals.</p>
            <SocialMedia />
          </div>
          <div className='mx-2 border-black/20 p-2 flex items-start flex-col border-b md:border-b-0'>
            <h2 className='font-bold text-2xl'>Quick Links</h2>
            <ul className='space-y-2 mt-2'>
              {quickLinksData.map((item) => (
                <li key={item.title} className='hover:text-shop_light_green transition-colors duration-200'>
                  <Link className='flex items-center gap-2 cursor-pointer' href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mx-2 border-black/20 p-2 border-b md:border-b-0'>
            <h2 className='font-bold text-2xl'>Categories</h2>
            <ul className='space-y-2 mt-2'>
              {categoriesData.map((item) => (
                <li key={item.title} className='hover:text-shop_light_green transition-colors duration-200'>
                  <Link className='flex items-center gap-2 cursor-pointer' href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-4 mx-2 border-black/20 p-2 border-b md:border-b-0'>
            <h2 className='font-bold text-2xl'>Contact Us</h2>
            <Link href="https://x.com/partho221" target="_blank" className='hover:text-shop_light_green transition-colors duration-200'>
              <p className=''>Follow me on X to gain more exclusive information about my future projects.</p>
            </Link>
            <Link href="https://www.youtube.com/@PryRice" target="_blank" className='hover:text-shop_light_green transition-colors duration-200'>
              <p className='mt-4'>Subscribe me on Youtube.</p>
            </Link>
            <p className='mt-4 font-bold'>Author- Parthojoty Roy Chowdhury</p>            
          </div>         
        </div>
        <div className="py-4 border-t text-center text-sm text-gray-600">
          <div>
            ©2025 <Logo className="text-sm" />. All rights reserved.
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
