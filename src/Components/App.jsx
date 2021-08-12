import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { navBarScroll } from '../helperFunctions.js';

import { Main } from '../Styles/App.style.js'

import Navbar from './00 Navbar/Navbar.jsx';
import Landing from './01 Landing/Landing.jsx';
import About from './02 About/About.jsx';
import Projects from './03 Projects/Projects.jsx';
import Experience from './04 Experience/Experience.jsx'
import Contact from './05 Contact/Contact.jsx';

const App = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  useEffect(() => {
    listenScroll();
    navBarScroll();

  }, [])

  const listenScroll = () => {
    document.addEventListener('scroll', () => {
    })
  }

  return (
    <Main>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </Main>
  )
};

export default App;