import { NextSeo } from 'next-seo'

const About = () => {
  const SEO = {
    title: 'About',
    description: 'About page just normal',

    openGraph: {
      title: 'About',
      description: 'About page just normal'
    }
  }

  return (
    <>
      <NextSeo {...SEO} />
      <h1>ABOUT</h1>
    </>
  )
}


export default About