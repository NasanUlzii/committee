import TopHero from "@/components/home/TopHero";
import PicTextFour from "@/components/PicTextFour";
import React from "react";
import DocumHero from "../../UI-Components/Index/Hero/DocumHero";

function page() {
  return (
    <>
      <DocumHero title="Гомдол хүлээн авах" text="" img="/older/pic13.jpg" />
      <div className="w-full px-[8%] lg:px-[12%] py-10 mt-0 md:mt-[2%] text-2xl GolosText">
        <p>
          **Зорилго ба Хамрах хүрээ** Elder нь Асаргаа хүлээн авагчид,
          Үйлчлүүлэгчид, Асран хамгаалагчид болон Elder платформыг ашиглаж буй
          бүх хүний туршлагын чанарыг тасралтгүй сайжруулахыг эрмэлздэг. Бид бүх
          төрлийн санал хүсэлт, гомдлыг хүлээн авч, тэдгээрийг зохих журмын
          дагуу нягтлан шалгаж, шийдвэрийн талаар тохирох хугацаанд мэдээлэхийг
          баталгаажуулна. --- ## Гомдол гаргах журам Аливаа санал, гомдлыг
          бичгээр дараах байдлаар гаргаж болно: **Шуудангаар:** Elder Complaints
          230, City Road London EC1V 2TT **И-мэйлээр:**
          [complaints@elder.org](mailto:complaints@elder.org) --- ## Гомдлыг
          шийдвэрлэх үйл явц Гомдол хүлээн авсны дараа Elder аль болох богино
          хугацаанд хүлээн авсныг баталгаажуулна. Дараа нь уг гомдлыг
          Харилцагчийн дансны удирдлагын албаны дарга хянан хэлэлцэнэ. Elder нь
          гомдол гарснаас хойш гурван долоо хоногийн дотор урьдчилсан дүгнэлт,
          хариуг өгөхийг зорьдог. Хэрэв та уг хариунд сэтгэл хангалуун бус
          байвал асуудлыг Elder-ийн Ахлах засаглалын багт шилжүүлэн дахин
          хянуулах боломжтой. Тус баг нэмэлт хоёр долоо хоногийн дотор эцсийн
          хариуг өгнө. --- ## Гомдлын бүртгэл Elder нь гаргасан бүх гомдлын
          талаарх мэдээллийг хадгална. Үүнд: * Гомдлын дэлгэрэнгүй мэдээлэл *
          Гомдол гаргасан этгээдийн мэдээлэл * Гомдлын агуулга * Шийдвэр, үр дүн
          * Шийдвэрийн хариу албан бичгийг илгээсэн огноо Эдгээр мэдээллийг
          зохих журмын дагуу бүртгэн хадгална.
        </p>
        <div className="flex flex-col lg:flex-row w-full justify-center gap-6 px-4">
          <PicTextFour
            linkText="What self-employed carers can expect from Elder"
            pic="/older/pic1.webp"
            href="/documentation/what-self-employed-carers-can-expect-from-elder"
          />
          <PicTextFour
            linkText="What self-employed carers can expect from Elder"
            pic="/older/pic1.webp"
            href="/documentation/what-self-employed-carers-can-expect-from-elder"
          />
          <PicTextFour
            linkText="What self-employed carers can expect from Elder"
            pic="/older/pic1.webp"
            href="/documentation/what-self-employed-carers-can-expect-from-elder"
          />
          <PicTextFour
            linkText="What self-employed carers can expect from Elder"
            pic="/older/pic1.webp"
            href="/documentation/what-self-employed-carers-can-expect-from-elder"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center gap-6 px-4">
          <PicTextFour
            linkText="What self-employed carers can expect from Elder"
            pic="/older/pic1.webp"
            href="/documentation/what-self-employed-carers-can-expect-from-elder"
          />
          <PicTextFour
            linkText="What self-employed carers can expect from Elder"
            pic="/older/pic1.webp"
            href="/documentation/what-self-employed-carers-can-expect-from-elder"
          />
          <PicTextFour
            linkText="What self-employed carers can expect from Elder"
            pic="/older/pic1.webp"
            href="/documentation/what-self-employed-carers-can-expect-from-elder"
          />
          <PicTextFour
            linkText="What self-employed carers can expect from Elder"
            pic="/older/pic1.webp"
            href="/documentation/what-self-employed-carers-can-expect-from-elder"
          />
        </div>
      </div>
    </>
  );
}

export default page;
