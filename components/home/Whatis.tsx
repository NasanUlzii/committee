import React from "react";

type Props = {
  title: string;
  text: string;
};

function Whatis({ title, text }: Props) {
  return (
    <div className="px-4 md:px-0 md:pt-8 md:flex md: flex-row gap-5">
      <div className="md:shrink-0">
        <img
          className="h-76 min-w-xl md:h-76 md:min-w-xl object-cover rounded-3xl"
          src="/older/pic16.webp"
          alt="Older Image"
        />
      </div>
      <div className="mt-4">
        <div className="font-quicksand text-3xl md:text-4xl font-thin tracking-wide text-foreground">
          {title}
        </div>
        <div className="text-base mt-5">{text}</div>
      </div>
    </div>
  );
}

export default Whatis;
