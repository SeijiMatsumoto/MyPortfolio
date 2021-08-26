import React, { useEffect, useState } from 'react';
import { navBarScroll } from '../helperFunctions.js';
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
  var [index, setIndex] = useState(0);
  // var [currentInView, setInView] = useState('about');

  useEffect(() => {
    navBarScroll();
    checkDark();
  }, [])

  var sections = ['about', 'projects', 'experience', 'contact'];

  useEffect(() => {
    listenEnter();
  }, [index])

  const listenEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        console.log(index);
        if (index === 0 && window.scrollY === 0) {
          document.getElementById(sections[0]).scrollIntoView();
          setIndex(1);
        } else if (index === 1) {
          document.getElementById(sections[1]).scrollIntoView();
          setIndex(2);
        } else if (index === 2) {
          document.getElementById(sections[2]).scrollIntoView();
          setIndex(3);
        } else if (index === 3) {
          document.getElementById(sections[3]).scrollIntoView();
          setIndex(4);
        }
      }
    });
  }



  // const listenScroll = () => {
  //   var landing = document.getElementById('landing');
  //   var about = document.getElementById('about');
  //   var projects = document.getElementById('projects');
  //   var exp = document.getElementById('experience');
  //   var contact = document.getElementById('contact');

  //   document.addEventListener('scroll', () => {
  //     if (inView.is(landing)) {
  //       setIndex(0);
  //     } else if (inView.is(about)) {
  //       setIndex(1);
  //     } else if (inView.is(projects)) {
  //       setIndex(2);
  //     } else if (inView.is(exp)) {
  //       setIndex(3);
  //     } else if (inView.is(contact)) {
  //       setIndex(4);
  //     }
  //   })
  // }

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
      <Light isDark={isDark} toggleDark={toggleDark} />
      <Navbar isDark={isDark} toggleDark={toggleDark} />
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