import { NextSeo } from 'next-seo'

const Contact = () => {
  const SEO = {
    title: 'Contact',
    description: 'Contact page just normal',

    openGraph: {
      title: 'Contact',
      description: 'Contact page just normal'
    }
  }

  return (
    <>
      <NextSeo {...SEO} />
      <h1>Contact</h1>
    </>
  )
}


export default Contact