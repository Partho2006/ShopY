import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignIn = () => {
  return (
    <div>
      <SignInButton mode='nodal'>
        <button className='text-sm text-lightColor hover:text-shop_dark_green hover:underline hover:text-md cursor-pointer font-semibold transition-all duration-200'>
          Login
        </button>
      </SignInButton>
    </div>
  )
}

export default SignIn
