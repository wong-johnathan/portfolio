/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InnerSection from "@/components/Section/InnerSection";
import SkillsBtn from "@/components/SkillsBtn";
import Title from "@/components/Title";
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
          <div className='w-full h-full items-center flex justify-center mx-auto flex-col bg-black/70'>
            <h1 className='text-gray-100 py-2 text-center mt-8 md:mt-0'>
              {project.title}
            </h1>
            {project.subtitle && (
              <p className='text-gray-300 max-w-[70%] md:max-w-[50%] mx-auto my-4 text-lg text-center'>
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
        <InnerSection className='gap-8 flex flex-col'>
          <Image
            src={project.image}
            width={900}
            height={100}
            alt={project.id}
            className='rounded-lg shadow-xl mx-auto mb-16 hover:scale-[102%] transition-all duration-300'
          />
          <Title
            title='About'
            underlineAlignment='items-start'
          />
          <div className='gap-8'>
            {project.paragraphs.map(
              (paragraph, index) => (
                <p
                  key={index}
                  className='py-2 text-gray-700'
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </InnerSection>
        <div className='w-full px-16 py-32 bg-gradient-to-b  from-gray-100 to-gray-300'>
          <div className='max-w-[1200px] flex justify-center h-full flex-col mx-auto'>
            <Title
              title='Technology'
              underlineAlignment='items-start'
            />
            <div className='flex flex-wrap gap-4 py-8'>
              {project.technologies.map(
                (technology, index) => (
                  <SkillsBtn
                    key={`${technology}-${index}`}
                    skill={technology}
                  />
                )
              )}
            </div>
          </div>
        </div>
        {project.video && (
          <div className='w-full px-16 py-32 bg-gradient-to-b  from-gray-100 to-gray-300'>
            <div className='max-w-[1200px] flex justify-center h-full flex-col mx-auto'>
              <div className='pb-8'>
                <p className='uppercase text-4xl font-bold pb-2'>
                  Video
                </p>
                <div className='border-4 border-[#763bf6] h-0 rounded-full w-10' />
              </div>
              <div className='flex flex-wrap gap-4 py-2'>
                <iframe
                  className='w-[300px] h-[169px] md:w-[1280px] md:h-[720px]'
                  width='1280'
                  height='720'
                  src={project.video}
                  title={project.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                ></iframe>
              </div>
            </div>
            <div className='pt-16'>
              <Link href='/'>
                <span className='hover:text-[#763bf6] cursor-pointer font-bold'>
                  {"<--Back"}
                </span>
              </Link>
            </div>
          </div>
        )}

        <Footer />
      </main>
    );
  return "";
}
