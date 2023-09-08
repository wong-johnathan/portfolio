import Image from "next/image";
import projects from "./projectsJson";
import React from "react";
import Link from "next/link";
import SectionTitle from "./Typography/SectionTitle";
import InnerSection from "./Section/InnerSection";
import Section from "./Section/Section";
import {
  BodyText,
  TitleMedium,
  TitleSmall,
} from "./Typography";

const Projects = () => {
  return (
    <Section id='projects'>
      <SectionTitle>
        Projects
      </SectionTitle>
      <InnerSection className='grid grid-cols-2 gap-8 md:gap-16'>
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
            <div className='col-span-2 md:col-span-1 flex gap-4 flex-col items-start justify-center'>
              <TitleMedium textAlign='text-left'>
                {project.title}
              </TitleMedium>
              <BodyText>
                {project.summary}
              </BodyText>
              <Link
                href={`/project/${project.id}`}
              >
                <button className='px-8 py-2 border text-[#763bf6] border-[#763bf6] hover:text-white hover:bg-[#763bf6] dark:text-white dark:border dark:hover:border-[#763bf6] dark:border-white rounded-md transition-all duration-300'>
                  View More
                </button>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </InnerSection>
    </Section>
  );
};

export default Projects;
