import { Star } from "lucide-react";
import React from "react";

const Stars = () => {
  return (
    <div className="ml-4 flex flex-row pt-8">
      <p className="text-[#d5b68c] text-lg mr-8">Excellent</p>{" "}
      <Star fill="red" color="red" />
      <Star fill="red" color="red" />
      <Star fill="red" color="red" />
      <Star fill="red" color="red" />
      <p className="mx-4 underline underline-offset-4">124 reviews on</p>
      <Star fill="#d5b68c" color="#d5b68c" size={28} />
      <p className="font-quicksand ml-2 text-[#d5b68c]">Мэдикс</p>
    </div>
  );
};

export default Stars;
