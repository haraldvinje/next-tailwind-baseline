import Head from 'next/head'

const Metatags = ({
  title,
  description,
  image
}: {
  title: string
  description?: string
  image?: string
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:image" content={image}></meta>

      <meta name="description" content={description}></meta>

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  )
}

export default Metatags
