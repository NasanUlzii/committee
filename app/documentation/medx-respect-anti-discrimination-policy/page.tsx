import DocumHero from "@/app/UI-Components/Index/Hero/DocumHero";
import TopHero from "@/components/home/TopHero";
import PicTextFour from "@/components/PicTextFour";
import { HouseIcon } from "lucide-react";
import React from "react";

export default function AntiDiscrimination() {
  return (
    <>
      <div>
        <DocumHero
          title="Хүндлэл ба ялгаварлан гадуурхалтын эсрэг бодлого"
          text="Мэдикс нь гэр бүлүүд болон хувиараа хөдөлмөр эрхлэгч асран хамгаалагчдыг холбож, хайртай хүмүүст нь гэрт нь ганцаарчилсан, хувь хүнд тохирсон асаргаа үйлчилгээ авах боломжийг бүрдүүлдэг найдвартай онлайн зах зээлийн платформ юм.
Мэдикс-ийн хувьд бид гэр бүлүүд болон хувиараа хөдөлмөр эрхлэгч асран хамгаалагчдад дараах гурван чухал үйл явцыг аюулгүй хэрэгжүүлэхэд дэмжлэг үзүүлдэг. Үүнд:
(1) харилцан бие биеэ олох,
(2) хоорондоо тохирох,
(3) цаашдын хамтын харилцаагаа шууд, бие даан удирдах."
          img="/older/pic12.jpg"
        />
      </div>
      <div className="w-full px-[8%] lg:px-[12%] py-10 mt-0 md:mt-[2%] text-2xl GolosText">
        <p>Review date: 04/08/2023</p>
        <p>
          1. Purpose To set out a clear and simple PC policy that sets out what
          carers, customers and employees can expect from Elder and each other,
          balancing equality of opportunity and choice. 2. Policy Elder is
          committed to equality of opportunity for all: carers, customers and
          employees. Elder respects, values and accommodates diversity across
          all of the nine protected characteristics under the Equality Act 2010
          – age, disability, gender reassignment, marriage & civil partnership,
          pregnancy & maternity, race, religion or belief and sex. Elder offers
          freedom of choice: carers and customers are free to choose who they
          work for and who they work with, based on transparency, honesty and
          mutual respect. Elder is a diverse and vibrant community with carers,
          customers and employees of every background, race, colour and creed.
          Elder cannot – and will not – discriminate or tolerate any
          discrimination against any carer, customer or employee.{" "}
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
