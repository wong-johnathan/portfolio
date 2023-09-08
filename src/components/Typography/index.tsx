import { ReactNode } from "react";
import { Tailwindest } from "tailwindest";

type TypographyType = {
  children: ReactNode;
  fontSize?: Tailwindest["fontSize"];
  mdFontSize?: Tailwindest["fontSize"];
  fontWeight?: Tailwindest["fontWeight"];
  textTransform?: Tailwindest["textTransform"];
  width?: Tailwindest["width"];
  color?: Tailwindest["color"];
  textAlign?: Tailwindest["textAlign"];
  maxWidth?: Tailwindest["maxWidth"];
};

export const TitleLarge = ({
  children,
  fontSize = "text-2xl",
  mdFontSize = "text-4xl",
  fontWeight = "font-bold",
  textTransform = "normal-case",
  width = "w-full",
  color,
  textAlign = "text-center",
  maxWidth,
}: TypographyType) => {
  return (
    <h1
      className={`${textTransform} ${fontSize} ${
        mdFontSize
          ? `md:${mdFontSize}`
          : ""
      } ${fontWeight} ${width} ${
        color ?? ""
      } ${textAlign} ${maxWidth ?? ""}`}
    >
      {children}
    </h1>
  );
};

export const TitleMedium = ({
  children,
  fontSize = "text-xl",
  mdFontSize = "text-3xl",
  fontWeight = "font-bold",
  textTransform = "normal-case",
  width = "w-full",
  color,
  textAlign = "text-center",
  maxWidth,
}: TypographyType) => {
  return (
    <h2
      className={`${textTransform} ${fontWeight} ${
        mdFontSize
          ? `md:${mdFontSize}`
          : ""
      } ${fontSize} ${width} ${
        color ?? ""
      } ${textAlign} ${maxWidth ?? ""}`}
    >
      {children}
    </h2>
  );
};

export const TitleSmall = ({
  children,
  fontSize = "text-sm",
  mdFontSize = "text-2xl",
  fontWeight = "font-bold",
  textTransform = "normal-case",
  width = "w-full",
  color,
  textAlign = "text-center",
  maxWidth,
}: TypographyType) => {
  return (
    <h2
      className={`${textTransform} ${fontSize} ${
        mdFontSize
          ? `md:${mdFontSize}`
          : ""
      } ${fontWeight} ${width} ${
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
  color = "text-gray-700",
  children,
  maxWidth,
  textAlign,
}: BodyTextProp) => {
  return (
    <p
      className={`${color} ${maxWidth} text-sm md:text-md ${textAlign}`}
    >
      {children}
    </p>
  );
};
