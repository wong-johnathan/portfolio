/* eslint-disable react/no-unescaped-entities */
import { skills } from "./NavLinks";

const About = () => {
  return (
    <div
      className='w-full md:h-screen py-16 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 flex-col'
      id='about'
    >
      <div className='justify-center flex flex-col items-center'>
        <p className='uppercase text-4xl font-bold w-full pb-2'>
          About Me
        </p>
        <div className='border-4 border-[#763bf6] h-0 rounded-full w-10' />
      </div>
      <div className='max-w-[1200px] py-8 mx-auto w-full md:grid grid-cols-2 gap-16 items-center px-8 justify-content'>
        <div className='col-span-1 mb-2'>
          <h2 className='py-2 text-xl'>
            Who I Am
          </h2>
          <p className='py-2 text-gray-700'>
            I'm Johnathan Wong, and I'm
            a full-stack developer &
            support engineer with a
            passion for building great
            things. I've been working in
            the IT industry since 2017,
            and have worked on
            everything from web
            development to game
            development.
          </p>
          <p className='py-2 text-gray-700'>
            I'm most comfortable using
            MongoDB, React, ExpressJS &
            NodeJS.
          </p>
          <p className='py-2 text-gray-700'>
            I have a good understanding
            of NoSQL & SQL databases
            like MongoDB, Postgres &
            MySQL, and I'm also
            experienced with setting up
            scalable Docker environments
            for development (such as
            Docker Compose) as well as
            production (such as
            Kubernetes).
          </p>
          <p className='py-2 text-gray-700'>
            I love learning new things
            and am always looking for an
            opportunity to grow as a
            developer.
          </p>
        </div>
        <div className='col-span-1 mb-2'>
          <h2 className='py-2 text-xl'>
            My Skills
          </h2>
          <div className='flex flex-wrap gap-4 py-2'>
            {skills().map((skill) => (
              <div
                key={skill}
                className='rounded-md h-[40px] bg-gray-300 text-gray-600 hover:text-white text-sm font-bold flex justify-center items-center px-8 hover:scale-105 transition-all duration-300 shadow-md shadow-gray-400'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
