import React, { useEffect } from 'react';
import { Main } from '../Styles/App.style.js'
import LandingIndex from './Landing/LandingIndex.jsx';
import AboutIndex from './About/AboutIndex.jsx';
import ProjectsIndex from './Projects/ProjectsIndex.jsx';
import ContactIndex from './Contact/ContactIndex.jsx';

const App = () => {
  useEffect(() => {
    listenScroll();
  }, [])

  const listenScroll = () => {
    document.addEventListener('scroll', () => {
    })
  }

  return (
    <Main>
      <LandingIndex slide='4s'/>
      <AboutIndex/>
      <ProjectsIndex/>
      <ContactIndex/>
    </Main>
  )
};

export default App;