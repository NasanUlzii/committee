import MoreAds from '@/components/home/MoreAds'
import { DollarSignIcon, GlassesIcon, Handshake } from 'lucide-react'
import React from 'react'
import { FaMobile } from 'react-icons/fa6'

function CarersPage() {
    return (
        <>
            <div className="md:flex md:flex-row-reverse">
                <div className="md:shrink-0 p-8">
                    <img className="h-54 w-full object-cover rounded-3xl" src="/older/pic7.jpg" alt="Carers Image" />
                </div>
                <div className="p-8">
                    <div className="text-4xl font-semibold tracking-wide text-emerald-500">We connect self-employed carers with families throughout Great Britain</div>
                    <div className="text-base mt-5">Are you passionate about transforming the lives of older people? Find out everything you need to know about joining the Elder platform as a self-employed carer.</div>
                    <div className="flex flex-row gap-8 mt-8 ">
                        <button className="bg-blue-600 text-white rounded-full w-[180] px-6 py-4">Join today</button>
                        <button className="bg-white text-blue-500 rounded-full w-[120] px-6 py-4">Call us</button>
                    </div>
                </div>
            </div>

            { /* Ads Section */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4">
                <MoreAds
                    Icon={GlassesIcon}
                    title="Find the right clients"
                    text="Browse opportunities and get custom matched to those that best fit your requirements." />
                <MoreAds
                    Icon={DollarSignIcon}
                    title="Get paid on time"
                    text="Our secure system means no more chasing invoices or delayed payments." />
                <MoreAds
                    Icon={Handshake}
                    title="Make a real difference"
                    text="Help vulnerable people get the quality care they need, in their own homes." />
                <MoreAds
                    Icon={FaMobile}
                    title="Access the ElderHub"
                    text="Apply for opportunities, chat to families, and build a schedule from our award-winning app" />
            </div>

            <div className="md:flex md: flex-row">
                <div className="md:shrink-0 p-8">
                    <img className="h-54 w-full object-cover rounded-3xl" src="/older/pic2.webp" alt="Carers Image" />
                </div>
                <div className="p-8">
                    <div className="text-3xl font-semibold tracking-wide text-emerald-200">Transform the way you find care work with Elder, an award-winning marketplace</div>
                    <div className="text-base mt-5">Are you tired of ringing round agencies or placing adverts online in order to find new home care clients? Elder has created an award-winning platform for self-employed carers that makes it easier to find and manage your care work

                        Reasons to use Elder’s introductory platform-

                        No joining fee and free access to an award-winning app
                        Browse and apply for opportunities that fit around your lifestyle
                        The care agreement is between you and the family directly, allowing you to make the most of your skills, experience and judgement. </div>

                </div>
            </div>
            <div className='p-6'>What type of opportunities can I find on the ElderHub?</div>
            <div className='p-6'><button className='bg-blue-600 text-white rounded-full px-6 py-2'>Join now</button></div>
            <div className='p-6'>
                <div><p className='text-2xl'>Live-in care</p>
                    You’ll move into your clients home to offer one-to-one support with their care needs. Average placement rate of £720 a week
                    Build your own flexible schedule
                    short and on-going placements available</div>
                <div><p className='text-2xl'>Visiting care</p>
                    You’ll provide one-on-one support through care visits.

                    Set your own hourly rate
                    Build your own flexible schedule
                    One-off and regular weekly visits available</div>
                <div>
                    <p className='text-2xl'>Access hundreds of opportunities from your phone.</p>
                    <p>Once you’ve completed a short suitability check you’ll gain access to our ElderHub app – designed exclusively for self-employed carers.

                        Easy


                        Get notified of new opportunities that meet your requirements, and apply straight from your phone.

                        Flexible


                        Set your preferences, choose when and where you work, and book breaks with ease.

                        Supportive


                        Get support around-the-clock via the carer newsfeed and help centre.

                        Efficient


                        Get real time application updates, track your payments, and easily keep your  information up-to-date.</p>
                </div>
                <img className="h-54 w-full object-cover rounded-3xl" src="/older/pic2.webp" alt="Carers Image" />
            </div>
            <div>About Elder</div>
            <div>Elder is an introductory marketplace that connects self-employed carers to families across Great Britain.

                If you’re new to a company like Elder, you may be confused about what our ‘introductory’ status means for you. In the simplest terms, we’re here to give you the tools you need to find your care clients. This means –</div>
            <div>
                {/* <MoreAds /> */}
            </div>
            <div>What do carers say about the Elder platform?</div>
            <div>
                <div>
                    <img src="/older/pic2.webp" alt="Joy" />
                </div>
                <div>Joy</div>
                <div>"Getting to spend time with my clients and talking about their lives, families, hobbies and interests is amazing"</div>
            </div>
            <div>
                <div>
                    <img src="/older/pic2.webp" alt="Joy" />
                </div>
                <div>Celeste</div>
                <div>"Getting to spend time with my clients and talking about their lives, families, hobbies and interests is amazing"</div>
            </div>
            <div className=''>
                <img className='rounded-3xl align-middle' src="/older/pic10.jpg" alt="Joy" />
            </div>
            <div>
                Become a part of the Elder community
            </div>
        </>
    )
}

export default CarersPage