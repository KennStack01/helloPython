import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
// import '@fontsource/inter/700.css'
// import '@fontsource/inter/800.css'
import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
