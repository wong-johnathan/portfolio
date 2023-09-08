import React from "react";
import Title from "./Title";
import InnerSection from "./Section/InnerSection";
import Section from "./Section/Section";

const ExperiencesJson = () => {
  return [
    {
      jobTitle:
        "Support Solutions Engineer",
      companyName: "Smartly.io",
      from: "Nov 2023",
      to: "Present",
    },
    {
      jobTitle: "React Developer",
      companyName: "Solveware Pte Ltd",
      from: "Apr 2021",
      to: "Jul 2021",
    },
    {
      jobTitle: "Software Engineer",
      companyName: "3DCerts Pte Ltd",
      from: "Jan 2020",
      to: "Apr 2021",
    },
    {
      jobTitle: "Software Internship",
      companyName:
        "New Creation Church",
      from: "Aug 2019",
      to: "Dec 2019",
    },
    {
      jobTitle: "Event Director",
      companyName: "HackerX",
      from: "Feb 2018",
      to: "Aug 2019",
    },
    {
      jobTitle:
        "Wordpress Website Developer",
      companyName: "Freelance",
      from: "Jan 2016",
      to: "Aug 2019",
    },
    {
      jobTitle:
        "Head of Technical Support",
      companyName:
        "Digitab Solutions Pte Ltd",
      from: "Aug 2015",
      to: "May 2016",
    },
    {
      jobTitle: "Game Design Intern",
      companyName:
        "Resorts World Sentosa",
      from: "Oct 2012",
      to: "Feb 2013",
    },
  ];
};

const Experiences = () => {
  return (
    <Section id='experiences'>
      <Title title='Experiences' />
      <InnerSection className='flex flex-col gap-4'>
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
                <h2 className='text-sm text-[#763bf6] font-normal group-hover:text-gray-100 transition-all duration-300'>
                  {from} - {to}
                </h2>
              </div>
            </div>
          )
        )}
      </InnerSection>
    </Section>
  );
};

export default Experiences;
