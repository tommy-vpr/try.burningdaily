import React from 'react'

import {
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaBars,
    FaUser,
    FaSearch
} from 'react-icons/fa'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
  
const Header = () => {
  return (
    <header>
        <div className='bg-[#101010] p-2 text-gray-300 flex gap-2 w-full items-center justify-center'>
            <span className='text-xs md:text-sm'>Your one stop shop</span>
            <div className='flex gap-2 text-sm'>
                <FaTwitter />
                <FaFacebook />
                <FaInstagram />
            </div>
        </div>
        <div className='flex justify-between items-center max-w-[960px] mx-auto p-2'>
            <Sheet>
                <SheetTrigger>
                    <FaBars className='text-gray-700 text-lg cursor-pointer' />
                </SheetTrigger>
                <SheetContent className='bg-white'>
                    <SheetHeader>
                    <SheetDescription>
                        <ul className='flex flex-col gap-2 mt-12 text-left text-xl'>
                            <Link href='' >
                                <li className='hover:text-gray-500 p-2 transition 
                            duration-200'>HOME</li>
                            </Link>
                            <Link href='' className='hover:text-gray-500 p-2 transition 
                            duration-200'>
                                <li>ABOUT</li>
                            </Link>
                            <Link href='' className='hover:text-gray-500 p-2 transition 
                            duration-200'>
                                <li>LEARN MORE</li>
                            </Link>
                        </ul>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <h1 className='text-3xl md:text-6xl text-gray-800 text-center flex items-center gap-3'>LIV A LITTO</h1>

            <div className='flex items-center gap-2 text-gray-700'>
                <FaSearch />
                <FaUser />
            </div>
        </div>

        <div className='border-y-[1px] text-gray-500 text-[11px] md:text-sm border-gray-100 w-full justify-center p-2 uppercase
            flex gap-4 items-center'>
            <p className='flex items-center'>
                <span className='mr-2 h-[4px] w-[4px] bg-gray-600 rounded-full inline-block'></span>
                innovative technology</p>
            <p className='flex items-center'>
                <span className='mr-2 h-[4px] w-[4px] bg-gray-600 rounded-full inline-block'></span>
                satisfying experiences</p>
            <p className='flex items-center'>
                <span className='mr-2 h-[4px] w-[4px] bg-gray-600 rounded-full inline-block'></span>
                premium blends</p>
        </div>
    </header>
  )
}

export default Header
