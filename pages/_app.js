
import { Layout } from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps}) {
  return <div className='bg-gradient-to-b from-[#292643] to-[#41416d] px-1 py-1 scroll-smooth '><Layout><Component {...pageProps}/></Layout></div>
}

export default MyApp
