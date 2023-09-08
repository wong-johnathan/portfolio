import { ReactNode } from "react";
import { Tailwindest } from "tailwindest";

type InnerSectionProp = {
  children: ReactNode;
  className?: string;
  justifyContent?: Tailwindest["justifyContent"];
  alignItems?: Tailwindest["alignItems"];
};

const InnerSection = ({
  children,
  className,
  justifyContent,
  alignItems,
}: InnerSectionProp) => {
  return (
    <div
      className={`max-w-[1200px] py-8 mx-auto w-full items- px-8 ${alignItems} ${justifyContent} ${className}`}
    >
      {children}
    </div>
  );
};

export default InnerSection;
