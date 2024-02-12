import BottomNav from '@/components/navigation_bar'
import NavBar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='white'>
      <NavBar />
      <Component {...pageProps} />
      <BottomNav />
    </div>
  )
}
