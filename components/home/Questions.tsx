import React from 'react'
import LongTextButton from '../buttons/LongTextButton'

function Questions() {
    return (
        <div className="border border-indigo-200 rounded-4xl p-5 space-y-3 mt-12 mx-3 md:mx-0 w-full">
            <div className='h-screen flex flex-col gap-4 items-center  mt-0'>
            <div className='font-quicksand font-thin text-3xl text-center mt-8'>To help us find you the right carer, we just <br/> need to ask a few questions</div>
            <div className='font-quicksand font-thin text-md'>What type of care are you looking for?</div>
            {/* <div>Live-in care</div>
            <div>Respite care</div>
            <div>Visiting care</div> */}
            <div className='space-y-8 mt-12'>
            <LongTextButton title="Live-in care" infoText='A carer moves in to your home and stays long-term'/>
            <LongTextButton title="Respite care" infoText='A carer moves in to your home temporarily'/>
            <LongTextButton title="Visiting care" infoText='You would like a carer to visit for a few hours a day'/>
            <div className='text-center text-lg font-semibold'>or</div>
            </div>
            {/* <div>I am carer looking for care work</div> */}
            <div className='mt-8'>
            <LongTextButton title="I am carer looking for care work" infoText=''/>
            </div>
            </div>
        </div>
    )
}

export default Questions