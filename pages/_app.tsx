import React, { useEffect } from 'react';
import Head from 'next/head'
import { ThemeProvider } from '../public/theme/';
import {Router} from "next/router";
import {darkTheme as theme} from "../public/theme/"
import { AppProps } from 'next/app'


import { TopBar } from '../components/TopBar'
import { Footer } from '../components/Footer'

import '../public/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  //handle ScrollToTop behaviour when changing page with Router
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      const nextEl = document.getElementById("__next")
      if(nextEl){
        nextEl.scrollTo({ top: 0, behavior: 'smooth' });
      }
      console.log('SCROLL')
    });
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
  <>
    <Head>
      <meta charSet="utf-8"/>
      <title></title>
      <meta name="description" content=""/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content=""/>
      <meta property="og:description" content=""/>
      <meta property="og:url" content=""/>
      <meta property="og:site_name" content=""/>
      <meta name="apple-mobile-web-app-title" content="" />
      <meta name="application-name" content="" />
      <meta property="og:locale" content="en_AU" />
      <link rel="canonical" href=""/>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
      <meta name="theme-color" content={theme.palette.primary.main} />
      {/*https://realfavicongenerator.net/*/}
      <meta name="msapplication-TileColor" content="#da532c"/>
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    </Head>
    {/* Call the Theme Provider defined in Theme folder to overwrite the one from Material-ui and enable the theme toggling */}
    <ThemeProvider>
      <main >
          <TopBar />
          <Component {...pageProps} />
      </main>
      <Footer />
      </ThemeProvider>
   </>
  )

}

export default MyApp
