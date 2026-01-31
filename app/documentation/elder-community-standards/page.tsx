import TopHero from "@/components/home/TopHero";
import PicTextFour from "@/components/PicTextFour";
import { HouseIcon } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <div>
        <TopHero
          title="Community Standards"
          text="Reinventing what it means to age requires a community built upon a strong foundation of safety, trust, integrity and transparency."
          img="/older/pic12.jpg"
          buttonText=""
          hasGroupText={true}
          hasReview={false}
        />
      </div>
      <p>
        At Elder, we’ve created these standards to ensure our community is
        aligned with the values and behaviours that underpin the excellent care
        and support facilitated through our platform. Working hard everyday to
        ensure these values are upheld is our commitment to you. 1. Be
        respectful We expect you to treat everyone with dignity and respect.
        Always treat others as you would expect to be treated. This also means
        being respectful of one another’s property. Elder is committed to
        equality of opportunity and Elder offers freedom of choice: carers and
        customers are free to choose who they work for and with, based on
        transparency, honesty and mutual respect. Elder can’t and won’t
        discriminate or tolerate any discrimination against any carer, customer
        or employee. For Elder’s full Discrimination & Respect policy, please
        visit this link. 2. Be Honest Building a trusted community relies on
        honesty. This is why we expect you to be honest, all the time, for
        matters big and small. We expect people in the Elder community to be
        reliable, accountable and transparent. 3. Be professional and proactive
        Providing safe care and support requires everyone to work cooperatively
        and proactively with one another. Where there are concerns, address them
        as soon as possible; if someone is doing a fantastic job – let them
        know. We learn from mistakes and celebrate successes. You will find more
        information on Safeguarding at Elder here. 4. Communicate clearly and
        effectively We expect everyone to maintain polite and professional
        communication. This applies to all forms of communication, from the Care
        Request to emails, text messages and phone calls – including any care
        notes or records you may choose to implement. 5. Protect and respect the
        right to confidentiality At Elder we take people’s right to
        confidentiality and data protection very seriously. You must maintain
        confidentiality at all times and at no time should you disclose
        information of a confidential or sensitive nature without clear
        authorisation. Confidential and sensitive information includes any
        personal identifying information, address, medical conditions, and
        photographs. Here you can find a link to our privacy policy. These
        standards should be read alongside our Carer Standards, Guide for
        customers and Elder’s promise to Carers.
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
    </>
  );
}

export default page;
