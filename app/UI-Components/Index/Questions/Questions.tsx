import React from "react";
import LongTextButton from "../../../components/buttons/LongTextButton";

export default function Questions() {
  return (
    <div className="hero">
      <div className="px-[8%] lg:px-[12%] border border-gray-500 rounded-4xl bg-(--prim) items-center justify-center gap-3 w-full/80 h-[80vh] flex flex-col">
        <LongTextButton
          title="Live-in care"
          infoText="A carer moves in to your home and stays long-term"
        />
        <LongTextButton
          title="Respite care"
          infoText="A carer moves in to your home temporarily"
        />
        <LongTextButton
          title="Visiting care"
          infoText="You would like a carer to visit for a few hours a day"
        />
        <div className="text-center text-lg font-semibold">or</div>
        <div>I am carer looking for care work</div>
        <div className="mt-8">
          <LongTextButton
            title="I am carer looking for care work"
            infoText=""
          />
        </div>
      </div>
    </div>
  );
}
