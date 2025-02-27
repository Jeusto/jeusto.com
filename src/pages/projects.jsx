import Head from 'next/head'

import projectsData from '@/data/projects.json'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ProjectCard } from '@/components/ProjectCard'

export default function Projects({ projects }) {
  const mainProjects = projects.filter(
    (project) => (project.type === 'featured') | (project.type === 'primary')
  )
  const secondaryProjects = projects.filter(
    (project) => project.type === 'secondary'
  )

  const categories = projects
    .map((project) => project.category)
    .filter((category, index, self) => self.indexOf(category) === index)
    .filter((category) => category !== '')

  return (
    <>
      <Head>
        <title>Projects — Jeusto</title>
        <meta
          name="description"
          content="Things I've made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Projects"
        intro="The following is a list of projects that I have completed or am currently working on. Some of these projects were completed as part of my university coursework but most of them are personal projects that I have undertaken for my own learning or enjoyment."
      >
        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {mainProjects.map((project) => (
            <ProjectCard key={project.id} project={project} showIcon={true} />
          ))}
        </ul>
        <h2 className="my-20 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          {'Other noteworthy projects'}
        </h2>
        <div className="flex flex-col space-y-10">
          {categories.map((category) => (
            <ToolsSection key={category} title={category}>
              {secondaryProjects
                .filter((project) => project.category === category)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    showIcon={false}
                  />
                ))}
            </ToolsSection>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: projectsData,
    },
  }
}

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-10">
        {children}
      </ul>
    </Section>
  )
}
