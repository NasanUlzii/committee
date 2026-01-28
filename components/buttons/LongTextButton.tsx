import React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '../ui/button'
import { InfoIcon } from 'lucide-react'

type Props = {
    title: string;
    infoText: string;
}

function LongTextButton({title, infoText}: Props) {
  return (
    
    <div className='flex flex-row items-center gap-4'>
    <div>
        <button className="bg-white text-neutral-900 rounded-2xl w-[482] p-6 font-quicksand">{title}</button>
    </div>
    <div>
         <Tooltip>
      <TooltipTrigger asChild>
        
          <InfoIcon />
   
      </TooltipTrigger>
      <TooltipContent side='bottom' className="pr-1.5">
        <div className="flex items-center gap-2 bg-amber-200 text-emerald-950">
          {infoText}
        </div>
      </TooltipContent>
    </Tooltip>
    </div>
    </div>
  )
}

export default LongTextButton