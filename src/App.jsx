// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/hero';
import { SectionThree } from './components/sectionThree';
import { SectionFour } from './components/sectionFour';
import { SectionFive } from './components/sectionFive';
import { SectionSix } from './components/sectionSix';
import { SectionSeven } from './components/sectionSeven';
import { SectionEight } from './components/sectionEight';
import { SectionNine } from './components/sectionNine';
import { Popup } from './components/popUp';
import { Navbar } from './components/navbar';
import { Comando } from './pages/comando';
import { Rangos } from './pages/estrella';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/Pagina_Mypantalla/"
          element={
            <div>
                  <Popup/>
                  <Hero/>
                  <SectionSix />
                  <SectionThree />
                  <SectionFour />
                  <SectionFive />
                  <SectionEight/>
                  <SectionSeven/>
                  <SectionNine/>
              </div>
          }
        />
        <Route path="/estrella" element={<Rangos />} />
        <Route path="/comando" element={<Comando />} />
      </Routes>
    </Router>
  );
}

export default App;

