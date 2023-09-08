import { ReactNode } from "react";
import { Tailwindest } from "tailwindest";

type SectionProps = {
  children: ReactNode;
  id: string;
  width?: Tailwindest["width"];
  paddingY?: Tailwindest["paddingY"];
  justifyContent?: Tailwindest["justifyContent"];
  alignItems?: Tailwindest["alignItems"];
  gradient?:
    | Tailwindest["gradient"]
    | null;
  gradientFrom?: Tailwindest["gradientStart"];
  gradientEnd?: Tailwindest["gradientEnd"];
  flexDirection?: Tailwindest["flexDirection"];
  height?: Tailwindest["height"];
  gap?: Tailwindest["gap"];
};

const Section = ({
  children,
  id,
  width = "w-full",
  paddingY = "py-16",
  justifyContent = "justify-center",
  alignItems = "items-center",
  gradient = "bg-gradient-to-b",
  gradientFrom = "from-gray-100",
  gradientEnd = "to-gray-300",
  flexDirection = "flex-col",
  height,
  gap = "gap-4",
}: SectionProps) => {
  return (
    <div
      className={`${width} ${paddingY} flex ${justifyContent} ${alignItems} ${
        gradient ? gradient : ""
      } ${gradientFrom} ${gradientEnd} ${flexDirection} ${height} ${gap}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Section;
