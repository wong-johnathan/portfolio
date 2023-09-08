/* eslint-disable react/no-unescaped-entities */
import { skills } from "./NavLinks";
import InnerSection from "./Section/InnerSection";
import Section from "./Section/Section";
import SkillsBtn from "./SkillsBtn";
import Title from "./Title";

const About = () => {
  return (
    <Section id='about'>
      <Title title='About' />
      <InnerSection
        className='md:grid grid-cols-2 gap-8'
      >
        <div className='col-span-1 mb-2 flex gap-3 flex-col'>
          <h2 className='text-xl'>
            Who I Am
          </h2>
          <p className='text-gray-700'>
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
          </p>
          <p className='text-gray-700'>
            I'm most comfortable using
            MongoDB, React, ExpressJS &
            NodeJS.
          </p>
          <p className='text-gray-700'>
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
          </p>
          <p className='text-gray-700'>
            I love learning new things
            and am always looking for an
            opportunity to grow as a
            developer.
          </p>
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
    </Section>
  );
};

export default About;
