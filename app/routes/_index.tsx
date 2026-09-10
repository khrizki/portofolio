import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Hero from '~/components/sections/Hero';
import About from '~/components/sections/About';
import Experience from '~/components/sections/Experience';
import Skills from '~/components/sections/Skills';
import Projects from '~/components/sections/Projects';
import Contact from '~/components/sections/Contact';
import { portfolioData, skillsData, projectsData } from '~/data/portfolio';

export async function loader(_args: LoaderFunctionArgs) {
  return json({
    hero: portfolioData.hero,
    about: portfolioData.about,
    stats: portfolioData.stats,
    experience: portfolioData.experience,
    skills: skillsData,
    projects: projectsData,
    contact: portfolioData.contact,
    social: portfolioData.social,
  });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Contact contact={data.contact} social={data.social} />
    </>
  );
}
