import '@/styles/globals.css'
import '@/styles/media.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import  '@/styles/media.css'



export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle')
  }, [])
  return <Component {...pageProps} />
}
