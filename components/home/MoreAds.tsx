import React from "react";
import Image from "next/image";

type Props = {
  Icon: React.ElementType;
  title?: string;
  text?: string;
  height?: number;
};

const MoreAds = ({ Icon, title, text, height }: Props) => {
  return (
    <div className="mt-2">
      <div
        className={`border border-indigo-200 rounded-2xl p-3 space-y-3 h-${height}`}
      >
        <div className="flex flex-row gap-4 ">
          {Icon && <Icon className="h-6 w-6 text-[#b69974]" />}
          <p className="font-quicksand-500 text-lg font-semibold">{title}</p>
        </div>
        <p className="font-quicksand text-sm md:text-sm font-thin tracking-wide text-foreground">
          {text}
        </p>
      </div>
    </div>
  );
};

export default MoreAds;
