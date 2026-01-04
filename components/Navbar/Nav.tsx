//import Logo from '@/component/helper/Logo'
import { NAVLINKS } from '@/constants/Navlinks';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Logo from '../helper/Logo';

type Props = {
    openNav: () => void;
}


const Nav = ({ openNav }: Props) => {
    return (
        <div className='h-[12vh] relative z-10 lg:mt-8'>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-80% mx-auto'>
                {/* Logo Section */}
                <Logo />
                {/* Navigation Links for large screen*/}
                <div className='hidden lg:flex bg-white h-[10vh] md:pl-4 items-center space-x-10'>
                    {NAVLINKS.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            className='text-black hover:text-[#9f7c4e] font-semibold transition-all duration-200'
                        >
                            <p>{link.label}</p>
                        </a>
                    ))}
                    {/*Button* Call to Action */}
                    <button className='h-full p-3 bg-[#b69974] text-white cursor-pointer font-bold'>
                        Create Account
                    </button>
                </div>
                {/* EHamburger ikon for mobile */}
                <div onClick={openNav} className='lg:hidden'>
                    <HiBars3BottomRight className='w-9 h-9 text-[#dfc39f] cursor-pointer' />
                </div>

            </div>
        </div>
    );
};

export default Nav