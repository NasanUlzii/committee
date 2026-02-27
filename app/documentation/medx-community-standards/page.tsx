import DocumHero from "@/app/UI-Components/Index/Hero/DocumHero";
import TopHero from "@/components/home/TopHero";
import PicTextFour from "@/components/PicTextFour";
import { HouseIcon } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <DocumHero
        title="Олон нийтийн ёс зүйн хэм хэмжээ"
        text="Насжилтыг шинэ утгаар тодорхойлохын тулд аюулгүй байдал, итгэлцэл, шударга ёс зүй, ил тод байдалд тулгуурласан бат бөх суурьтай олон нийтийг бүрдүүлэх шаардлагатай."
        img="/older/pic12.jpg"
      />

      <div className="w-full px-[8%] lg:px-[12%] py-10 mt-0 md:mt-[2%] text-2xl GolosText">
        <p>
          **Elder-ийн Нийгэмлэгийн Ёс Зүйн Стандартууд** Elder-д бид платформоор
          дамжин үзүүлж буй өндөр чанартай асаргаа, дэмжлэгийн үндэс суурь
          болсон үнэт зүйлс, зан төлөвтэй нийцсэн нийгэмлэгийг бүрдүүлэх
          зорилгоор дараах стандартыг боловсруулсан. Эдгээр үнэт зүйлсийг өдөр
          бүр чанд мөрдөн хэрэгжүүлэх нь бидний танд өгч буй амлалт юм. --- ###
          1. Хүндэтгэлтэй байх Бид хүн бүрийг нэр төр, хүндэтгэлтэйгээр
          харьцахыг шаарддаг. Бусдад өөртөө хандахыг хүссэнээрээ хандана уу. Энэ
          нь мөн бусдын өмч хөрөнгийг хүндэтгэхийг илэрхийлнэ. Elder нь
          боломжийн тэгш байдлыг эрхэмлэж, сонголтын эрх чөлөөг хангадаг. Асран
          хамгаалагч болон үйлчлүүлэгчид ил тод байдал, шударга байдал, харилцан
          хүндэтгэлд үндэслэн хэнтэй хамтран ажиллахаа чөлөөтэй сонгох эрхтэй.
          Elder нь аливаа асран хамгаалагч, үйлчлүүлэгч, ажилтанд чиглэсэн
          ялгаварлан гадуурхалтыг хүлээн зөвшөөрөхгүй, тэвчихгүй. --- ### 2.
          Шударга байх Итгэлцэлд суурилсан нийгэмлэгийг бий болгохын тулд
          шударга байдал нэн чухал. Иймээс бид том, жижиг аливаа асуудалд үргэлж
          үнэнч, шударга байхыг шаарддаг. Elder-ийн нийгэмлэгийн гишүүд
          найдвартай, хариуцлагатай, ил тод байх ёстой. --- ### 3. Мэргэжлийн
          бөгөөд санаачилгатай байх Аюулгүй асаргаа, дэмжлэг үзүүлэхийн тулд бүх
          талууд харилцан уялдаа холбоотой, санаачилгатай хамтран ажиллах
          шаардлагатай. Асуудал, санаа зовнил үүсвэл аль болох эрт шийдвэрлэх
          хэрэгтэй; хэн нэгэн ажлаа маш сайн хийж байвал түүнийг нь хүлээн
          зөвшөөрч мэдэгдэж байх нь зүйтэй. Бид алдаанаасаа суралцаж, амжилтаа
          тэмдэглэдэг. Elder дахь Хамгааллын талаарх дэлгэрэнгүй мэдээллийг
          холбогдох хэсгээс авна уу. --- ### 4. Тодорхой, үр дүнтэй харилцах Бид
          хүн бүрийг эелдэг, мэргэжлийн түвшинд харилцахыг шаарддаг. Энэ нь
          Асаргааны хүсэлтээс эхлээд и-мэйл, мессеж, утасны яриа, мөн асаргааны
          тэмдэглэл, бүртгэл зэрэг бүх төрлийн харилцаанд хамаарна. --- ### 5.
          Нууцлалын эрхийг хамгаалж, хүндэтгэх Elder-д бид хувь хүний нууцлал,
          өгөгдөл хамгаалалтыг онцгой ач холбогдолтойд тооцдог. Та бүх нөхцөлд
          нууцлалыг чанд хадгалж, тодорхой зөвшөөрөлгүйгээр нууц болон эмзэг
          мэдээллийг задруулах ёсгүй. Нууц болон эмзэг мэдээлэлд хувь хүнийг
          тодорхойлох мэдээлэл, хаяг, эрүүл мэндийн байдал, гэрэл зураг зэрэг
          орно. Манай нууцлалын бодлоготой холбогдох мэдээллийг холбогдох
          холбоосоор авна уу. --- Эдгээр стандартуудыг Асран хамгаалагчийн
          стандарт, Үйлчлүүлэгчийн гарын авлага болон Elder-ийн Асран
          хамгаалагчдад өгсөн амлалттай хамтатган уншина.
        </p>
        <div className="flex flex-col lg:flex-row w-full justify-center gap-6 px-4">
          <PicTextFour
            linkText="What self-employed carers can expect from Elder"
            pic="/older/pic1.webp"
            href="/documentation/what-self-employed-carers-can-expect-from-elder"
          />
          <PicTextFour
            linkText="What a self-employed carer can expect from an Elder placement"
            pic="/older/pic1.webp"
            href="/documentation/what-a-self-employed-carer-can-expect-from-an-elder-placement"
          />
          <PicTextFour
            linkText="Safety & Trust at Elder"
            pic="/older/pic1.webp"
            href="/documentation/safety-trust-at-elder"
          />
          <PicTextFour
            linkText="Safeguarding at Elder"
            pic="/older/pic1.webp"
            href="/documentation/safeguarding-at-elder"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center gap-6 px-4">
          <PicTextFour
            linkText="Elder | Respect & Anti-discrimination Policy"
            pic="/older/pic1.webp"
            href="/documentation/elder-respect-anti-discrimination-policy"
          />
          <PicTextFour
            linkText="Elder Community Standards"
            pic="/older/pic1.webp"
            href="/documentation/elder-community-standards"
          />
          <PicTextFour
            linkText="Carer standards"
            pic="/older/pic1.webp"
            href="/documentation/carer-standards"
          />
          <PicTextFour
            linkText="Quick guide – what you can expect"
            pic="/older/pic1.webp"
            href="/documentation/elder-standards"
          />
        </div>
      </div>
    </>
  );
}

export default page;
