import TopHero from "@/components/home/TopHero";
import PicTextFour from "@/components/PicTextFour";
import { BookHeadphones, Heading, User2Icon } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <TopHero
        title="What a self-employed carer can expect from Elder"
        text="Learn what you can expect once you’ve passed our suitability screening and joined the Elder platform."
        img="/older/pic18.webp"
        buttonText=""
        hasGroupText={true}
        hasReview={false}
      />
      <p className="flex flex-row gap-6 py-8">
        <User2Icon color="red" /> FOR SELF-EMPLOYED CARERS
      </p>
      <p>
        Introduction This document outlines what a Self-Employed Carer can
        expect from Elder once approved on the Elder platform. We want to ensure
        your experience using the Elder platform is positive and long-lasting.
        Our goals are to support you in finding placements that meet your needs,
        that you will always be properly compensated for the care you provide
        and that you receive support when needed from our dedicated team. Elder
        has developed a separate set of minimum standards expected of
        Self-Employed Carers accepted onto the platform which can be found here.
        1) Pay: As Elder increasingly offers more types of care placements, we
        encourage you to check placement information when reviewing work
        opportunities on the hub as each placement pays different amounts. On
        the hub, on your preferences page, you will be able to specify between,
        ‘live-in care’, ‘visiting care’, ‘ongoing placements’ and ‘fixed-length
        placements’. Payments will be prorated if you work less than a full
        week. This rate will be higher if you’re caring for a couple or caring
        through the night. You should be able to see the weekly rate on the
        placement advert before you apply. If you are a live-in carer you’ll
        also get double pay on any bank holiday you work, and we’ll cover your
        travel costs to and from your placement. Bank holidays paid are
        dependent upon the jurisdiction in which you are working. We regularly
        review the market and are responsive to feedback. From listening to
        carers on our platform, we have kept our travel policy and pay rates at
        the heart of our carer value proposition. 2) Support: The Elder team is
        here to support you as much as possible. We’re passionate about helping
        to facilitate quality, person centred-care for Care Recipients and
        delivering a great service for carers on our platform. Through the Elder
        hub you’ll be able to access our HelpCentre where you can find a
        selection of supporting documentation and answers to frequently asked
        questions about working on the Elder platform. If you require further
        assistance you can email us at carers@elder.org or by using the chat
        feature on your Elder hub. Whilst working on placement if you are ever
        concerned about the safety of a client or think that there is any chance
        that there is an emergency, it is essential you call 999 (for any
        emergencies) or 111 (for non-emergency matters) as soon as possible.
        Once it is safe to do so, please update your client’s family on what has
        happened. Elder support you with a 24/7 emergency hotline, though it is
        important that this number should only be used in emergency cases and
        after calling 999 or 111 and updating the customer. 3) Loyalty Plan:
        We’ve teamed up with Onsi to provide a wide range of rewards from
        trusted external providers. If you are a live-in carer, you become
        eligible to join our loyalty programme after you’ve delivered one day of
        care in the last 6 months. The registration process is simple and won’t
        take longer than a couple of minutes. Once you’re registered as a member
        of Onsi, you’ll be able to view fantastic cost-saving deals, from a
        range of discounts on goods and services including groceries and fuel.
        Members of Onsi will also be eligible to claim sick pay, mental health
        support, and access to e-learning. 4) Supporting your rights as a
        Self-Employed Carer: e.g. leaving a placement, freedom from abuse,
        working within your competencies: In order to protect the safety of our
        clients and maintain the quality of our service, Elder keeps a record of
        all incidents that are reported via our Care Logs and Incident Reporting
        tools. This also helps us support carers and clients when relevant.
        Whilst on a placement, you can record care logs and report incidents via
        the Elder hub, keeping families and Elder in the loop. We encourage the
        recording of any incident, no matter how minor, for Customer review.
        Care logs and reported incidents will be immediately visible to both
        Elder and the Care Recipient’s family. You should also inform the
        Customer immediately via whichever communication methods you have both
        agreed are best. All incidents brought to Elder’s attention relating to
        Care Recipients are reviewed by our Clinical team. You will be able to
        view entries made by previous carers. This tool should be used to
        familiarise yourself with the client’s current circumstances. Elder
        monitors placement feedback for quality assurance purposes.
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
