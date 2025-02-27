import { useEffect, useRef } from 'react'
import { MDXProvider } from '@mdx-js/react'
import '@fontsource/merriweather'
import '@fontsource/merriweather/700.css'
import '@fontsource/merriweather/900.css'
import '@fontsource/merriweather/300.css'
import '@fontsource/jetbrains-mono'
import '@fontsource/jetbrains-mono/700.css'
import '@fontsource/jetbrains-mono/300.css'
import '@fontsource/jetbrains-mono/500.css'
import '@fontsource/jetbrains-mono/600.css'
import '@fontsource/jetbrains-mono/800.css'

import { MdxComponents } from '@/components/blog/MdxComponents'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Meta } from '@/components/Meta'

import '@/styles/tailwind.css'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <MDXProvider components={MdxComponents}>
      <Meta />
      <div>
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>
            <div
              className="fixed right-0 top-0 -z-50 h-screen w-screen overflow-hidden  bg-gradient-to-b from-black to-black opacity-[0.08] blur-3xl"
              style={{
                backgroundImage: 'url("https://i.ibb.co/5KnGSMV/6.png")',
                backgroundSize: 'cover',
              }}
            />
            <Component previousPathname={previousPathname} {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </MDXProvider>
  )
}
