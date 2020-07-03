import Header from "@/components/Header.component"
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'theme'
import GlobalStyles from '@/components/GlobalStyles.styles'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyles />
        <Header isDark />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}


export default App
