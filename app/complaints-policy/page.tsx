import TopHero from "@/components/home/TopHero";
import PicTextFour from "@/components/PicTextFour";
import React from "react";

function page() {
  return (
    <>
      <TopHero
        title="Elder complaints policy"
        text=""
        img="/older/pic13.jpg"
        buttonText=""
        hasGroupText={true}
        hasReview={false}
      />
      <p>
        Purpose and Scope Elder always wants to improve the quality of
        experience for all Care Recipients, Customers, Carers and everyone who
        uses the Elder platform. We welcome all feedback and will ensure that
        any complaints are appropriately assessed and outcomes are shared within
        appropriate timescales. Complaints Procedure Any concerns or complaints
        can be raised in writing by: Letter to Elder Complaints at 230, City
        Road London EC1V 2TT Email complaints@elder.org Complaints Process Once
        a complaint has been made Elder will acknowledge safe receipt as soon as
        possible, the complaint will then be considered by the Head of Customer
        Account Management. Elder will aim to respond with initial findings
        within three weeks of the complaint. If you are not satisfied with that
        response, you may escalate the matter to Elder’s Senior Governance Team,
        who will review and provide a final response within a further two weeks.
        Complaints Log Elder will retain information of any complaints raised,
        which will include details of each complaint, the person who made the
        complaint, the subject matter, the outcome and the date on which any
        outcome letter was sent to the person who raised the complaint.
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
    </>
  );
}

export default page;
