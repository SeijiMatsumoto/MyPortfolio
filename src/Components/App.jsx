import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { navBarScroll, listenEnter } from '../helperFunctions.js';

import { Main } from '../Styles/App.style.js'

import Social from './06 SocialOverlay/Social.jsx';
import Light from './07 LightOverlay/Light.jsx'
import Navbar from './00 Navbar/Navbar.jsx';
import Landing from './01 Landing/Landing.jsx';
import About from './02 About/About.jsx';
import Projects from './03 Projects/Projects.jsx';
import Experience from './04 Experience/Experience.jsx'
import Contact from './05 Contact/Contact.jsx';
import Footer from './08 Footer/Footer.jsx';

const App = () => {
  var [isDark, toggleDark] = useState(false);

  useEffect(() => {
    navBarScroll();
    listenEnter();
    checkDark();
  }, [])

  const checkDark = () => {
    if (localStorage.getItem('mode') === 'dark') {
      toggleDark(true);
    } else if (localStorage.getItem('mode') === 'light') {
      toggleDark(false);
    } else {
      if (isDark) {
        localStorage.setItem('mode', 'dark');
      } else {
        localStorage.setItem('mode', 'light');
      }
      console.log(localStorage);
    }
  }

  useEffect(() => {
    if (isDark) {
      localStorage.setItem('mode', 'dark');
    } else {
      localStorage.setItem('mode', 'light');
    }
  }, [isDark])

  return (
    <Main id='main'>
      <Social isDark={isDark} />
      <Light isDark={isDark}  toggleDark={toggleDark}/>
      <Navbar isDark={isDark} toggleDark={toggleDark}/>
      <Landing isDark={isDark} />
      <About isDark={isDark} />
      <Projects isDark={isDark} />
      <Experience isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </Main>
  )

};

export default App;