import { Tailwindest } from "tailwindest";
import { TitleLarge } from ".";
import { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  underline?: boolean;
  underlineAlignment?: Tailwindest["alignItems"];
  fontSize?: Tailwindest["fontSize"];
  uppercase?: "uppercase" | null;
};

const SectionTitle = ({
  children,
  underline = true,
  underlineAlignment = "items-center",
}: SectionTitleProps) => (
  <div
    className={`flex flex-col ${underlineAlignment} gap-2`}
  >
    <TitleLarge>{children}</TitleLarge>
    {underline && (
      <div className='border-4 border-[#763bf6] h-0 rounded-full w-10' />
    )}
  </div>
);

export default SectionTitle;
