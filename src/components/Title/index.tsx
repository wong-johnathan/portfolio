import { Tailwindest } from "tailwindest";

type TitleProps = {
  title: string;
  underline?: boolean;
  underlineAlignment?: Tailwindest["alignItems"];
  fontSize?: Tailwindest["fontSize"];
};

const Title = ({
  title,
  underline = true,
  underlineAlignment = "items-center",
  fontSize = "text-4xl",
}: TitleProps) => (
  <div
    className={`flex flex-col ${underlineAlignment}`}
  >
    <h1
      className={`uppercase ${fontSize} font-bold w-full pb-2`}
    >
      {title}
    </h1>
    {underline && (
      <div className='border-4 border-[#763bf6] h-0 rounded-full w-10' />
    )}
  </div>
);

export default Title;
