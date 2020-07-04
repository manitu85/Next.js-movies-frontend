import getConfig from 'next/config'
import fetch from 'isomorphic-fetch'
import Header from "@/components/Header.component"
import ContextWrapper from '@/components/ContextWrapper.component'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from '@/components/GlobalStyles.styles'
import theme  from 'theme/theme'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'


const App = ({ Component, pageProps, navigation }) => {
  
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme} >
        <GlobalStyles />
        <ContextWrapper navigation={navigation}>
          <Header />
        </ContextWrapper>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

App.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json()

  return { navigation }
}

export default App
