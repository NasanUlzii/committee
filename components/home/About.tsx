import React from 'react'
import Image from 'next/image'
import AboutProgress from './AboutProgress'

const About = () => {
    return (
        <div className='pt-16 pb-16 bg-white'>
            <div className='w-[80%] max-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Image Content */}
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' className='relative flex justify-center items-center'>
                    {/* Main image */}
                    <Image src={"/images/a3.png"} width={500} height={500} alt='About Main'
                        className='animate-spin [animation-duration:20s]' />
                    {/* Centered image */}
                    <Image src={"/images/a4.png"} width={350} height={350} alt='img'
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    rounded-lg md:ml-4 w-[200px] h-[200px] md:w-[350px] md:h-[350px]'/>
                </div>
                {/* Text Content */}
                <div>
                    {/* Sub heading */}
                    <h1 data-aos='fade-up'
                        data-aos-anchor-placement='top-center'
                        data-aos-delay="150"
                        className='text-blue-700 text-lg font-medium tracking-widest'>About Us</h1>
                    {/* Main heading */}
                    <h1
                        data-aos='fade-up'
                        data-aos-anchor-placement='top-center'
                        data-aos-delay="300"
                        className='text-3xl md:text-5xl font-bold mt-4'>Innovative solution for digital success</h1>
                    {/* Description */}
                    <p
                        data-aos='fade-up'
                        data-aos-anchor-placement='top-center'
                        data-aos-delay="500"
                        className='ml-5 md:ml-12 md:mt-10 mt-5 text-black text-sm md:text-base font-semibold
                     leading-loose'>
                        We are a team of passionate web designers and developers dedicated to crafting beautiful,
                        functional, and user-friendly websites. With years of experience in the industry, we understand
                        the importance of a strong online presence and strive to help our clients achieve their digital
                    </p>
                    {/* Progress */}
                    <AboutProgress />
                </div>
            </div>
        </div>
    )
}

export default About