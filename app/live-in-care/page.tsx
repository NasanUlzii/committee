import MoreAds from "@/components/home/MoreAds";
import TopHero from "@/components/home/TopHero";
import Whatis from "@/components/home/Whatis";
import {
  ChevronRightCircleIcon,
  Container,
  DollarSignIcon,
} from "lucide-react";
import React from "react";
import { CgSupport } from "react-icons/cg";

function LiveInCatePage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between sm:items-start">
        <TopHero
          title="Live-in care tailored to your loved ones needs"
          text="Find a trusted live-in carer to support your loved one at home, day and night, just like Kenn and Nicole did for their parents."
          buttonText="Find a carer"
        />
        {/* Ads Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-3 md:mx-0 gap-6">
          <MoreAds
            Icon={DollarSignIcon}
            title="6,000+ carers"
            text="Select from over 6,000 qualified carers."
            height={36}
          />
          <MoreAds
            Icon={Container}
            title="Fast matching"
            text="Care can begin in as little as 24 hours."
            height={36}
          />
          <MoreAds
            Icon={ChevronRightCircleIcon}
            title="Across Great Britain"
            text="We have organised care in every GB postcode."
            height={36}
          />
          <MoreAds
            Icon={CgSupport}
            title="Cost efficient"
            text="Costs on average 35% less than traditional services"
            height={36}
          />
        </div>

        {/* What is */}
        <Whatis
          title="What is live-in care?"
          text="Live-in care is a type of home care where a dedicated carer moves into the home to provide 24-hour support. It’s a personalised alternative to a care home, helping with daily tasks like washing, dressing, taking medication, cooking, and housekeeping – all in the comfort of your loved one's home.

Live-in carers also provide companionship, emotional reassurance and household support. From supporting mobility and running errands to being there for a friendly chat, live-in care means someone is always on hand.

Because care is tailored to the elderly’s needs and preferences, many families choose live-in care to stay independent, maintain routines, and enjoy one-to-one support in familiar surroundings."
        />
      </main>
    </div>
  );
}

export default LiveInCatePage;
