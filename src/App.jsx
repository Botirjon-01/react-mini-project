
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from './ThemeContext'
import './App.css'
import Navigation from './components/NavigationTemplate/Navigation'
import Main from "./Main/Main";

import Boshsahifa from './components/pages/Boshsahifa';
import Kontakt from './components/pages/Kontakt';
import KursHaritasi from './components/pages/KursHaritasi';
import Kurslar from './components/pages/Kurslar';
import Takliflar from './components/pages/Takliflar';

function App() {
  const [Darktheme, setDarktheme] = useState(false)
  return (
    <ThemeContext.Provider value={{ Darktheme, setDarktheme }}>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div className="container">
            <switch>
              <Routes>
                <Route exact path="/" Component={Main} />
                <Route path="/home" Component={Boshsahifa} />
                <Route path="/contact" Component={Kontakt} />
                <Route path="/map" Component={KursHaritasi} />
                <Route path="/cours" Component={Kurslar} />
                <Route path="/coment" Component={Takliflar} />
              </Routes>
            </switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App
