import Head from 'next/head'

export function Meta() {
  const meta = {
    title: 'Jeusto',
    description: 'Full stack developer based in France.',
    keywords:
      'software engineering, swe, developer, tech, france, jeusto, arhun saday',
    image: '/img/og.png',
  }

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />

      <meta content={meta.title} property="og:title" />
      <meta content={meta.image} property="og:image" />
      <meta content={meta.description} property="og:description" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={meta.title} name="twitter:title" />
      <meta content={meta.description} name="twitter:description" />
      <meta content={meta.image} name="twitter:image" />

      <link rel="icon" href="/img/favicon.ico" />
    </Head>
  )
}
