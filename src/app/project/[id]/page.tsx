/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InnerSection from "@/components/Section/InnerSection";
import Section from "@/components/Section/Section";
import SkillsBtn from "@/components/SkillsBtn";
import {
  BodyText,
  TitleLarge,
  TitleSmall,
} from "@/components/Typography";
import SectionTitle from "@/components/Typography/SectionTitle";
import projects from "@/components/projectsJson";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  params: { id: string };
};

export default function Project({
  params,
}: ProjectProps) {
  const project = projects().find(
    (project) =>
      project.id === params.id
  );

  if (project)
    return (
      <main>
        <Navbar />
        <div className='w-full h-[400px] md:h-[500px] relative'>
          <div
            className='w-full h-full absolute top-0 left-0 z-[-1] blur-sm'
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className='w-full h-full flex justify-center items-center flex-col bg-black/70 gap-4'>
            <TitleLarge color='text-white'>
              {project.title}
            </TitleLarge>
            {project.subtitle && (
              <TitleSmall
                maxWidth='max-w-[50%]'
                color='text-gray-300'
                textAlign='text-center'
              >
                {project.subtitle}
              </TitleSmall>
            )}
          </div>
        </div>
        <Section id='about'>
          <InnerSection
            justifyContent='justify-start'
            alignItems='items-start'
            className='gap-4 flex flex-col'
          >
            <Image
              src={project.image}
              width={900}
              height={100}
              alt={project.id}
              className='rounded-lg shadow-xl mx-auto mb-16 hover:scale-[102%] transition-all duration-300'
            />
            <SectionTitle underlineAlignment='items-start'>
              About
            </SectionTitle>
            <div className='gap-4 flex flex-col'>
              {project.paragraphs.map(
                (paragraph, index) => (
                  <BodyText key={index}>
                    {paragraph}
                  </BodyText>
                )
              )}
            </div>
          </InnerSection>
        </Section>
        <Section id='technology'>
          <InnerSection
            justifyContent='justify-start'
            alignItems='items-start'
            className='gap-4 flex flex-col'
          >
            <SectionTitle underlineAlignment='items-start'>
              Technology
            </SectionTitle>
            <div className='flex flex-wrap gap-4'>
              {project.technologies.map(
                (technology, index) => (
                  <SkillsBtn
                    key={`${technology}-${index}`}
                    skill={technology}
                  />
                )
              )}
            </div>
          </InnerSection>
        </Section>
        {project.video && (
          <Section id='video'>
            <InnerSection
              justifyContent='justify-start'
              alignItems='items-start'
              className='gap-4 flex flex-col'
            >
              <SectionTitle underlineAlignment='items-start'>
                Video
              </SectionTitle>
              <div className='aspect-w-16 aspect-h-9 w-full'>
                <iframe
                  src={project.video}
                  title={project.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                ></iframe>
              </div>
              <div className='pt-16'>
                <Link href='/'>
                  <span className='hover:text-[#763bf6] cursor-pointer font-bold'>
                    {"<--Back"}
                  </span>
                </Link>
              </div>
            </InnerSection>
          </Section>
        )}

        <Footer />
      </main>
    );
  return "";
}
