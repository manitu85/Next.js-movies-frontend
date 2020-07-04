import fetch from 'isomorphic-fetch'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import MovieCard from '@/components/MovieCard.component'

export default ({ movies, page, numberOfMovies }) => {

  const router = useRouter()

  const lastPage = Math.ceil(numberOfMovies / 8)
  
  return (
    <div className='container'>
      <FourGridColumn>
        { movies.map(movie => <MovieCard key={movie.id} movie={movie} /> ) }
      </FourGridColumn>
      <ButtonWrapper>
        <button 
          onClick={() => router.push(`/?page=${page - 1}`)}
          disabled={page <= 1}>Previous</button>
        <button disabled>Page {page}</button>
        <button 
          onClick={() => router.push(`/?page=${page + 1}`)}
          disabled={page >= lastPage}>Next</button>
      </ButtonWrapper>
    </div>
  )
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  
  const { API_URL } = process.env

  let numberOfMovies, data
  
  const start = +page === 1 ? 0 : (+page - 1) * 8

  try {
    const numberOfMoviesResponse = await fetch(`${API_URL}/movies/count`)
    numberOfMovies = await numberOfMoviesResponse.json()

    const res = await fetch(`${API_URL}/movies?_limit=8&_start=${start}`)
    data = await res.json()

  } catch (err) {
     console.error(err)
  }

  return {
    props: {
      movies: data,
      page: +page,
      numberOfMovies
    }
  }
}

const FourGridColumn = styled.div`
  display: grid;
  grid-template-columns:  repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 2.5rem;
  justify-content: center;
  align-items:center;
  margin-bottom: 60px;
`


const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 250px;
`