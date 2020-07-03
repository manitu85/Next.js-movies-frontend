import Header from "@/components/Header.component"

// import App from 'next/app'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}


export default App
