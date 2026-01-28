import React from 'react'

type Props = {
    image: string;
    title: string;
}
function PictextControl({ image, title }: Props) {

    return (
        <div className='grid mt-16  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
                items-center'>
            <div className='bg-zinc-900 rounded-4xl p-2 m-6 text-center'>
                <img className='rounded-t-4xl w-full p-6' src={image} alt=''></img>
                <p className='text-wrap text-3xl'>{title}</p>
            </div>
        </div>
    )
}

export default PictextControl