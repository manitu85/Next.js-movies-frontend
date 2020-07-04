import getConfig from 'next/config'
import fetch from 'isomorphic-fetch'

const Movie = ({ movie }) => {
  console.log(movie);
  
  return (
    <div className='container'>
      <h2 style={{marginTop: '20px'}}>{movie.title}</h2>
      <p style={{ maxWidth: '60%', marginTop: '20px' }}>{movie.description}</p>
    </div>
  )
}

const { publicRuntimeConfig } = getConfig()

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  // console.log(slug)

  const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`)
  const data = await res.json()
  
  return {
    props: {
      movie: data[0]
    }
  }
  
}

export default Movie