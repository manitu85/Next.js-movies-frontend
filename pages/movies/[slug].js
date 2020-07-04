import getConfig from 'next/config'
import fetch from 'isomorphic-fetch'
import { NextSeo } from 'next-seo'

const Movie = ({ movie }) => {

  const SEO = {
    title: `Next Movies | ${movie.title}`,
    description: movie.description,

    openGraph: {
      title: `Next Movies | ${movie.title}`,
      description: movie.description
    }
  }

  return (
    <>
      <NextSeo {...SEO} />
      <div className='container'>
        <h2 style={{marginTop: '20px'}}>{movie.title}</h2>
        <p style={{ maxWidth: '60%', marginTop: '20px' }}>{movie.description}</p>
      </div>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

export const getServerSideProps = async ({ query: { slug }}) => {
  // const { slug } = context.query
  let data

  try {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`)
    data = await res.json()
  } catch(err) {
    console.error(err)
  }


  return {
    props: {
      movie: data[0]
    }
  }
  
}

export default Movie