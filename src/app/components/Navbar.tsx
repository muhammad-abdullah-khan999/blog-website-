import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

export default function Navbar () {
  return (
    <div>
    <div className=' w-screen bg-orange-100 dark:bg-[#121212]/50 flex items-center justify-between max-w-screen-2xl mx-auto px-4 py-5'>
    
        <Link href="/" className='font-bold text-3xl'>
        Abdullah <span className='text-primary'> Khan</span>
        </Link> 
        
        <ModeToggle />
    </div>
    
    </div>

  )
}
