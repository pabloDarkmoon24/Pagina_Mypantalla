import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/hero';
import { SectionTwo } from './components/sectionTwo';
import { SectionThree } from './components/sectionThree';
import { SectionFour } from './components/sectionFour';
import { SectionFive } from './components/sectionFive';



function App() {
  return (
    <div>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default App;

