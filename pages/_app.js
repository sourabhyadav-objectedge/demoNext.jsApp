import NavBar from 'Components/NavBar'
import '../styles/Global.css'
import { SessionProvider,getSession } from 'next-auth/react'
export default function App({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
  <NavBar/>
  <Component {...pageProps} />
  </SessionProvider>
}
export async function getServerSideProps()
{
    const session=getSession();
    return {
        props:{
            session
        }
    }
}