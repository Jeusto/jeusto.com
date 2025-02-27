import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Giscus from '@giscus/react'
import { FiArrowLeft } from 'react-icons/fi'

import { Container } from '@/components/Container'
import { Prose } from '@/components/blog/Prose'
import { formatDate } from '@/lib/formatDate'

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  let router = useRouter()
  let isDarkMode = false

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      isDarkMode = true
    }
  }, [])

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} — Jeusto`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to blog"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <FiArrowLeft className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col gap-5">
                <time
                  dateTime={meta.date}
                  className="flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                {meta.tags && (
                  <div className="mt-2 flex flex-row space-x-2">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="z-10 inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 font-mono text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-600/20 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
            <Giscus
              id="comments"
              repo={`jeusto/jeusto.com`}
              repoId={`R_kgDOIrxUAg`}
              category="General"
              categoryId="DIC_kwDOIrxUAs4CTcO3"
              mapping="title"
              reactionsEnabled="0"
              emitMetadata="0"
              inputPosition="bottom"
              loading="lazy"
              theme={isDarkMode ? 'transparent_dark' : 'light'}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
