import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SectionThree } from './components/sectionThree';
import { SectionFour } from './components/sectionFour';
import { SectionFive } from './components/sectionFive';
import { SectionSix } from './components/sectionSix';
import { Hero } from './components/hero';
import { SectionSeven } from './components/sectionSeven';
import { SectionEight } from './components/sectionEight';
import { SectionNine } from './components/sectionNine';
import { Popup } from './components/popUp';



function App() {
  return (
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
  );
}

export default App;

