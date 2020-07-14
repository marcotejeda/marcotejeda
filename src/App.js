import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './themes/globalStyles'
import { lightTheme, darkTheme } from './themes/themes'
import Header from './components/header'
import Home from './pages/home'

function App() {

  const [theme, setTheme] = useState('light');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <Header 
        onToggle={themeToggler}
        theme={theme}
      />
      <Home/>
    </ThemeProvider>
  )
}

export default App;
