import styled from '@emotion/styled'

const MovieCard = ({ movie }) => {
  console.log(movie);
  const { API_URL } = process.env
  
  return (
    <CardStyled>
      <div className='poster'>
        <img src={API_URL + movie.poster.url} alt={movie.name} />
      </div>
      <div className='body'>
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description}} />
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    width: 50%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    /* border-radius: 20px; */
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);

    display: flex;
    /* flex-wrap: wrap; */
    
    .body {
        padding: 20px;
        height: 100%;
        
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