import NavBar from 'Components/NavBar'
import '../styles/Global.css'
export default function App({ Component, pageProps }) {
  return <>
  <NavBar/>
  <Component {...pageProps} />
  </>
}
