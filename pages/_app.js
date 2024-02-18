import '@styles/globals.css'
import { Overpass_Mono } from 'next/font/google';

const overpass = Overpass_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function Application({ Component, pageProps }) {
  return (
  <main className={overpass.className}>
    <Component {...pageProps}/>
  </main>
  )
}

