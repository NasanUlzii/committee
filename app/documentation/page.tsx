import MoreAds from "@/components/home/MoreAds";
import TopHero from "@/components/home/TopHero";
import { ScrollText } from "lucide-react";
import Link from "next/link";
import React from "react";
import { HiDocumentText } from "react-icons/hi2";
import { MdElderly } from "react-icons/md";

function page() {
  return (
    <>
      <TopHero
        title="Older’s Documents and Policies"
        text="Discover the policies that guide how we care, ensuring every Elder experience is safe, fair, and built on trust."
        img="/older/pic15.webp"
        buttonText=""
        hasGroupText={false}
        hasReview={true}
      />
      <div className="flex flex-col lg:flex-row w-full justify-center gap-6 px-4">
        <div
          className={`mt-2 border border-indigo-200 rounded-2xl p-3 space-y-3 h-52`}
        >
          <div className="flex flex-row gap-4 ">
            <p>01</p>
            <ScrollText className="flex flex-end h-6 w-6 text-[#b69974]" />
          </div>
          <p className="font-quicksand-500 text-lg font-semibold">General</p>
          <p className="font-quicksand text-sm md:text-sm font-thin tracking-wide text-foreground">
            <Link href="/documentation/safeguarding-at-elder">
              Elder’s Safeguarding Policy
            </Link>
            <br />
            <Link href="/documentation/elder-respect-anti-discrimination-policy">
              Respect & Anti-discrimination Policy
            </Link>
            <br />
            <Link href="/documentation/elder-community-standards">
              Community Standards
            </Link>
            <br />
            <Link href="/documentation/safety-trust-at-elder">
              Safety & Trust at Elder
            </Link>
            <br />
            <Link href="/complaints-policy">Complaints Policy</Link>
            <br />
          </p>
        </div>
        <div
          className={`mt-2 border border-indigo-200 rounded-2xl p-3 space-y-3 h-48`}
        >
          <div className="flex flex-row gap-4 ">
            <MdElderly className="h-6 w-6 text-[#b69974]" />
            <p className="font-quicksand-500 text-lg font-semibold">Carers</p>
          </div>
          <p className="font-quicksand text-sm md:text-sm font-thin tracking-wide text-foreground">
            <Link href="/documentation/carer-standards">
              Expected Carer Standards
            </Link>
            <br />
            <Link href="/documentation/what-a-self-employed-carer-can-expect-from-an-elder-placement">
              What self-employed carers can expect from a placement
            </Link>
            <br />
            <Link href="/documentation/what-self-employed-carers-can-expect-from-elder">
              What self-employed carers can expect from Elder
            </Link>
            <br />
            <Link href="/carer-privacy">Carer's Privacy Policy</Link>
            <br />
            <Link href="/carer-terms">Carer's Terms and Conditions</Link>
            <br />
          </p>
        </div>
        <div
          className={`mt-2 border border-indigo-200 rounded-2xl p-3 space-y-3 h-48`}
        >
          <div className="flex flex-row gap-4 ">
            <MdElderly className="h-6 w-6 text-[#b69974]" />
            <p className="font-quicksand-500 text-lg font-semibold">
              Customers
            </p>
          </div>
          <p className="font-quicksand text-sm md:text-sm font-thin tracking-wide text-foreground">
            <Link href="/documentation/elder-standards">
              Quick guide for customers
            </Link>
            <br />
            <Link href="/privacy">Privacy policy</Link>
            <br />
            <Link href="/terms">Terms and Conditions</Link>
            <br />
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
