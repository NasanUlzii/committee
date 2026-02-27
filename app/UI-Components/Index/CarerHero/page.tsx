import Link from "next/link";
import React from "react";
import Image from "next/image";
import HeroImg from "../../../../public/older/pic1.webp";
import { DollarSignIcon } from "lucide-react";
import Stars from "@/components/Stars";
const PricingPlansData = [
  {
    id: "1",
    plan: "Find the right clients",
    desc: "Browse opportunities and get custom matched to those that best fit your requirements.",
  },
  {
    id: "2",
    plan: "Get paid on time",
    desc: "Our secure system means no more chasing invoices or delayed payments.",
  },
  {
    id: "3",
    plan: "Make a real difference",
    desc: "Help vulnerable people get the quality care they need, in their own homes.",
  },
  {
    id: "4",
    plan: "Access the ElderHub",
    desc: "Apply for opportunities, chat to families, and build a schedule from our award-winning app",
  },
];
export default function CarerHero() {
  return (
    <div className="hero">
      <div className="hero-bg-elm"></div>
      <div className="hero-bg-elm2"></div>
      <div className="w-full px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="">
              <span className="hero-span border border-gray-400 GolosText font-bold px-5 py-2 rounded-full">
                Trusted Carer Partner
              </span>
              <h1 className="text-6xl lg:text-6xl CalSans my-5">
                We connect self-employed carers{" "}
                <span className="text-(--prim)">
                  with families throughout Great Britain
                </span>
              </h1>
              <p className="text-gray-700 GolosText w-full md:w-[60%]">
                Are you passionate about transforming the lives of older people?
                Find out everything you need to know about joining the Elder
                platform as a self-employed carer.
              </p>
              <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText font-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer group">
                <Link href="/">
                  Apply Now <i className="bi bi-arrow-right ps-1"></i>
                </Link>
              </button>
              <Stars />
              <div className="hero-content-img absolute top-10 right-10 cursor-pointer hidden md:block">
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 z-10">
            <div className="hero-image">
              <Image
                src={HeroImg}
                alt="HeroImage"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 h-full mt-10">
          <div className="w-full lg:w-1/1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PricingPlansData.map((plan, index) => (
                <div
                  key={index}
                  className="pricing-card bg-white shadow p-5 rounded-2xl"
                >
                  <div className="flex flex-row gap-4 ">
                    <DollarSignIcon className="h-6 w-6 text-[#b69974]" />
                    <h2 className="GolosText font-semibold text-3xl mb-5">
                      {plan.plan}
                    </h2>
                  </div>
                  <p className="text-gray-500 text-[15px] lg:text-[20px]">
                    {plan.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
