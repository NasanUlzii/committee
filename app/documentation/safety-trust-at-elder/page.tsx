import TopHero from "@/components/home/TopHero";
import PicTextFour from "@/components/PicTextFour";
import { HouseIcon } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <div>
        <TopHero
          title="Safety and trust at Elder"
          text="Elder is a trusted online marketplace that connects families and self-employed carers enabling one-to-one personalised care at home for loved ones. At Elder we help families and self-employed carers do three critical things safely: (1) find each other, (2) match with each other and (3) manage their ongoing relationship directly."
          img="/older/pic12.jpg"
          buttonText=""
          hasGroupText={true}
          hasReview={false}
        />
      </div>
      <p>
        Our goal at Elder HQ is to enable families and their loved ones to find
        the right carer to provide personalised 1:1 care at home and to help
        carers find the right family for them. We enable this through the
        development of technology and processes that families and carers use to
        find each other, match, and manage their ongoing relationship.
        Everything we do at Elder is underpinned by respect, transparency,
        safety, and integrity. While here at Elder HQ we facilitate the
        relationship between family and self-employed carers, we all have a role
        to play in maintaining safety and trust in this community. Elder’s role
        in Safety & Trust 1) Treat everyone in the Elder community with respect
        and uphold Elder’s community standards. 2 Promote transparency by making
        it easy for families to share information about their loved one, carers
        to share information about their skills and experience, and both parties
        to share information during care. We do this through the Care Request,
        Carer Profile, Elder Chat, and Care Logs. 3 Promote a safe Introduction
        for families and carers. This includes verifying that carers are who
        they say they are by collecting proof of address, background checks, and
        right to work documentation. 4 Uphold the integrity of the Elder
        platform by implementing tools and processes that encourage excellent
        carers and families to join Elder and, when warranted, removing users
        from the platform who violate our terms & conditions. We have a thorough
        safeguarding process led by our Designated Safeguarding Lead.
        Self-Employed Carer’s role in Safety & Trust 1 Treat everyone in the
        Elder community with respect and abide by Elder’s Community Standards
        and Carer Standards. 2 Accept requests for care services only if you are
        able to meet the unique needs of each care recipient as outlined by the
        family. This includes having both the experience and availability to
        meet these needs. You can do this by keeping your carer profile up to
        date and making sure to read the Care Request fully. 3 Take proactive
        steps to create and maintain a safe and enriching environment for all
        care recipients in your care. Familiarise yourself with our safeguarding
        process led by our Designated Safeguarding Lead. 4 Keep all services on
        the Elder platform. This helps prevent fraud and allows our Safety &
        Trust team to review the details of bookings and services if the need
        arises. It also ensures that you get paid timely for the services you
        are providing. The Family's role in Safety & Trust 1 Treat everyone in
        the Elder community with respect and familiarise with our Community
        Standards and Guide for Customers. 2 Connect with your preferred carer
        before booking to ensure you are comfortable with them and to discuss
        the care you expect them to provide for your loved one. If concerns
        arise, follow our safeguarding process led by our Designated
        Safeguarding Lead. 3 Provide and maintain an accurate and up to date
        picture of care and personal needs. 4 Keep all services on the Elder
        platform. This helps prevent fraud and allows our Safety & Trust team to
        review the details of bookings and services if the need arises. It also
        enables us to protect your data.
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
