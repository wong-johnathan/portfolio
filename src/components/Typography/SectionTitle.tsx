import { Tailwindest } from "tailwindest";
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
    <h2 className="font-bold text-2xl md:text-4xl w-full text-center">{children}</h2>
    {underline && (
      <div className='border-4 border-[#763bf6] h-0 rounded-full w-10' />
    )}
  </div>
);

export default SectionTitle;
