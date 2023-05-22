import 'nextra-theme-docs/style.css'
import './main.css'
import { Roboto } from 'next/font/google';

const roboto = Roboto({weight: '400',
  subsets: ['latin'],});

export default function Nextra({Component, pageProps}){
  return (
        <main className={roboto.className}>
          <Component{...pageProps}/>
        </main>

  )
}

