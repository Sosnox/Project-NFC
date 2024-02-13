import BottomNav from '@/components/navigation_bar'
import NavBar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Document, { Html, Head, Main, NextScript } from 'next/document';


export default function App({ Component, pageProps }: AppProps) {
  return (
   
    
    <div className='white'>

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
    </style>
      <NavBar />
      <Component {...pageProps} />
      <BottomNav /> 
    </div>
  )
}
