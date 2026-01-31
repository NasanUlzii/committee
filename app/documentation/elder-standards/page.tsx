import TopHero from "@/components/home/TopHero";
import PicTextFour from "@/components/PicTextFour";
import { HouseIcon } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <div>
        <TopHero
          title="Quick guide for customers / care recipients"
          text="Reinventing what it means to age requires a community built upon a strong foundation of safety, trust, integrity and transparency."
          img="/older/pic12.jpg"
          buttonText=""
          hasGroupText={true}
          hasReview={false}
        />
      </div>
      <p className="flex flex-row gap-12">
        <HouseIcon /> FOR CUSTOMERS / CARE RECIPIENTS
      </p>
      <p>
        Introduction This information outlines what a Self-Employed Carer will
        expect from a placement with you, facilitated by Elder. We want to
        ensure the relationship you are building with your Self-Employed Carer
        is positive and lasting. Even if your care is short-term, we hope that
        both you and your Self-Employed Carer will come away feeling the
        arrangement was beneficial and successful. This document should help you
        understand Elder’s requirements for engaging, and maintaining engagement
        with Self-Employed Carers matched by the Elder platform. We have
        developed a separate set of minimum standards expected of Self-Employed
        Carers accepted onto the platform which can be found here. 1) The Care
        Request and Profile: The Care Request and Profile must be an up-to-date
        and accurate reflection of the Care Recipient’s needs. This includes
        medical conditions, medication, nutritional needs, personal care,
        mobility, continence, behaviour, night-time support, and any equipment
        the Self-Employed Carer might be expected to use to support the Care
        Recipient. Should a Self-Employed Carer feel the Care Request is not an
        accurate reflection of the duties they are performing they have the
        right to ask you, the Customer/Care Recipient, to update the Care
        Request accordingly. An accurate and up-to-date Care Request and Profile
        helps to ensure Self-Employed Carers are working within their
        competencies and helps to keep everyone safe. Failure or refusal to
        maintain an up to date Care Request may result in matching being
        suspended or loss of access to the platform. 2) The Working Environment:
        Self-Employed Carers must have their own private bedroom, a secure place
        to keep their belongings, fresh bedding and towels, and confirmation
        that essential appliances are working properly (e.g. the cooker).
        Self-Employed Carers will have access to information regarding where a
        placement is located and some detail about the local area (e.g. local
        shops and public transport). Self-Employed Carers should be informed
        about who else lives in the home, in addition to the Care Recipient,
        prior to accepting a placement. The Self-Employed Carer should also be
        informed of any CCTV in and on the property. Self-Employed Carers must
        only provide support to the person for which the Care Request is
        completed. 3) Breaks & Time-Off: Breaks should be agreed with you prior
        to a placement starting. All parties should be clear on break
        arrangements, coverage requirements, and agree to any subsequent
        changes. Although Self-Employed Carers are not employed by Elder, we
        encourage arranging appropriate breaks following government guidelines
        (https://www.gov.uk/rest-breaks-work). Breaks are managed directly by
        your carer in the Hub. 4) Night-Time Support: Self-Employed Carers who
        are undertaking regular live-in care duties can prepare to assist with
        night-time disturbances up to 2x per night for around 15 minutes on
        average. Should a Care Recipient require additional night time support
        (waking night care) alternative arrangements must be explored by you. A
        Self-Employed Carer will not expect to exceed these waking times unless
        he/she is a waking night carer. 5) No Specialist Care Provision: A
        Self-Employed Carer on the Elder platform will not be expected to
        undertake any duties which are nurse-led, require specialist training,
        or any for which you, the Care Recipient/Customer, or they feel they can
        not undertake safely. Specialist care that falls outside of the services
        of the platform includes: STOMA care PEG care Wound Care Ventilation,
        Oxygen Support, BiPAP or CPAP Support Unstable Epilepsy Controlled Drug
        Administration Covert Medication Administration Glucose readings via
        finger pricks Injections Pessaries, Enemas, Suppositories Active
        addiction Acute mental health disorders Any actions which could be
        considered a Deprivation of Liberty (i.e. locking doors to prevent
        someone from leaving their home) 6) Dignity and respect: Self-Employed
        Carers should be treated with dignity and respect. Where a Self-Employed
        Carer is subjected to any form of intentional abuse or mistreatment they
        will be supported to leave a placement in a timely manner should they
        choose to leave. When working as a live-in carer, Self-Employed Carers
        have the right to privacy (see “The Working Environment”). For Elder’s
        full Anti-Discrimination & Respect policy, please visit this link. You
        can find our Community Standards here.{" "}
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
