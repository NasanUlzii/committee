'use client'

import Image from 'next/image'
const Hero = () => {

    return (
        <div className='w-full h-[80vh] bg-[#1f242c] flex justify-center flex-col'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
                {/* Text Content */}
                <div>
                    {/* Title*/}
                    <h1 data-aos='fade-up'
                        className='text-4xl md:text-7xl font-bold text-white'>Crafting your digital story with passion
                    </h1>
                    {/* Description */}
                    <p data-aos='fade-up' data-aos-delay="150" className='ml-0 md:ml-12 md:mt-5 text-sm md:text-base font-semibold text-white'>
                        Elevate your brand with our expert web design and development services. We create stunning,
                        user-friendly websites that captivate your audience and drive results. Let's build something
                        amazing together.
                    </p>
                    {/* button */}
                    <button
                        data-aos='fade-up' data-aos-delay="300" className='px-8 py-3 rounded-full mt-10 ml-0 md:ml-12
                    text-white font-semibold cursor-pointer hover:bg-[#9f7c4e] transition-all 
                    duration-300 outline-2 outline-gray-300'>Discover More</button>
                    {/*Image content*/}
                    <div
                        data-aos='fade-down'
                        data-aos-delay="400"
                        className='absolute top-0 right-48 hidden lg:block mt-[-100px]'>
                        <Image src={"/images/hero.png"} width={550} height={550} alt='img' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero