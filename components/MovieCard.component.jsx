import styled from '@emotion/styled'
import Link from 'next/link'

const MovieCard = ({ movie }) => {
  const { API_URL } = process.env

  const shortenText = (str, maxLength) => str && str.length >= maxLength ? str.slice(0, maxLength) + '...' : str

  if (!movie.genre) {
    movie.genre = {}
    movie.genre.slug = 'uncategorised'
  }

  return (
    <CardStyled>
      {movie.poster && (
        <div className="poster">
          <img src={API_URL + movie.poster.url} alt={movie.name} />
        </div>
      )}
      <div className="body">
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: shortenText(movie.description, 150) }} />

        <Link href="/movies/[genre]/[slug]" as={`/movies/${movie.genre.slug}/${movie.slug}`}>
          <a>More about this movie</a>
        </Link>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);

    img {
      display: block;
      width: 100%;
      /* height: 300px; */
    }
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }
        
        a {
            display: inline-block;
            margin: 20px 0;
        }
       
    }
`

export default MovieCard