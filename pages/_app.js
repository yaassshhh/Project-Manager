import Context from '../context/Context'
import '../styles/globals.css'
import Navbar from './other/Navbar'
// import './api/database/db'
export default function App({ Component, pageProps }) {
  return <>
<Context>
  <Component {...pageProps} />

</Context>
  
  </>
}
