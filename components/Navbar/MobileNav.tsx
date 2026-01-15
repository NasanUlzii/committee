import { NAVLINKS } from '@/constants/Navlinks'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {

    const navOpenStyles = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
    return (
        <div>
            {/*Overlay*/}
            <div className={`fixed ${navOpenStyles} inset-0 transform transition-all duration-500 z-1002
             bg-black opacity-70 w-full h-screen`}>
            </div>
            {/* Mobile Navigation Menu */}
            <div className={`text-white ${navOpenStyles} top-0 fixed justify-center flex flex-col h-full transform transition-all 
duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#9f7c4e] space-y-6 z-1050`}>
                {NAVLINKS.map((link) => (
                    <Link
                        key={link.id}
                        href={link.url}
                        className='text-white hover:text-black font-semibold text-2xl transition-all duration-200 pl-6'
                    >
                        <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm-text-[30px]'>
                            {link.label}
                        </p>
                    </Link>
                ))}
                {/*Button* Call to Action */}
                <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
            </div>
        </div>
    )
}
export default MobileNav