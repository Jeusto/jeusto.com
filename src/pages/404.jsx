import { SimpleLayout } from '@/components/SimpleLayout'
import Head from 'next/head'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Arhun Saday</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout title="" intro="">
        <main className="grid min-h-full place-items-center px-6 py-52 lg:px-8 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
              {"Sorry, we couldn't find the page you're looking for."}
            </p>
          </div>
        </main>
      </SimpleLayout>
    </>
  )
}
