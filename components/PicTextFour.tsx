import Link from "next/link";
import React from "react";

type props = {
  linkText: string;
  pic: string;
  href: string;
};

const PicTextFour = ({ linkText, pic, href }: props) => {
  return (
    <div className="">
      <img className="rounded-t-2xl w-full" src={pic} alt="carer" />
      <Link
        href={href}
        className="text-gray-800 font-semibold text-[21px] GolosText"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default PicTextFour;
