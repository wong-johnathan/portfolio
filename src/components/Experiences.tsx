"use client";
import React, { useState } from "react";
import SectionTitle from "./Typography/SectionTitle";
import InnerSection from "./Section/InnerSection";
import Section from "./Section/Section";
import { FaChevronDown } from "react-icons/fa";

const ExperiencesJson = () => {
  return [
    {
      jobTitle: "Senior Technical Support Engineer",
      companyName: "Semgrep",
      from: "Feb 2026",
      to: "Present",
      bullets: [],
    },
    {
      jobTitle: "Technical Solutions Consultant",
      companyName: "Meta",
      from: "Mar 2025",
      to: "Feb 2026",
      bullets: [
        "Advised clients on optimized implementations across Meta's ads ecosystem (signals, measurement, delivery)",
        "Resolved technical issues in client integrations to ensure reliable ad performance",
        "Worked with Sales to support priority accounts and shape technical strategies",
      ],
    },
    {
      jobTitle: "Software Engineer",
      companyName: "Knowledge Catalyst",
      from: "Sep 2024",
      to: "Dec 2024",
      bullets: [
        "Spearheaded design and implementation of v2 microservices architecture for a blockchain-based verification service",
        "Authored Product Requirement Documents (PRDs) for v2 microservices architecture",
        "Built 3 core microservices (authentication, provisioning, email) using Node.js, Express, PostgreSQL, Redis, RabbitMQ, Docker",
        "Established CI/CD workflows on GitHub",
        "Created a local npm package for reusable components across microservices",
      ],
    },
    {
      jobTitle: "Support Solutions Engineer",
      companyName: "Smartly.io",
      from: "Nov 2021",
      to: "Aug 2024",
      bullets: [
        "Provided technical support for advertising automation platform",
        "Collaborated cross-functionally to address client needs and drive product enhancements",
        "Conducted training sessions and developed comprehensive documentation",
        "Used Kibana (Elastic) for data analysis and debugging API/microservice errors",
      ],
    },
    {
      jobTitle: "Software Engineer",
      companyName: "The Solveware Pte Ltd",
      from: "May 2021",
      to: "Sep 2021",
      bullets: [
        "Set up CI/CD pipelines using Bitbucket and GCP Triggers",
        "Configured Google Kubernetes Engine (GKE) for scalability",
      ],
    },
    {
      jobTitle: "MERN Stack Blockchain Developer",
      companyName: "3D Certs Pte Ltd",
      from: "Jan 2020",
      to: "Apr 2021",
      bullets: [
        "Led development of a blockchain certificate verification and issuance platform using React and Express",
        "Designed a decentralized wallet for secure document validation",
        "Focused on UX/UI for healthcare and education sectors",
      ],
    },
    {
      jobTitle: "Software Engineer (Internship)",
      companyName: "New Creation Church",
      from: "Aug 2019",
      to: "Dec 2019",
      bullets: [
        "Built a Progressive Web App (PWA) using React.js for visit logging, attendance tracking, and CRUD operations",
      ],
    },
    {
      jobTitle: "Head of Technical Support",
      companyName: "Digitab Solutions Pte Ltd",
      from: "May 2016",
      to: "Aug 2018",
      bullets: [
        "Coordinated with dev team for software upgrades and service delivery",
        "Managed IT system procurement and vendor engagement",
      ],
    },
    {
      jobTitle: "Game Designer (Internship)",
      companyName: "Resort World Sentosa",
      from: "Oct 2012",
      to: "Feb 2013",
      bullets: [
        "Led development of game software architecture focused on marine life preservation",
        "Conducted educational talks at the aquarium",
        "Collaborated with 2 designers on graphics and gameplay",
      ],
    },
  ];
};

const Experiences = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id='experiences'>
      <SectionTitle>Experiences</SectionTitle>
      <InnerSection className='flex flex-col gap-4'>
        {ExperiencesJson().map(({ jobTitle, companyName, to, from, bullets }, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={`${jobTitle}-${companyName}`}
              className='border-[#763bf6]/50 border rounded-lg overflow-hidden transition-all duration-300
              dark:border-black'
            >
              <div
                onClick={() => toggle(index)}
                className={`group cursor-pointer w-full flex items-center justify-between px-8 py-4 transition-all duration-300
                  ${isOpen
                    ? "bg-[#763bf6]"
                    : "bg-gray-100 hover:bg-[#763bf6] dark:bg-neutral-700 dark:hover:bg-[#763bf6]"
                  }`}
              >
                <h2 className={`text-sm md:text-md font-normal transition-all duration-300
                  ${isOpen ? "text-gray-100" : "text-[#763bf6] group-hover:text-gray-100 dark:text-white"}`}>
                  {jobTitle} @ {companyName}
                </h2>
                <div className='flex items-center gap-4'>
                  <h2 className={`text-sm font-normal transition-all duration-300 hidden md:block
                    ${isOpen ? "text-gray-100" : "text-[#763bf6] group-hover:text-gray-100 dark:text-white"}`}>
                    {from} - {to}
                  </h2>
                  <FaChevronDown
                    className={`transition-transform duration-300 text-sm
                      ${isOpen ? "rotate-180 text-gray-100" : "text-[#763bf6] group-hover:text-gray-100 dark:text-white"}`}
                  />
                </div>
              </div>
              {isOpen && (
                <div className='px-8 py-4 bg-white dark:bg-neutral-800 flex flex-col gap-2'>
                  <p className='text-xs text-gray-500 dark:text-gray-400 md:hidden mb-1'>{from} - {to}</p>
                  <ul className='list-disc list-inside space-y-1'>
                    {bullets.map((bullet, i) => (
                      <li key={i} className='text-sm text-gray-700 dark:text-gray-300'>{bullet}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </InnerSection>
    </Section>
  );
};

export default Experiences;
