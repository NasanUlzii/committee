import React from 'react'

function page() {
    return (
        <>
            <div className="md:flex md: flex-row-reverse">
                <div className="md:shrink-0 p-8">
                    <img className="h-54 w-full object-cover rounded-3xl" src="/older/pic15.webp" alt="Older Image" />
                </div>
                <div className="p-8">
                    <div className="text-3xl font-semibold tracking-wide text-foreground">Elder's Documents and Policies
                    </div>
                    <div className="text-base mt-5">Discover the policies that guide how we care, ensuring every Elder experience is safe, fair, and built on trust.
                    </div>

                </div>
            </div>
            <div className='md:flex flex-row'>
                <div className='border border-2 rounded-3xl m-6 p-6'>
                    <div>01</div>
                    <div>General</div>
                    <div>Elder’s Safeguarding Policy</div>
                    <div>Respect & Anti-discrimination Policy</div>
                    <div>Community Standards</div>
                    <div>Safety & Trust at Elder</div>
                    <div>Complaints Policy</div>
                </div>
                <div className='border border-2 rounded-3xl mx-6 p-6'>
                    <div>02</div>
                    <div>Carers</div>
                    <div>Expected Carer Standards</div>
                    <div>What self-employed carers can expect from a placement</div>
                    <div>What self-employed carers can expect from Elder</div>
                    <div>Carer's Privacy Policy</div>
                    <div>Carer's Terms and Conditions</div>
                </div>
                <div className='border border-2 rounded-3xl m-6 p-6'>
                    <div>03</div>
                    <div>Customers</div>
                    <div>Quick guide for customers</div>
                    <div>Privacy policy</div>
                    <div>Terms and Conditions</div>

                </div>
            </div>
        </>
    )
}

export default page