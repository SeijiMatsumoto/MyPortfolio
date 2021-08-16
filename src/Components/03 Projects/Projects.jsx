import React, { useState, useEffect } from 'react';
import { ProjectsContainer, Title, ProjDiv, ProjCard, Image, ProjTitle, Description, Stack, EachStack } from './Styles/Projects.style.js';
import anime from 'animejs';
const inView = require('in-view');

const Projects = (props) => {
  var [bg, setBg] = useState('#1E242A');
  var [color, setColor] = useState('white');
  var [shown, setShown] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    window.addEventListener('scroll', checkInView);
  }, [])

  const checkInView = () => {
    if (!shown) {
      const aboutEl = document.getElementById('projectsTitle');
      if (inView.is(aboutEl)) {
        console.log('in view')
        animateOnLoad();
      }
      setShown(true);
    }
  }

  const animateOnLoad = () => {
    const timeline = anime.timeline({
      autoplay: true
    })
    .add({
      targets: '#mainDiv2',
      translateY: 75,
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
    }, '+= 700')
    .add({
      targets: '#projectsTitle',
      translateY: 65,
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
    }, '-= 1000')
    timeline.play();
    window.removeEventListener('scroll', checkInView);
  }

  const responsiveChange = () => {

  }

  useEffect(() => {
    if (!props.isDark) {
      setBg('#f0f0f0');
      setColor('#1E242A')
    } else {
      setBg('#1E242A');
      setColor('white');
    }
  }, [props.isDark])


  return (
    <ProjectsContainer id='projects' bg={bg}>
      <Title id='projectsTitle'>Projects</Title>
      <ProjDiv id='mainDiv2' color={color}>My projects go here!</ProjDiv>
    </ProjectsContainer>
  );
};

export default Projects;