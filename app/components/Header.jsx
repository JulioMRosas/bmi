import React from 'react'
import Image from 'next/image'


export const Header = () => {
  return (
    <header className='flex justify-around bg-[#0b231e] text-white'>
        <div>
            <Image 
                src={'header_logo.svg'} 
                width={200} height={200} 
                alt="Website logo" 
                style={{width:128, height:48}}
                priority
                className='cursor-pointer'
            />
        </div>
        <nav className='flex list-none space-x-6 items-center'>
            <li className='cursor-pointer hover:text-red-300'>Registro para vacunación</li>
            <li className='cursor-pointer hover:text-red-300'>Información sobre COVID-19</li>
            <li className='cursor-pointer hover:text-red-300'>Trámites</li>
            <li className='cursor-pointer hover:text-red-300'>Gobierno</li>
            <button>
                <Image 
                    src={'lupa.svg'}
                    width={200} height={200} 
                    alt="Search button" 
                    style={{width:16, height:16}}
                    priority
                />
            </button>
        </nav>
    </header>
  )
}
