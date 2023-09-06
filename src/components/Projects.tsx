import Image from "next/image";
import projects from "./projectsJson";
import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className='w-full py-16 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 flex-col'
      id='projects'
    >
      <div className='justify-center flex flex-col items-center gap-4 px-8'>
        <p className='uppercase text-4xl font-bold pb-2'>
          Projects
        </p>
        <div className='border-4 border-[#763bf6] h-0 rounded-full w-10' />
      </div>
      <div className='max-w-[1200px] py-8 mx-auto w-full grid grid-cols-2 gap-8 md:gap-16 items-center px-8 justify-content'>
        {projects().map((project) => (
          <React.Fragment
            key={project.id}
          >
            <div className='col-span-2 md:col-span-1'>
              <Image
                src={project.image}
                width={800}
                height={400}
                alt={project.id}
                className='hover:scale-105 transition-all duration-300'
              />
            </div>
            <div className='col-span-2 md:col-span-1 flex gap-8 flex-col items-start justify-center'>
              <div className='font-bold text-xl border-b-2 border-[#763bf6] text-[#763bf6]'>
                {project.title}
              </div>
              <div className='text-gray-700'>
                {project.summary}
              </div>
              <Link
                href={`/project/${project.id}`}
              >
                <button className="px-8 py-2">
                  View More
                </button>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
