import fetch from 'isomorphic-fetch'
import styled from '@emotion/styled'
import MovieCard from '@/components/MovieCard.component'

export default ({ movies }) => {
  // console.log(movies);
  
  return (
    <div className='container'>
      <FourGridColumn>
        { movies.map(movie => <MovieCard key={movie.id} movie={movie} /> ) }
      </FourGridColumn>
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

const FourGridColumn = styled.div`
  display: grid;
  grid-template-columns:  repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 2.5rem;
  justify-content: center;
  margin-bottom: 100px;
`