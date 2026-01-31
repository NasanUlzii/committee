import { Star } from "lucide-react";
import React from "react";
import Stars from "@/components/Stars";
type Props = {
  title: string;
  text: string;
  img: string;
  buttonText: string;
  hasReview: boolean;
  hasGroupText: boolean;
};

function TopHero({
  title,
  text,
  img,
  buttonText,
  hasReview,
  hasGroupText,
}: Props) {
  const hasButtons = buttonText !== "";

  return (
    <div className="md:px-0 md:pt-8 md:flex md:flex-row-reverse">
      <div className="md:shrink-0">
        <img
          className="h-54 md:h-76 md:min-w-xl w-full object-cover rounded-3xl"
          src={img}
          alt="Older document"
        />
      </div>
      <div className="mt-4">
        {hasGroupText && (
          <p className="mb-4 text-shadow-zinc-200">POLICIES & DOCUMENTATION</p>
        )}
        <div className="font-quicksand text-3xl md:text-4xl font-thin tracking-wide text-foreground">
          {title}
        </div>
        <div className="font-quicksand text-lg text-zinc-200 mt-5">{text}</div>
        {hasButtons && (
          <div className="flex flex-row gap-8 mt-8 ">
            <button className="bg-blue-600 text-white rounded-full w-[180] px-6 py-3">
              {buttonText}
            </button>
            <button className="bg-white text-blue-500 rounded-full w-[120] px-6 py-4">
              Call us
            </button>
          </div>
        )}

        {hasReview && <Stars />}
      </div>
    </div>
  );
}

export default TopHero;
