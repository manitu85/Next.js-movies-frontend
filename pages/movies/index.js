import fetch from 'isomorphic-fetch'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'


const MoviesPage = ({ movies, page, numberOfMovies }) => {
  const router = useRouter()
  console.log(numberOfMovies)

  const lastPage = Math.ceil(numberOfMovies / 3)

  return (
    <div className='container'>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
          </li>
        ))}
      </ul>
      <ButtonWrapper>
        <button onClick={() => router.push(`/movies?page=${page - 1}`)}
          disabled={page <= 1}>Previous</button>
        <button onClick={() => router.push(`/movies?page=${page + 1}`)}
          disabled={page >= lastPage}>Next</button>
      </ButtonWrapper>
    </div>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env

  const start = +page === 1 ? 0 : (+page - 1) * 3

  const numberOfMoviesResponse = await fetch(`${API_URL}/movies/count`)
  const numberOfMovies = await numberOfMoviesResponse.json()

  const res = await fetch(`${API_URL}/movies?_limit=3&_start=${start}`)
  const data = await res.json()

  return {
    props: {
      movies: data,
      page: +page,
      numberOfMovies
    }
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 200px;
`

export default MoviesPage