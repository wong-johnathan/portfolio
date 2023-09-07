import Image from "next/image";
import projects from "./projectsJson";
import React from "react";
import Link from "next/link";
import { SiPluscodes } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai";
import ExperiencesJson from "./ExperiencesJson";

const Experiences = () => {
  return (
    <div
      className='w-full py-16 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 flex-col'
      id='projects'
    >
      <div className='justify-center flex flex-col items-center gap-4 px-8'>
        <p className='uppercase text-4xl font-bold pb-2'>
          Experiences
        </p>
        <div className='border-4 border-[#763bf6] h-0 rounded-full w-10' />
      </div>
      <div className='max-w-[1200px] py-8 mx-auto w-full flex flex-col items-center px-8 justify-content gap-4'>
        {ExperiencesJson().map(
          ({
            jobTitle,
            companyName,
            to,
            from,
          }) => (
            <div
              key={`${jobTitle}-${companyName}`}
              className='bg-gray-300 group border-[#763bf6] border cursor-pointer hover:bg-[#763bf6] w-full h-[60px] rounded-lg flex items-center justify-between px-8 transition-all duration-300 peer'
            >
              <h2 className='text-sm md:text-md text-[#763bf6] font-normal group-hover:text-gray-100 transition-all duration-300'>
                {jobTitle} @{" "}
                {companyName}
              </h2>
              <div className='flex-row items-center gap-8 md:flex hidden'>
                <h2 className='text-md text-[#763bf6] font-normal group-hover:text-gray-100 transition-all duration-300'>
                  {from} - {to}
                </h2>
                <AiOutlinePlus className='text-md  text-[#763bf6] group-hover:text-gray-100 transition-all duration-300' />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Experiences;
