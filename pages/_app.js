import React, { useEffect, useState } from 'react'
import Head from "next/head";
import StoreContext from '../store'
import "../assets/styles/main.css";
import "../assets/styles/prism.css";
import "../styles/app.css"
export default function MyApp({ Component, pageProps }) {

  const [theme, themeSet] = useState(null)

  useEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light'
    themeSet(theme)
  }, [])

  const changeTheme = (theme) => {
    themeSet(theme)
    localStorage.setItem('THEME', theme)
  }

  useEffect(() => {
    if (!theme) return
    const $html = document.querySelector('html')
    $html.classList.remove('light')
    $html.classList.remove('dim')
    $html.classList.remove('dark')
    $html.classList.remove('sepia')
    $html.classList.add(theme.toString())
  }, [theme])

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href={"/favicon.png"}
          />
        <script defer
  src="http://commento.example.com/js/commento.js"
  data-css-override="http://example.com/my-custom-styling.css"
  data-auto-init="true">
</script>

        <title>Blog</title>
      </Head>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}
