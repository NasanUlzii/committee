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

function CarouselCom() {
    return (
        <Carousel className="bg-background w-full border border-none">
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1">
                        <Card className='border-none bg-background'>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">
                                    <img height={260} width={128} src="/older/pic3.webp" alt="Carousel Image" />
                                </span>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='font-semibold pb-2 '>Capture and Manage reciepent deatails</div>
                    <div>Keep healthcare details up to date and in one place to ensure safe and sufficient care delivery for you.</div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <Card className='border-none bg-background'>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">
                                    <img height={260} width={128} src="/older/pic4.webp" alt="Carousel Image" />
                                </span>
                            </CardContent>
                        </Card>
                    </div>
                    <div>Capture and Manage reciepent deatails</div>
                    <div>Keep healthcare details up to date and in one place to ensure safe and sufficient care delivery for you.</div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <Card className='border-none bg-background'>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">
                                    <img height={260} width={128} src="/older/pic5.webp" alt="Carousel Image" />
                                </span>
                            </CardContent>
                        </Card>
                    </div>
                    <div>Capture and Manage reciepent deatails</div>
                    <div>Keep healthcare details up to date and in one place to ensure safe and sufficient care delivery for you.</div>
                </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
            <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />


        </Carousel>
    )
}

export default CarouselCom