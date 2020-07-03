import fetch from 'isomorphic-fetch'
import MovieCard from '@/components/MovieCard.component'

export default ({ movies }) => {
  console.log(movies);

  
  return (
    <div className="container">
      {
        movies.map(movie => <MovieCard key={movie.id} movie={movie} /> )
      }
    </div>
  )
}

export const getServerSideProps = async (context) => {
  let data

  try{
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/movies`)
    data = await res.json()
  } catch(err) {
    console.error(err)
    data = []
  }

  return {
    props: {
      movies: data
    }
  }
}