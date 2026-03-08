import Image from "next/image";
import Link from "next/link";

import contactImg from "@/public/oblivion/contact-image.jpg";

export default function Contact() {
  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText mt-15">Холбоо барих</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Холбоо барих</h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-20 about">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold">
              холбогдох
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl ">
              Have a Project in{" "}
              <span className="text-(--prim)">
                Хэн нэгийг асруулмаар байна уу?{" "}
              </span>{" "}
              Бидэнтэй холбогд
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h2 className="text-gray-400 CalSans tracking-wider">Хаяг:</h2>
              <p className="GolosText text-xl mt-5">
                141/3 29 хороо, Сонгинохайрхан дүүрэг, Улаанбаатар, Монгол Улс
              </p>
            </div>
            <div>
              <h2 className="text-gray-400 CalSans mb-5 tracking-wider">
                Тусламж авах
              </h2>
              <span className="text-(--prim) font-bold">+(976) 9901300882</span>
              <p className="GolosText text-2xl font-bold">support@medics.mn</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex justify-between items-center flex-col lg:flex-row gap-15">
            <div className="w-full lg:w-1/2">
              <Image
                src={contactImg}
                alt="contactImg"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Бүтэн нэр*</label>
                  <input
                    type="text"
                    placeholder="Бүтэн нэр*"
                    className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Утасны дугаар*</label>
                  <input
                    type="text"
                    placeholder="Утасны дугаар*"
                    className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">
                    Харилцах Мэйл хаяг*
                  </label>
                  <input
                    type="text"
                    placeholder="Харилцах Мэйл хаяг*"
                    className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Товч утга*</label>
                  <input
                    type="text"
                    placeholder="Би ......"
                    className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col GolosText mt-5">
                <label className="font-semibold mb-2">Таны зурвас *</label>
                <textarea
                  placeholder="Таны зурвас *"
                  rows={5}
                  className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                ></textarea>
              </div>
              <div className="mt-5">
                <button className="px-5 py-3 bg-white border border-gray-300 rounded-lg GolosText font-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer">
                  Илгээх
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map h-[600px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908.0222481455492!2d106.8265159875701!3d47.91226274153644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96edd1b6330773%3A0x56513bbd8555d69c!2z0KHQsNC80YHQsNGA0LAg0KPQu9Cw0LzQttC70LDQu9GCINGN0LzQvdGN0LvRjdCz!5e0!3m2!1sen!2smn!4v1772580699358!5m2!1sen!2smn"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
