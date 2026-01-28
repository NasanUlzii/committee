'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function CarouselText() {
    return (
        <Carousel className="bg-dark-300 w-full max-w-xs border-dark-300">
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                <div className='font-semibold pb-2 '>Capture and Manage reciepent deatails</div>
                                <div>Keep healthcare details up to date and in one place to ensure safe and sufficient care delivery for you.</div>
                            </CardContent>
                        </Card>
                    </div>

                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                <div className='font-semibold pb-2 '>Capture and Manage reciepent deatails</div>
                                <div>Keep healthcare details up to date and in one place to ensure safe and sufficient care delivery for you.</div>
                            </CardContent>
                        </Card>
                    </div>

                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                <div className='font-semibold pb-2 '>Capture and Manage reciepent deatails</div>
                                <div>Keep healthcare details up to date and in one place to ensure safe and sufficient care delivery for you.</div>
                            </CardContent>
                        </Card>
                    </div>

                </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
            <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />


        </Carousel>
    )
}

export default CarouselText