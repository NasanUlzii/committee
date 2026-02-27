import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  icon: string;
  title: string;
  subTitle: string;
  text_1: string;
  text_2: string;
  text_3: string;
  linkText: string;
};
const ServiceCard = ({
  icon,
  image,
  title,
  subTitle,
  text_1,
  text_2,
  text_3,
  linkText,
}: Props) => {
  return (
    <div className="roinded-lg group overflow-hidden bg-white">
      <Image src={image} width={300} height={179} alt="img" />
      <div className="p-4">
        <div
          className="w-22 h-22 -mt-14 relative group-hover:bg-black transition-all duration-200
                 z-10 ml-auto rounded-lg flex items-center justify-center flex-col bg-[#b69974]"
        >
          <Image src={icon} alt="icon" width={60} height={60} />
        </div>
        {/*Removed*/}
        {/* <div className="w-16 mt-6 h-px bg-red-700"></div> */}
        <h1 className="text-(--prim) mt-2 text-lg">{title}</h1>
        <p className="text-gray-800 font-semibold text-[15px] GolosText">
          {subTitle}
        </p>
        <div className="flex flex-col gap-2 my-5">
          <p className="text-gray-400 font-semibold text-[15px] GolosText">
            <i className="bi bi-check-circle-fill text-(--prim)"></i> {text_1}
          </p>
          <p className="text-gray-400 font-semibold text-[15px] GolosText">
            <i className="bi bi-check-circle-fill text-(--prim)"></i> {text_2}
          </p>
          <p className="text-gray-400 font-semibold text-[15px] GolosText">
            <i className="bi bi-check-circle-fill text-(--prim)"></i> {text_3}
          </p>
        </div>
        <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText font-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer group">
          <Link href={`/${linkText}`}>
            Дэлгэрэнгүй <i className="bi bi-arrow-right ps-1"></i>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
