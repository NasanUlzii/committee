"use client";

import React from "react";
import Image from "next/image";
import ServiceCard from "../../../../components/home/ServiceCard";

const Services = () => {
  return (
    <div className="px-[8%] lg:px-[12%] bg-[#241C18] pt-20 pb-20 relative">
      <Image
        src={"/images/service_bg.png"}
        width={300}
        height={300}
        alt="bgsrc"
        className="absolute right-0"
      />
      <div className="w-full mx-auto">
        <h1 className="text-[#eeb956] text-3xl md:text-3xl font-medium tracking-widest">
          Манай үйлчилгээнүүд
        </h1>

        <div
          className="grid mt-16  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
                items-center"
        >
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
          >
            <ServiceCard
              image="/older/services_3.webp"
              icon="/images/sicon1.png"
              title="Гэрт нь асрах үйлчилгээ"
              subTitle="Урт хугацааны 24 цагийн тасралтгүй дэмжлэг"
              text_1="Асрагч нь үйлчлүүлэгчийн гэрт байрлан, 24 цагийн турш тасралтгүй дэмжлэг, асаргаа үзүүлдэг"
              text_2="Демент зэрэг эмгэг, хөдөлгөөний хязгаарлалт болон бусад ижил төрлийн эрүүл мэндийн нөхцөлтэй иргэдэд тохиромжтой"
              text_3="Урт хугацааны асаргаа, сувилгаа шаардлагатай тохиолдолд "
              linkText="live-in-care"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <ServiceCard
              image="/older/services_2.jpg"
              icon="/images/sicon2.png"
              title="Түр хугацааны асаргаа"
              subTitle="Түр хугацааны 24 цагийн тасралтгүй дэмжлэг"
              text_1="Асрагч нь үйлчлүүлэгчийн гэрт байрлан, 3-7 хоногийн турш тасралтгүй дэмжлэг, асаргаа үзүүлдэг"
              text_2="Үндсэн асрагчийн орлуулалт эсвэл асаргааны шаардлагын түр хугацааны нэмэгдэл боломжтой"
              text_3="Хамгийн бага хугацаа 3 хоног"
              linkText="respite-care-for-the-elderly"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ServiceCard
              image="/older/services_3.webp"
              icon="/images/sicon3.png"
              title="Тогтмол асрах үйлчилгээ"
              subTitle="Гэрийн нөхцөлд очиж үзүүлэх асаргаа"
              text_1="Өөрийн гэрийн тав тухтай орчинд шаардлагатай хэмжээгээр цаг захиалан асаргаа, дэмжлэг авах боломжтой"
              text_2="Өдөр тутмын үйл ажиллагаанд, тухайлбал хувийн ариун цэвэр сахих, салхинд гарах, хоол бэлтгэх зэрэгт дэмжлэг үзүүлэх"
              text_3="Долоо хоног бүр хамгийн багадаа 1 цагийн үйлчилгээ авах боломжтой"
              linkText="visiting"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ServiceCard
              image="/older/pic17.jpg"
              icon="/images/sicon4.png"
              title="Эмнэлгийн орчинд асрах үйлчилгээ"
              subTitle="Тодорхой хугацаагаар гадуур асрах"
              text_1="Эмнэлгийн орчинд тусгайлан асрах үйлчилгээ нь үйлчлүүлэгчид эмнэлгийн орчинд тодорхой хугацаагаар асаргаа, дэмжлэг үзүүлэх боломжийг олгодог"
              text_2="Шинжилгээ, эмчилгээ, сэргээн засах зэрэгт дэмжлэг үзүүлэхэд тохиромжтой"
              text_3="Долоо хоног бүр хамгийн багадаа 5 өдрийн үйлчилгээ авах боломжтой"
              linkText="hospital"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
