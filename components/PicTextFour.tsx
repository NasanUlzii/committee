import Link from "next/link";
import React from "react";

type props = {
  linkText: string;
  pic: string;
  href: string;
};

const PicTextFour = ({ linkText, pic, href }: props) => {
  return (
    <div className="border border-2 border-cyan-600">
      <img className="rounded-t-2xl w-full" src={pic} alt="carer" />
      <Link
        href={href}
        className="font-quicksand text-sm md:text-xl font-thin tracking-wide text-foreground"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default PicTextFour;
