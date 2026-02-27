"use client";
import { useState } from "react";
import Image from "next/image";
import faqBanner from "@/public/oblivion/faq-banner.jpg";

const faqData = [
  {
    id: "01",
    question: "Асрагч нар ямар сургалтанд хамрагдах вэ?",
    answer: `Асрагч бүр манай ярилцлагын шат дамжлагыг амжилттай давж, дараах баримт бичиг, нотолгоог бүрдүүлэх шаардлагатай. Үүнд:

– Баталгаажих боломжтой дор хаяж 2 тодорхойлолт
– Хамгийн багадаа 6 сарын ажлын туршлагын жишээ, нотолгоо
– Өргөтгөсөн DBS (Disclosure and Barring Service) гэрчилгээ

Бид танилцуулгын үйлчилгээ үзүүлэгч байгууллагын хувьд захиалгат (тусгай) сургалт зохион байгуулах боломжгүй. Гэсэн хэдий ч манай асрагчийн үнэнч хэрэглэгчийн хөтөлбөрийн хүрээнд, платформоор дамжуулан идэвхтэй ажил авдаг асрагчид гуравдагч этгээдийн онлайн сургалтын платформд хандах эрхтэй бөгөөд үүгээр дамжуулан мэргэжлийн ур чадвараа дээшлүүлэх боломжтой.

Бид таны шаардлагад нийцсэн ур чадвар, туршлагад үндэслэн тохирох асрагчийг санал болгодог. Жишээлбэл, хэрэв таны хайртай хүн демент өвчтэй бол тухайн эмгэгтэй хүнийг асарч байсан туршлагатай хувиараа хөдөлмөр эрхэлдэг асрагчидтай л таныг холбох болно.

Мөн бид гэр бүлүүдийн санал хүсэлтэд үндэслэн хамтран ажиллах асрагчдыг тогтмол үнэлж, дахин хянаж байдаг.`,
  },
  {
    id: "02",
    question: "Бид асрагтайгаа урьдачлан танилцаж болох уу?",
    answer: `Танд тохирсон асрагч бүрийн танилцуулга видеог бид заавал илгээх болно. Уг видеонд асрагч өөрийн боловсрол, ажлын туршлага, асрагчаар ажиллахын давуу тал болон өөрийн сонирхол, хоббигийн талаар танилцуулна.

Та асрагчаа сонгосны дараа, түүнийг ирэхээс өмнө илүү сайн танилцах боломжийг бүрдүүлэх үүднээс Zoom зэрэг цахим уулзалтыг зохион байгуулахад бид таатай байх болно.`,
  },
  {
    id: "03",
    question: "Асаргааны ажил хэр хурдан шийдэгдэх вэ?",
    answer: `Бид Улаанбаатар даяар 60 гаруй бие даасан асаргаа, сувилгаа үйлчилгээний мэргэжилтнээс бүрдсэн өргөн сүлжээтэй. Мөн гэр бүлүүдийг асрагч нартай амжилттай холбосон туршлагатай. Ийм өргөн хүрээний сүлжээний ачаар, яаралтай хэрэгцээ үүссэн тохиолдолд асаргаа, дэмжлэгийг ихэнхдээ 24–48 цагийн дотор зохион байгуулах боломжтой.

Ийм өргөн хүрээний сүлжээний ачаар, яаралтай хэрэгцээ үүссэн тохиолдолд асаргаа, дэмжлэгийг ихэнхдээ 24–48 цагийн дотор зохион байгуулах боломжтой.`,
  },
  {
    id: "04",
    question: "Асрагч нар эмийг хэрхэн зохицуулах вэ?",
    answer: `Тийм, хэрэв эм нь хяналттай эмийн ангилалд хамаарахгүй бол боломжтой. Асрагчид эмийг уухыг сануулах, дэмжлэг үзүүлэх эрхтэй боловч хяналттай эм, тарилгын эмчилгээг биечлэн хийх эрхгүй.

Хэрэв энэ нь зайлшгүй шаардлага бол эмнэлзүйн мэргэжлийн сургалттай асрагч ажиллуулахын оронд үндсэн асрагчийн хажуугаар сувилагчийг давхар ирүүлэн үйлчилгээ авах нь санхүүгийн хувьд илүү зохистой шийдэл байж болно.`,
  },
  {
    id: "05",
    question: "Бид ээлж болгонд өөр өөр асрагч авч байх уу?",
    answer: `Үгүй. Бид насанд хүрэгчдэд тогтсон дэглэм, тогтвортой байдал чухал болохыг ойлгож, таныд ирэх асрагчдын тоог аль болох цөөн байлгахыг эрмэлздэг. Мөн энэ нь асрагчдад ажлаа илүү үр дүнтэй гүйцэтгэх боломжийг олгодог бөгөөд тэд үүндээ бахархдаг.`,
  },
  {
    id: "06",
    question: "Хамгийн багадаа хэдэн цагийн асаргаа авч болох вэ?",
    answer: `Та хамгийн багадаа 3 цагийн захиалга хийх боломжтой. Гэсэн хэдий ч хэрэв та олон цагийн асаргаа шаардлагатай бол, таны хэрэгцээнд илүү тохиромжтой байж болох гэрт байрлан асрах үйлчилгээ-г санал болгодог. Манай асаргаа зөвлөхүүд үүний талаар дэлгэрэнгүй мэдээлэл өгч чадна, итгэлгүй байвал бидэн рүү утасдаарай.`,
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-7 py-2 GolosText uppercase font-semibold">
              Хэрэгцээт асуултууд
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl mb-5">
              Таны үйлчилгээтэй холбоотой{" "}
              <span className="text-(--prim)"> Товч тодорхой зарим</span>{" "}
              хариултууд
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 py-10">
          <div className="w-full lg:w-1/1">
            <div className="space-y-4 w-full">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`overflow-hidden py-2 transition-all duration-300 border-b border-gray-300 ${
                    openIndex === index ? "" : " "
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    <div className="faq-heading flex items-center gap-5">
                      <h3 className="text-3xl font-semibold text-(--prim)">
                        {item.id}
                      </h3>
                      <span className="text-2xl md:text-3xl GolosText font-semibold text-gray-800 ">
                        {item.question}
                      </span>
                    </div>

                    {openIndex === index ? (
                      <i className="bi bi-dash text-(--prim) text-3xl transition-all duration-300"></i>
                    ) : (
                      <i className="bi bi-plus text-(--prim) text-3xl transition-all duration-300"></i>
                    )}
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === index
                        ? "max-h-[300px] opacity-100 py-3"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    <p className="GolosText px-7">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 pt-5">
            <div className="faq-card flex flex-col md:flex-row lg:flex-col  md:items-center items-start gap-6">
              <Image
                src={faqBanner}
                alt="faq-banner"
                className="rounded-2xl mb-5"
              />
              <div className="flex flex-col">
                <h2 className="capitalize text-3xl CalSans mb-5">
                  Өөр асуулт байвал бидэнтэй холбогдоорой!
                </h2>
                <p className="text-gray-400 text-lg GolosText">
                  Манай баг таньд туслахдаа баяртай байх болно. Та бидэнтэй
                  холбоо барихыг хүсвэл, доорх холбоо барих мэдээллийг ашиглан
                  бидэнтэй холбогдоорой.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
