import React, { useEffect, useState } from 'react';
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
  useEffect(() => {
    navBarScroll();
    listenEnter();
  }, [])

  const listenEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.key === 'Enter' && window.scrollY === 0) {
        var about = document.getElementById('about');
        about.scrollIntoView();
      }
    });
  }

  return (
    <Main id='main'>
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