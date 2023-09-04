import Link from "next/link";
import { socialMediaItems } from "./NavLinks";

const Hero = () => {
  return (
    <div
      className='w-full h-screen text-center'
      id='home'
    >
      <div
        className='absolute top-0 left-0 w-full h-screen opacity-20 z-[-1]'
        style={{
          backgroundImage: `url(/bgpattern.png)`,
        }}
      ></div>
      <div className='max-w-[1280px] w-full h-full mx-auto p-2 flex justify-center items-center flex-col'>
        <div>
          <h1 className='text-gray-800 py-2'>
            {/* eslint-disable-next-line react/no-unescaped-entities*/}
            Hi, I'm{" "}
            <span className='text-[#763bf6] hover:text-[#3bf6ae] transition-all duration-300 cursor-pointer'>
              Johnathan Wong
            </span>
          </h1>
          <h1 className='py-2 text-gray-800'>
            A Full-Stack Web Developer
          </h1>
          <p className='text-gray-800 py-2 max-w-[70%] m-auto'>
            I am a seasoned software
            engineer with a wealth of
            experience spanning three
            years. My expertise lies in
            JavaScript, React.js, and
            Express.js, where I have
            honed my skills to create
            robust and dynamic web
            applications.
          </p>
        </div>
        <div className='w-full max-w-[50%] flex justify-center items-center flex-row py-6 space-x-4'>
          {socialMediaItems().map(
            (item, index) => (
              <Link
                href={item.link}
                key={`${index}`}
                target='_blank'
              >
                <div className='p-4 rounded-full cursor-pointer shadow-md shadow-gray-400 cursor-ponter hover:scale-110 duration-300 hover:text-[#3bf6ae] text-[#763bf6] ease-in bg-white'>
                  {<item.icon />}
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
