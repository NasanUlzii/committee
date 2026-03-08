import MoreAds from "@/components/home/MoreAds";
import TopHero from "@/components/home/TopHero";
import { DollarSignIcon, GlassesIcon, Handshake, Link } from "lucide-react";
import React from "react";
import { FaMobile } from "react-icons/fa6";
import CarerHero from "../UI-Components/Index/CarerHero/page";
import HeroImg from "../../public/older/pic1.webp";
import Blogs from "../UI-Components/Index/Blogs/page";
import Image from "next/image";
import Newsletter from "../UI-Components/Index/Newsletter/Newsletter";

function CarersPage() {
  return (
    <>
      <CarerHero />

      {/*Satrt*/}

      <div className="w-full px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div className="w-full lg:w-1/3 z-10">
            <div className="hero-image">
              <Image
                src={HeroImg}
                alt="HeroImage"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3 relative">
            <div className="">
              <h1 className="text-6xl lg:text-6xl CalSans my-5">
                Transform the way you find care work with Elder{" "}
                <span className="text-(--prim)">
                  an award-winning marketplace
                </span>
              </h1>
              <p className="text-gray-700 GolosText w-full md:w-[60%]">
                Are you tired of ringing round agencies or placing adverts
                online in order to find new home care clients? Elder has created
                an award-winning platform for self-employed carers that makes it
                easier to find and manage your care work Reasons to use Elder’s
                introductory platform- No joining fee and free access to an
                award-winning app Browse and apply for opportunities that fit
                around your lifestyle The care agreement is between you and the
                family directly, allowing you to make the most of your skills,
                experience and judgement.{" "}
              </p>
              <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText font-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer group">
                <Link href="/trustee">
                  Join Now <i className="bi bi-arrow-right ps-1"></i>
                </Link>
              </button>
              <div className="hero-content-img absolute top-10 right-10 cursor-pointer hidden md:block">
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*End*/}
      <Blogs />

      <Newsletter />
    </>
  );
}

export default CarersPage;
