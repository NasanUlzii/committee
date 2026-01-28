import React from 'react'

type Props = {
   title: string;
   text: string;
   buttonText: string;
   }  

function TopHero({title, text, buttonText}: Props) {
  return (
    <div className="px-4 md:px-0 md:pt-8 md:flex md: flex-row-reverse">
        <div className="md:shrink-0">
          <img className="h-54 md:h-76 md:min-w-2xl w-full object-cover rounded-3xl" src="/older/pic1.webp" alt="Older Image" />
        </div>
        <div className="mt-4">
          <div className="font-quicksand text-3xl md:text-4xl font-thin tracking-wide text-foreground">{title}
          </div>
          <div className="text-base mt-5">{text}
          </div>
          <div className="flex flex-row gap-8 mt-8 ">
            <button className="bg-blue-600 text-white rounded-full w-[180] px-6 py-3">{buttonText}</button>
            <button className="bg-white text-blue-500 rounded-full w-[120] px-6 py-4">Call us</button>
          </div>
        </div>
      </div>
  )
}

export default TopHero