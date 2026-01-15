
import { FaFacebookF, FaInstagram, FaPaperPlane, FaPhone, FaYoutube } from "react-icons/fa"
import { IoMailOpen } from "react-icons/io5"
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md"
import Image from "next/image"
import { BiCalendar } from "react-icons/bi"
import Logo from "@/components/helper/Logo"
const Footer = () => {
    return (
        <div className="w-[80%] mt-8 mx-auto grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2
         lg:grid-cols-4 gap-10">
            {/*1st part*/}
            <div>
                {/* Logo */}
                <Logo />
                {/* Description*/}
                <p className="mt-6 text-sm text-gray-300 leading-6 font-semibold">
                    Condions term of use  Ours sercices . team list.team list.team list.team
                    list.team list.
                </p>
                {/* Social links*/}
                <div className="flex items-center space-x-4 mt-6">
                    {/* FB */}
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center 
                    flex-col cursor-pointer hover:bg-blue-600 transition-all
                 duration-300">
                        <FaFacebookF className="w-6 h-6 text-white" />
                    </div>
                    {/* Youtube */}
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center 
                    flex-col cursor-pointer hover:bg-red-600 transition-all
                 duration-300">
                        <FaYoutube className="w-6 h-6 text-white" />
                    </div>
                    {/* Instagram */}
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center 
                    flex-col cursor-pointer hover:bg-pink-600 transition-all
                 duration-300">
                        <FaInstagram className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>

            {/* Second part*/}

            <div className="lg:mx-auto">
                <h1 className="text-lg font-bold text-white">
                    Address
                </h1>
                <div className="mt-8">
                    <div className="flex mb-5 mt-5 item-center space-x-5">
                        <FaPaperPlane className="w-5 h-5 text-white" />
                        <p className="font-medium text-sm text-white">
                            Ols city, Usa <br /> 1222 new strret
                        </p>
                    </div>
                    {/* Phone */}
                    <div className="flex item-center space-x-5">
                        <FaPhone className="w-5 h-5 text-white" />
                        <p className="font-medium text-sm text-white">
                            +88 4545456552
                        </p>
                    </div>
                    <div className="flex item-center space-x-5">
                        <IoMailOpen className="w-5 h-5 text-white" />
                        <p className="font-medium text-sm text-white">
                            example@email.com
                        </p>
                    </div>
                </div>

            </div>
            {/* 3 part*/}
            <div className="lg:mx-auto">
                <h1 className="text-lg font-bold text-white">More Services</h1>
                <div className="mt-8">
                    <div className="flex items-center mb-2">
                        <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white' />
                        <p className="font-medium text-sm text-white">UH Desgign</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white' />
                        <p className="font-medium text-sm text-white">UX Desgign</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white' />
                        <p className="font-medium text-sm text-white">Web app</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white' />
                        <p className="font-medium text-sm text-white">Digital Marketing</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white' />
                        <p className="font-medium text-sm text-white">Video Editing</p>
                    </div>
                </div>
            </div>
            {/* 3 part*/}
            <div className="mx-auto">
                <h1 className="text-lg font-bold text-white">Newsletter</h1>
                <p className="font-medium text-sm text-white">
                    Subscribe to our newsletter to get the latest updates and offers delivered to your inbox.
                </p>
                <div className="mt-5 flex items-center space-x-4">
                    <Image src="/images/f.jpg" alt="" width={80} height={25} />
                    <div className="flex-1">
                        <div className="flex items-center">
                            <BiCalendar className="text-amber-300 w-6 h-6 mr-2" />
                            <p className="text-sm text-white font-semibold">
                                25 October, 2025
                            </p>
                        </div>
                        <p className="mt-2 text-white font-bold">
                            Standeart chunk of Loreum
                        </p>
                    </div>
                </div>

            </div>
            {/* Bottom Part*/}
            <div className="border-t-2 w-[80%] ms-auto border-gray-700 mt-8">
                <p className="mt-8 text-gray-300">
                    @Webdev Warriors 2025 | All Rights Reserved
                </p>
            </div>
        </div>

    )
}

export default Footer