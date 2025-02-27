import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectsData from '@/data/projects.json'
import { Button } from '@/components/Button'
import { ProjectCard } from '@/components/ProjectCard'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import logoAzsaati from '@/images/logos/azsaati.png'
import logoCGI from '@/images/logos/cgi.svg'
import logoFreelance from '@/images/logos/freelance.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles, projects }) {
  return (
    <>
      <Head>
        <title>Jeusto</title>
        <meta
          name="description"
          content="I'm Jeusto, also known with my real name Arhun. I am a software engineer currently based in France."
        />
      </Head>
      <div>
        <Container className="mt-9">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {"Hi there. I'm Jeusto!"}
            </h1>
            <p className="mt-6 font-serif text-base text-zinc-600 dark:text-zinc-400">
              {`Also known with my real name Arhun, I am currently working as a Software Developer in Strasbourg, France, honing my coding skills while pursuing a Master's degree in Software Engineering.
              Feel free to take a look at some of the projects I've made or read my blog.
              If you have a question, or want to collaborate, you can email me or contact me through one of the links below.`}
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/Jeusto"
                aria-label="Follow on GitHub"
                icon={FaGithub}
              />
              <SocialLink
                href="https://twitter.com/Jeustoo"
                aria-label="Follow on Twitter"
                icon={FaTwitter}
              />
              <SocialLink
                href="https://linkedin.com/asaday"
                aria-label="Follow on LinkedIn"
                icon={FaLinkedin}
              />
              <SocialLink
                href="mailto:contact@jeusto.com"
                aria-label="Contact by email"
                icon={FaEnvelope}
              />
            </div>
          </div>
        </Container>
        <Container className="mt-24 md:mt-28">
          <div className="mx-0 grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-10">
              <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                {'Latests posts'}
              </h2>
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
              <Link href="/blog" className="flex w-full flex-row">
                <button
                  type="button"
                  className="flex rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  dark:bg-zinc-800/50 dark:text-zinc-300 dark:ring-0 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
                >
                  View all posts
                  <FiArrowRight className="m-auto ml-1 block" />
                </button>
              </Link>
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24">
              <Newsletter />
              <Resume />
            </div>
          </div>
          <div className="mt-10">
            <h2 className="py-10 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              {'Featured projects'}
            </h2>
            <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  showIcon={true}
                />
              ))}
            </ul>
            <Link href="/projects" className="mt-10 flex w-full flex-row">
              <button
                type="button"
                className="flex rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  dark:bg-zinc-800/50 dark:text-zinc-300 dark:ring-0 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
              >
                View all projects
                <FiArrowRight className="m-auto ml-1 block" />
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 3)
        .map(({ component, ...meta }) => meta),
      projects: projectsData.filter((project) => project.type === 'featured'),
    },
  }
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Image src="https://picsum.photos/id/237/200/300" alt="" />
      <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-5 w-5 text-zinc-500 transition group-hover:fill-blue-600 dark:text-zinc-400 dark:group-hover:fill-blue-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 font-serif text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'CGI',
      title: 'Software engineer (work-study program)',
      logo: logoCGI,
      start: '09/2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Freelancing',
      title: 'Full stack developer (freelance)',
      logo: logoFreelance,
      start: '02/2022',
      end: '07/2022',
      // end: {
      //   label: 'Present',
      //   dateTime: new Date().getFullYear(),
      // },
    },
    {
      company: 'Azerbaycan Saati',
      title: 'Full stack developer (internship)',
      logo: logoAzsaati,
      start: '06/2021',
      end: '08/2021',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Role</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.title}
              </dd>
              <dt className="sr-only">Company</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.company}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>
                <span aria-hidden="true">—</span>
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full ">
        Download CV
        <FiArrowDown className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}
