import Head from 'next/head'
import { useRouter } from 'next/router'

import projectsData from '@/data/projects.json'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Project({ projects }) {
  const router = useRouter()
  const { id } = router.query
  const project = projects.find((project) => project.id === id)

  return (
    <>
      <Head>
        <title>{"You're subscribed — Jeusto"}</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I'll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you'd want to hear about. You can unsubscribe at any time, no hard feelings."
      />
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

export async function getStaticPaths() {
  return {
    paths: projectsData.map((project) => ({
      params: { id: project.id },
    })),
    fallback: false,
  }
}
