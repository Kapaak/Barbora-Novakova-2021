import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { GlobalStyles } from '../styles/index'
import HeadSelector from '../utils/HeadSelector'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <HeadSelector />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
