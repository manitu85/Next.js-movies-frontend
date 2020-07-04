import { Global, css } from "@emotion/core"

const GlobalStyles = () => (

  <Global styles={css`
  
      * { margin: 0; padding: 0; }

      *,
      *:before,
      *:after {box-sizing: inherit; }

      html { 
        box-sizing: border-box; 
        /* font-size: 62.5%;  */
      }

      body {
        margin: 0 auto;
        color: ${({ theme }) => theme.colors.secondary}; 
        background-color: ${({ theme }) => theme.colors.body};
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 1rem;
        min-height: 100vh;
      }

      .container {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 2rem;
      }
  `} />
)


export default GlobalStyles