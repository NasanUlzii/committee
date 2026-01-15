'use client'

import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import { UserButton } from "@clerk/nextjs";
import Aos from "aos";
import 'aos/dist/aos.css';
import Contact from "@/components/home/Contact"
import { useEffect } from "react";

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
    <div className="overflow-hidden">
      <Hero />
      {/* <About /> */}
      <Services />
      <Contact />
      {/* <div><UserButton /></div> */}
    </div>
  );
}