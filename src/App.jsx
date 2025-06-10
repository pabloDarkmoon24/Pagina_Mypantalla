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



function App() {
  return (
    <div>
      <Hero/>
      <SectionSix />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSeven/>
    </div>
  );
}

export default App;

