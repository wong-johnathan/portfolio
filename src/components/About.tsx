/* eslint-disable react/no-unescaped-entities */
import { skills } from "./NavLinks";
import InnerSection from "./Section/InnerSection";
import Section from "./Section/Section";
import SkillsBtn from "./SkillsBtn";
import { BodyText } from "./Typography";
import SectionTitle from "./Typography/SectionTitle";
import { FaAws } from "react-icons/fa";
import Link from "next/link";

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issued: "Nov 2025",
    expires: "Nov 2028",
    link: "https://www.credly.com/badges/2ef69c21-5c42-445b-999c-02a2c5086d43/linked_in_profile",
  },
  {
    name: "AWS Certified AI Practitioner",
    issued: "Aug 2025",
    expires: "Aug 2028",
    link: "https://www.credly.com/badges/7b808933-ac0c-4674-9ce8-dd56f241ff87/linked_in_profile",
  },
  {
    name: "AWS Certified Developer – Associate",
    issued: "Jul 2025",
    expires: "Jul 2028",
    link: "https://www.credly.com/badges/ee522a21-6088-49cb-bb4b-671e1fef38bc/linked_in_profile",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issued: "Nov 2025",
    expires: "Nov 2028",
    link: "https://www.credly.com/badges/6b82d62f-b691-4711-93c9-80bccbf0e201/linked_in_profile",
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
            I'm Johnathan Wong — a Technical Solutions Consultant at Meta and
            software engineer with roots in full-stack development, blockchain,
            cloud infrastructure, and adtech. I've been building things in tech
            since 2012, across industries ranging from healthcare and education
            to digital advertising.
          </BodyText>
          <BodyText>
            My engineering background covers the MERN stack, microservices
            architecture, and cloud-native development on AWS and Google Cloud.
            I've built blockchain certificate platforms, designed scalable
            microservices with Node.js, PostgreSQL, Redis, and RabbitMQ, and
            set up CI/CD pipelines with Docker and Kubernetes.
          </BodyText>
          <BodyText>
            At Meta, I advise clients on technical implementations across the ads
            ecosystem — spanning signals, measurement, and delivery — and work
            closely with sales to support priority accounts and shape technical
            strategy.
          </BodyText>
          <BodyText>
            I hold four AWS certifications and love staying current with
            evolving technology.
          </BodyText>
        </div>
          <div className='col-span-1 mb-2'>
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
      </InnerSection>
      <InnerSection className='flex flex-col items-center mt-4'>
        <h2 className='text-xl mb-4 self-start md:self-center'>Certifications</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl'>
          {certifications.map((cert, index) => (
            <Link key={index} href={cert.link} target='_blank'>
              <div className='flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-[#763bf6] transition-colors duration-200 h-full'>
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
            </Link>
          ))}
        </div>
      </InnerSection>
    </Section>
  );
};

export default About;
