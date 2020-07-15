import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './themes/globalStyles'
import { lightTheme, darkTheme } from './themes/themes'
import Header from './components/header'
import Home from './pages/home'

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const themeToggler = () => setIsDarkTheme(!isDarkTheme)

  function changeMedia(mq) {
    setIsDarkTheme(mq.matches)
  }
  
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setIsDarkTheme(mq.matches)
    return () => mq.removeListener(changeMedia)
  },[])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <Header 
        onToggle={themeToggler}
        isDarkTheme={isDarkTheme}
      />
      <Home/>
    </ThemeProvider>
  )
}

export default App;
