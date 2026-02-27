import Image from "next/image";
import HeroImg from "../../../../public/older/pic15.webp";
import Stars from "@/components/Stars";

type props = {
  title: string;
  text: string;
  img: string;
};
export default function DocumHero({ title, text, img }: props) {
  return (
    <div className="mt-[6%] relative">
      <div className="hero-bg-elm"></div>
      <div className="hero-bg-elm2"></div>
      <div className="w-full px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="">
              БОДЛОГУУД <span className="text-(--prim) font-semibold">&</span>{" "}
              БИЧИГ БАРИМТУУД
              <h1 className="text-6xl lg:text-6xl CalSans my-5">{title}</h1>
              <p className="text-gray-700 GalSans text-xl w-full md:w-[80%]">
                {text}
              </p>
              <Stars />
              {/* <div className="hero-content-img absolute top-10 right-10 cursor-pointer hidden md:block">
                <i className="bi bi-play-fill"></i>
              </div> */}
            </div>
          </div>
          <div className="w-full lg:w-1/2 z-10">
            <div className="hero-image">
              <Image
                src={HeroImg}
                alt="HeroImage"
                className="w-full h-[360px] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
