import { ReactNode } from "react";
import { Tailwindest } from "tailwindest";

type TitleLarge = {
  children: ReactNode;
  fontSize?: Tailwindest["fontSize"];
  mdFontSize?: Tailwindest["fontSize"];
  fontWeight?: Tailwindest["fontWeight"];
  textTransform?: Tailwindest["textTransform"];
  width?: Tailwindest["width"];
};

export const TitleLarge = ({
  children,
  fontSize = "text-3xl",
  mdFontSize = "text-4xl",
  fontWeight = "font-bold",
  textTransform = "normal-case",
  width = "w-full",
}: TitleLarge) => {
  return (
    <h1
      className={`${textTransform} ${
        mdFontSize
          ? `md:${mdFontSize}`
          : ""
      } ${fontSize} ${fontWeight} ${width}`}
    >
      {children}
    </h1>
  );
};

type BodyTextProp = {
  color?: Tailwindest["color"];
  children: ReactNode;
  maxWidth?: Tailwindest["maxWidth"];
};

export const BodyText = ({
  color = "text-gray-700",
  children,
  maxWidth,
}: BodyTextProp) => {
  return (
    <p
      className={`${color} ${maxWidth} text-sm md:text-md`}
    >
      {children}
    </p>
  );
};
