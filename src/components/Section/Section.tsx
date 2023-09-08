import { ReactNode } from "react";
import { Tailwindest } from "tailwindest";

type SectionProps = {
  children: ReactNode;
  id: string;
  width?: Tailwindest["width"];
  paddingY?: Tailwindest["paddingY"];
  justifyContent?: Tailwindest["justifyContent"];
  alignItems?: Tailwindest["alignItems"];
};

const Section = ({
  children,
  id,
  width = "w-full",
  paddingY = "py-16",
  justifyContent = "justify-center",
  alignItems = "items-center",
}: SectionProps) => {
  return (
    <div
      className={`${width} ${paddingY} flex items-center ${justifyContent} ${alignItems} bg-gradient-to-b from-gray-100 to-gray-300 flex-col`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Section;
