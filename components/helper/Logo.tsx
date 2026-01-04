import React from 'react'
import { BiSolidBusiness } from 'react-icons/bi'

const Logo = () => {
    return (

        <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-[#b69974] rounded-full flex items-center justify-center flex-col'>
                <BiSolidBusiness className='w-10 h-10 text-white' />
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-[#d5b68c]'>Мэдикс эмнэлэг</h1>
        </div>

    )
}

export default Logo