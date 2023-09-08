import { ReactNode } from "react";
import { Tailwindest } from "tailwindest";

type TypographyType = {
  children: ReactNode;
  fontWeight?: Tailwindest["fontWeight"];
  textTransform?: Tailwindest["textTransform"];
  width?: Tailwindest["width"];
  color?: Tailwindest["color"];
  textAlign?: Tailwindest["textAlign"];
  maxWidth?: Tailwindest["maxWidth"];
};

export const TitleLarge = ({
  children,
  fontWeight = "font-bold",
  textTransform = "normal-case",
  width = "w-full",
  color,
  textAlign = "text-center",
  maxWidth,
}: TypographyType) => {
  return (
    <h1
      className={`${textTransform} text-2xl md:text-4xl
           ${fontWeight} ${width} ${
        color ?? ""
      } ${textAlign} ${maxWidth ?? ""}`}
    >
      {children}
    </h1>
  );
};

export const TitleMedium = ({
  children,
  fontWeight = "font-bold",
  textTransform = "normal-case",
  width = "w-full",
  color,
  textAlign = "text-center",
  maxWidth,
}: TypographyType) => {
  return (
    <h2
      className={`${textTransform} ${fontWeight} text-xl md:text-3xl  ${width} ${
        color ?? ""
      } ${textAlign} ${maxWidth ?? ""}`}
    >
      {children}
    </h2>
  );
};

export const TitleSmall = ({
  children,
  fontWeight = "font-bold",
  textTransform = "normal-case",
  width = "w-full",
  color,
  textAlign = "text-center",
  maxWidth,
}: TypographyType) => {
  return (
    <h2
      className={`${textTransform} text-md md:text-2xl ${fontWeight} ${width} ${
        color ?? ""
      } ${textAlign} ${maxWidth ?? ""}`}
    >
      {children}
    </h2>
  );
};

type BodyTextProp = {
  color?: Tailwindest["color"];
  children: ReactNode;
  maxWidth?: Tailwindest["maxWidth"];
  textAlign?: Tailwindest["textAlign"];
};

export const BodyText = ({
  color,
  children,
  maxWidth,
  textAlign,
}: BodyTextProp) => {
  return (
    <p
      className={`${color??''} ${maxWidth} text-xs md:text-sm  ${textAlign}`}
    >
      {children}
    </p>
  );
};
