import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'
import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About — Jeusto</title>
        <meta
          name="description"
          content="I'm Jeusto, also known with my real name Arhun. I am a software engineer currently based in France."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="pxv2.5 max-w-xs lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {"I'm Arhun Saday."}
            </h1>
            <div className="mt-6 space-y-7 font-serif text-base text-zinc-600 dark:text-zinc-400">
              <p>
                {
                  "A software developer currently based in France. I've been close to a computer since an early age and been passionate about it ever since. I'm currently studying computer science at the University of Strasbourg in France. In addition to my studies I am also a freelance full stack developer."
                }
              </p>
              <p>
                {
                  "I do programming in various languages and technologies including Typescript, React.js, Python and much more. I'm passionate about software development, problem solving and I especially love creating all sorts of delightful products, interfaces, and interactions."
                }
              </p>
              <p>
                {
                  "If you're interested, you can take a look at some of my projects or read my blog. If you have a question, or want to collaborate, feel free to email me or contact me through one of the links below."
                }
              </p>
              <p>
                {
                  'If you have a question, or want to collaborate, feel free to email me or contact me through one of the links below.'
                }
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={GitHubIcon}>
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={TwitterIcon} className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:contact@jeusto.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@jeusto.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
