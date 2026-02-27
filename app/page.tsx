"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Index from "./UI-Components/Index";

export default function HomePage() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      Aos.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <>
      <Index />
    </>
  );
}
