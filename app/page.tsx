'use client'

import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import { UserButton } from "@clerk/nextjs";
import Aos from "aos";
import 'aos/dist/aos.css';
import Contact from "@/components/home/Contact"
import { useEffect } from "react";
import { StatCard } from "@/components/StatCard";
import MoreAds from "@/components/home/MoreAds";
import Questions from "@/components/home/Questions";
import Carousel from "@/components/home/Carousel";
import CarouselText from "@/components/home/CarouselText";
import { ChevronRightCircleIcon, Container, DollarSignIcon, HomeIcon } from "lucide-react";
import { CgSupport } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiHealth } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";
import TopHero from "@/components/home/TopHero";

export default function HomePage() {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      Aos.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      })
    }
    initAOS();
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between sm:items-start">
      {/* Hero Section */}
      
      <TopHero 
        title="Find the right carer and keep the life you know and love"
        text="Elder is an award-winning marketplace connecting families and self-employed home carers across Great Britain."
        buttonText="Find a carer"
      />

      {/* Ads Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-3 md:mx-0 gap-6">
        <MoreAds
          Icon={DollarSignIcon}
          title="More Value"
          text="On average, services facilitated by Elder are 35% cheaper than traditional alternatives." 
          height={36}/>
        <MoreAds
          Icon={Container}
          title="More control"
          text="Whenever and however you need it, you set the scope of your service." 
          height={36} />
        <MoreAds
          Icon={ChevronRightCircleIcon}
          title="More choice"
          text="Pick your favourite self-employed carer from personalised matches." 
          height={36}/>
        <MoreAds
          Icon={CgSupport}
          title="More support"
          text="Use our platform to plan and manage care from anywhere, and chat to 5* rated support teams." 
          height={36}/>
      </div>
      {/* Stats Section */}

      <Questions />
      <Services />

      {/* Carousel Section */}
      {/* <p className="">
        MyElder is the only solution you need to arrange and manage care
      </p> */}
        {/* <Carousel /> */}
      {/* Benefites section */}

      <div className="md:flex md:flex-row-reverse py-4">

        <div className="p-2">
          <img className="rounded-3xl" src="/older/pic6.webp" alt="Banner Image" />
        </div>
        <div className="">
          <div className="font-quicksand text-3xl md:text-4xl font-thin tracking-wide text-foreground mb-4">The benefits of live-in care</div>
          <div className="font-quicksand text-sm md:text-sm font-thin tracking-wide text-foreground/60">
            Why 9 out of 10 elderly people would prefer to be cared for in their own home.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <MoreAds
              Icon={FaPeopleGroup}
              title="Personalised care"
              text="Live-in care means a focus solely on your loved one: care tailored to their unique needs and wants, from a familiar face, 7 days a week." 
              height={70}/>
            <MoreAds
              Icon={HomeIcon}
              title="Better life quality"
              text="Care at home allows the elderly to preserve their independence, routines and friendships. 97% of people receiving it say it’s improved their quality of life." 
              height={70}/>
            <MoreAds
              Icon={MdHealthAndSafety}
              title="Lower health risks"
              text="Moving to a care home often causes anxiety, whilst the unfamiliar location is proven to increase the chance of life-changing falls by 50%." 
              height={70}/>
          </div>
        </div>
      </div>
      <div className="bg-neutral-800">
        <div className="font-semibold items-center">Qualified carers for peace of mind</div>
        <div className="p-2">All carers on Elder pass a rigorous screening which includes a background check, character and skills assessment, and verifiable professional references. Only 2% of applicants are successful. As a result, 9 out of 10 customers are very satisfied with their first carer.</div>
      </div>
      <div className="p-8"><CarouselText /></div>
    </main>
    </div>
  );
}