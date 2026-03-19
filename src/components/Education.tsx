import React from "react";
import SectionTitle from "./Typography/SectionTitle";
import InnerSection from "./Section/InnerSection";
import Section from "./Section/Section";
import { BodyText } from "./Typography";

const EducationJson = () => {
  return [
    {
      degree: "BSc. Computer Science",
      institution: "Nanyang Technological University",
      from: "Apr 2016",
      to: "Dec 2019",
      gpa: "3.51",
      honours: [],
    },
    {
      degree: "Interactive Media Informatics",
      institution: "Temasek Polytechnic",
      from: "Apr 2010",
      to: "Apr 2013",
      gpa: "3.64",
      honours: [
        "Top 10% of cohort",
        "Director's List AY 2010/2011 and 2011/2012",
        "Assistant Honorary Secretary, Informatics & IT Studies Club",
      ],
    },
  ];
};

const Education = () => {
  return (
    <Section id='education'>
      <SectionTitle>Education</SectionTitle>
      <InnerSection className='flex flex-col gap-4'>
        {EducationJson().map(({ degree, institution, from, to, gpa, honours }) => (
          <div
            key={`${degree}-${institution}`}
            className='bg-gray-100 group border-[#763bf6]/50 border w-full rounded-lg flex flex-col md:flex-row md:items-center justify-between px-8 py-4 gap-2
            dark:border-black dark:bg-neutral-700'
          >
            <div className='flex flex-col gap-1'>
              <h2 className='text-sm md:text-md text-[#763bf6] font-semibold dark:text-white'>
                {degree}
              </h2>
              <p className='text-sm text-gray-600 dark:text-gray-300'>{institution}</p>
              {honours.length > 0 && (
                <ul className='list-disc list-inside mt-1 space-y-0.5'>
                  {honours.map((h, i) => (
                    <li key={i} className='text-xs text-gray-500 dark:text-gray-400'>{h}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className='flex flex-col items-start md:items-end gap-1 shrink-0'>
              <p className='text-sm text-[#763bf6] dark:text-white'>{from} – {to}</p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>GPA: {gpa}</p>
            </div>
          </div>
        ))}
      </InnerSection>
    </Section>
  );
};

export default Education;
