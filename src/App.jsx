
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
import LessonPage from './components/pages/kursPage/LessonPage';
import LessonPagehtml from './components/pages/kursPage/LessonPagehtml';
import LessonPagecss from './components/pages/kursPage/LessonPagecss';
import LessonPagehjavascript from './components/pages/kursPage/LessonPagehjavascript';
import LessonPagereact from './components/pages/kursPage/LessonPagereact';
import LessonPageenglish from './components/pages/kursPage/LessonPageenglish';
import LessonPagenode from './components/pages/kursPage/LessonPagenode';
import FooterCom from './components/footerCom/FooterCom';

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
                <Route path="/lesson" Component={LessonPage} />
                <Route path="/lessonhtml" Component={LessonPagehtml} />
                <Route path="/lessoncss" Component={LessonPagecss} />
                <Route path="/lessonjs" Component={LessonPagehjavascript} />
                <Route path="/lessonreact" Component={LessonPagereact} />
                <Route path="/lessonenglish" Component={LessonPageenglish} />
                <Route path="/lessonengnode" Component={LessonPagenode} />
              </Routes>
            </switch>
            <FooterCom />
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App
