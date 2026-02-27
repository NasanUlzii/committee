"use client";

import MoreAds from "@/components/home/MoreAds";
import TopHero from "@/components/home/TopHero";
import Whatis from "@/components/home/Whatis";
import {
  ChevronRightCircleIcon,
  Container,
  DollarSignIcon,
} from "lucide-react";
import React from "react";
import { CgSupport } from "react-icons/cg";
import LiveInHero from "../../UI-Components/Index/Hero/LiveInHero";
import Image from "next/image";
import contactImg from "@/public/oblivion/contact-image.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Newsletter from "../../UI-Components/Index/Newsletter/Newsletter";

const ProjectsData = [
  {
    id: 1,
    image: "/older/pic12.jpg",
    tags: ["Residential"],
    title: "Personalised, one-to-one support",
    location:
      "With live-in care, your loved one receives dedicated, round-the-clock support from a single, trusted carer. They provide personalised help with daily routines, companionship, and personal care, all tailored to individual preferences.",
    date: "14/01/2025",
  },
  {
    id: 2,
    image: "/older/pic12.jpg",
    tags: ["Residential"],
    title: "Independence and familiar surroundings",
    location:
      "Live-in care allows your loved one to stay at home, surrounded by the things, people, and memories they love. For those with dementia, this consistency can reduce confusion and anxiety while supporting confidence and independence.",
    date: "05/02/2025",
  },
  {
    id: 3,
    image: "/older/pic12.jpg",
    tags: ["Residential"],
    title: "Peace of mind for families",
    location:
      "A live-in carer offers reassurance that your loved one is safe, supported, and never alone. Families can relax knowing professional help is always on hand while independence and choice are respected.",
    date: "21/03/2025",
  },
  {
    id: 4,
    image: "/older/pic12.jpg",
    tags: ["Residential,", "Single Home"],
    title: "Flexible and cost-effective care",
    location:
      "Live-in care can be more affordable than many expect, often costing less than residential care. You only pay for the support you need, and local authority funding may help cover costs. Learn more in our guide to",
    date: "09/04/2025",
  },
  {
    id: 5,
    image: "/older/pic12.jpg",
    tags: ["Single Home"],
    title: "Social life and wellbeing",
    location:
      "Staying at home helps your loved one remain active and connected. Carers can accompany them to social events, clubs, or family visits, making it easier to maintain friendships and hobbies.",
    date: "26/05/2025",
  },
  {
    id: 6,
    image: "/older/pic12.jpg",
    tags: ["Residential"],
    title: "Better health outcomes",
    location:
      "Research shows live-in care can lead to fewer falls, faster recovery, and fewer hospital admissions. Staying at home also means keeping the same GP and healthcare team for consistent, trusted support.",
    date: "14/06/2025",
  },
  {
    id: 7,
    image: "/older/pic12.jpg",
    tags: ["Residential"],
    title: "Couples can stay together",
    location:
      "Separating elderly couples when one can no longer cope can be painful. Live-in care allows them to stay together as a single carer can ensure the needs of both are taken care of, only assisting where required.",
    date: "28/07/2025",
  },
];

function LiveInCatePage() {
  return (
    <div>
      <LiveInHero />
      {/* What is */}

      {/* What is*/}
      <div className="px-[8%] lg:px-[12%] py-20 about">
        <div className="mt-10">
          <div className="flex justify-between items-center flex-col lg:flex-row gap-15">
            <div className="w-full lg:w-1/2">
              <Image
                src={contactImg}
                alt="contactImg"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-0">
              <h2 className="text-4xl md:text-5xl CalSans my-5 hover:text-(--prim) transition-all duration-300">
                <p>What is live-in care?</p>
              </h2>

              <p className="text-gray-500 GolosText">
                Live-in care is a type of home care where a dedicated carer
                moves into the home to provide 24-hour support. It’s a
                personalised alternative to a care home, helping with daily
                tasks like washing, dressing, taking medication, cooking, and
                housekeeping – all in the comfort of your loved one's home.
                Live-in carers also provide companionship, emotional reassurance
                and household support. From supporting mobility and running
                errands to being there for a friendly chat, live-in care means
                someone is always on hand. Because care is tailored to the
                elderly’s needs and preferences, many families choose live-in
                care to stay independent, maintain routines, and enjoy
                one-to-one support in familiar surroundings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="px-[8%] lg:px-[12%] py-20 about">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-3xl md:text-4xl w-full lg:w-[60%]">
              What are the benefits of live-in care?
            </h1>
          </div>
          <div>
            Live-in care offers a safe and flexible alternative to residential
            care, allowing people to receive full-time support in the comfort of
            their own home. From practical help with everyday tasks to emotional
            support and companionship, there are many reasons families choose
            this type of care.
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          modules={[Autoplay]}
          speed={1800}
          breakpoints={{
            1200: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className="mt-30"
        >
          {ProjectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card group">
                <Link href={`/UI-Components/Projects/${project.id}`}>
                  <div className="project-image relative w-full h-[500px] overflow-hidden rounded-2xl cursor-pointer">
                    <div
                      className="project-img w-full h-full bg-cover group-hover:scale-110 transition-all duration-500 bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div className="absolute top-5 left-5 flex gap-2 z-50">
                      {project.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="bg-white/20 backdrop-blur-sm text-white border border-gray-300 px-4 py-1 rounded-full hover:bg-(--prim) hover:border-transparent transition-all duration-300"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
                <div className="project-info my-5">
                  <Link href={`/UI-Components/Projects/${project.id}`}>
                    <h2 className="GolosText font-semibold text-4xl hover:text-(--prim) transition-all duration-300">
                      {project.title}
                    </h2>
                  </Link>
                  <h5 className="GolosText text-2xl mt-2">
                    {project.location}
                  </h5>
                  <p className="GolosText text-md text-gray-700">
                    {project.date}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Newsletter />
    </div>
  );
}

export default LiveInCatePage;
