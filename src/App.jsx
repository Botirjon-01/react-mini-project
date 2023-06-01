
import { useState } from 'react'
import './App.css'
import Navigation from './components/NavigationTemplate/Navigation'
import { ThemeContext } from './ThemeContext'
import Main from './Main/Main'
function App() {
  const [Darktheme, setDarktheme] = useState(false)
  return (
    <ThemeContext.Provider value={{Darktheme, setDarktheme}}>

 
 <div className='App'>
  <Navigation/>




  <Main/>
 </div>
 </ThemeContext.Provider>
 
  )
}

export default App
