import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { globalStyles } from './global'
globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
