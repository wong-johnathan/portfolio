import Link from "next/link";
import { socialMediaItems } from "./NavLinks";
import Section from "./Section/Section";
import {
  BodyText,
  TitleLarge,
} from "./Typography";

const Hero = () => {
  return (
    <div
      className='w-full h-screen text-center'
      id='home'
    >
      <div
        className='absolute top-0 left-0 w-full h-screen opacity-20 dark:opacity-70 z-[-1]'
        style={{
          backgroundImage: `url(/bgpattern.png)`,
        }}
      ></div>
      <Section
        id='/'
        gradient={null}
        height='h-full'
      >
        <div className='flex flex-col gap-2 justify-center items-center'>
          <TitleLarge>
            {/* eslint-disable-next-line react/no-unescaped-entities*/}
            Hi, I'm{" "}
            <span className='text-[#763bf6] hover:text-[#3bf6ae] transition-all duration-300 cursor-pointer'>
              Johnathan Wong
            </span>
          </TitleLarge>

          <TitleLarge>
            A Full-Stack Web Developer
          </TitleLarge>
          <BodyText maxWidth='max-w-[70%]'>
            I am a seasoned software
            engineer with a wealth of
            experience spanning three
            years. My expertise lies in
            JavaScript, React.js, and
            Express.js, where I have
            honed my skills to create
            robust and dynamic web
            applications.
          </BodyText>
        </div>
        <div className='w-full max-w-[50%] flex justify-center items-center flex-row py-6 space-x-4'>
          {socialMediaItems().map(
            (item, index) => (
              <Link
                href={item.link}
                key={`${index}`}
                target='_blank'
              >
                <div className='p-4 rounded-full cursor-pointer shadow-md shadow-gray-400 cursor-ponter hover:scale-110 duration-300 hover:text-[#3bf6ae] text-[#763bf6] ease-in bg-white dark:text-white dark:bg-black dark:border dark:border-white dark:shadow'>
                  {<item.icon />}
                </div>
              </Link>
            )
          )}
        </div>
      </Section>
    </div>
  );
};

export default Hero;
