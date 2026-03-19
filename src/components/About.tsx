/* eslint-disable react/no-unescaped-entities */
import { skills } from "./NavLinks";
import InnerSection from "./Section/InnerSection";
import Section from "./Section/Section";
import SkillsBtn from "./SkillsBtn";
import { BodyText } from "./Typography";
import SectionTitle from "./Typography/SectionTitle";
import { FaAws } from "react-icons/fa";

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issued: "Nov 2025",
    expires: "Nov 2028",
  },
  {
    name: "AWS Certified AI Practitioner",
    issued: "Aug 2025",
    expires: "Aug 2028",
  },
  {
    name: "AWS Certified Developer – Associate",
    issued: "Jul 2025",
    expires: "Jul 2028",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issued: "Jul 2025",
    expires: "Jan 2028",
  },
];

const About = () => {
  return (
    <Section id='about'>
      <SectionTitle>About</SectionTitle>
      <InnerSection className='md:grid grid-cols-2 gap-8'>
        <div className='col-span-1 mb-2 flex gap-3 flex-col'>
          <h2 className='text-xl'>
            Who I Am
          </h2>
          <BodyText>
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
          </BodyText>
          <BodyText>
            I'm most comfortable using
            MongoDB, React, ExpressJS &
            NodeJS.
          </BodyText>
          <BodyText>
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
          </BodyText>
          <BodyText>
            I love learning new things
            and am always looking for an
            opportunity to grow as a
            developer.
          </BodyText>
        </div>
        <div className='col-span-1 mb-2 flex flex-col gap-6'>
          <div>
            <h2 className='text-xl'>
              My Skills
            </h2>
            <div className='flex flex-wrap gap-4 py-2'>
              {skills().map(
                (skill, index) => (
                  <SkillsBtn
                    key={`${skill}-${index}`}
                    skill={skill}
                  />
                )
              )}
            </div>
          </div>
          <div>
            <h2 className='text-xl mb-3'>
              Certifications
            </h2>
            <div className='flex flex-col gap-3'>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950'
                >
                  <FaAws size={28} className='text-[#FF9900] shrink-0' />
                  <div>
                    <p className='text-sm font-semibold'>{cert.name}</p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      Amazon Web Services (AWS)
                    </p>
                    <p className='text-xs text-gray-400 dark:text-gray-500'>
                      Issued {cert.issued} · Expires {cert.expires}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </InnerSection>
    </Section>
  );
};

export default About;
