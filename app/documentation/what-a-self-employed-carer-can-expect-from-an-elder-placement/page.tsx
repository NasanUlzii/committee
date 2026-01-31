import TopHero from "@/components/home/TopHero";
import PicTextFour from "@/components/PicTextFour";
import { UserAvatar } from "@clerk/nextjs";
import { HouseIcon, User2Icon } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <div>
        <TopHero
          title="What a self-employed carer can expect from an Elder placement"
          text="Learn what you can expect once you’ve secured a placement  through the Elder platform."
          img="/older/pic14.jpg"
          buttonText=""
          hasGroupText={true}
          hasReview={false}
        />
      </div>
      <p className="flex flex-row gap-6 py-8">
        <User2Icon color="red" /> FOR SELF-EMPLOYED CARERS
      </p>
      <p>
        Introduction This document outlines what an Self-Employed Carer can
        expect from a placement facilitated through Elder. Although
        Self-Employed Carers are not employed by Elder, where practical, we aim
        to facilitate a fair and suitable working environment for the
        Self-Employed Carer when they are working in a Care Recipient’s home in
        accordance with our Community Standards. Our Community Standards can be
        found here. 1) Dignity and respect: Self-Employed Carers should be
        treated with dignity and respect. Any form of intentional verbal,
        physical, or emotional abuse will not be tolerated. When working as a
        live-in carer, Self-Employed Carers have the right to privacy (see “The
        Home Environment”). Where a Self-Employed Carer is subjected to any form
        of abuse or mistreatment they will be supported to leave a placement in
        a timely manner if they choose to leave. 2) The Home Environment:
        Self-Employed Carers should have their own private bedroom, a secure
        place to keep their belongings, and fresh bedding and towels. It is
        essential that all necessary appliances are working properly (e.g. the
        cooker). Self-Employed Carers should be informed about who else lives in
        the home, in addition to the Care Recipient, prior to accepting a
        placement. The Self-Employed Carer should also be informed of any CCTV
        in and on the property. Self-Employed Carers must only provide support
        to the person for which the Care Request is completed. 3) The Care
        Request and Profile: An accurate and up-to-date Care Request and Profile
        helps to ensure Self-Employed Carers are working within their
        competencies and helps to keep everyone safe. The Care Request must be
        an up-to-date and accurate reflection of the Care Recipient’s needs.
        This includes medical conditions, medication, nutritional needs,
        personal care, mobility, continence, behaviour, night-time support and
        any equipment the Self-Employed Carer might be expected to use to
        support the Care Recipient. Should a Self-Employed Carer feel the Care
        Request is not an accurate reflection of the duties they are performing
        they have the right to ask the Customer/Care Recipient to update
        accordingly. Should the matter not be resolved, the Self-Employed Carer
        should raise concerns with Elder directly via Chat. 4) Breaks &
        Time-Off: breaks should be agreed with the Customer/Care Recipient prior
        to a placement starting. All parties should be clear on break
        arrangements, coverage requirements and agree to any subsequent changes.
        Although Self-Employed Carers are not employed by Elder, we encourage
        arranging appropriate breaks following government guidelines
        (https://www.gov.uk/rest-breaks-work). You can manage your breaks
        directly in the hub. 5) Night-Time Support: Self-Employed Carers who are
        undertaking regular live-in care duties should prepare to assist with
        night-time disturbances up to 2x per night for around 15 minutes on
        average. Should a Care Recipient require additional night time support,
        waking night care or alternative arrangements must be explored by the
        Customer. A Self-Employed Carer should not expect to exceed these waking
        times unless he/she is a waking night carer. 6) No Specialist Care
        Provision: As a Self-Employed Carer on the Elder platform you will not
        be expected to undertake any duties which are nurse-led, require
        specialist training, or any for which you feel you can not undertake
        safely. Specialist care that falls outside of the services of the
        platform includes: STOMA care PEG care Wound Care Ventilation, Oxygen
        Support, BiPAP or CPAP Support Unstable Epilepsy Controlled Drug
        Administration Covert Medication Administration Glucose readings via
        finger pricks Injections Pessaries, Enemas, Suppositories Active
        addiction Acute mental health disorders Any actions which could be
        considered a deprivation of liberty (e.g. locking doors to prevent
        someone from leaving their home)
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
