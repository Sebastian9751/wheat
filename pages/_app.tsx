import { Roboto } from 'next/font/google'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
