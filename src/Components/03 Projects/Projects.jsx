import React, { useState, useEffect } from 'react';
import { ProjectsContainer, Title, ViewMore, ProjDiv } from './Styles/Projects.style.js';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../../data/projects.js';
import anime from 'animejs';
const inView = require('in-view');

const Projects = (props) => {
  var [bg, setBg] = useState('#1E242A');
  var [btnColor, setBtnColor] = useState('white');
  var [btnBg, setBtnBg] = useState('#1E242A');
  var [color, setColor] = useState('white');
  var [shown, setShown] = useState(false);
  var [width, setWidth] = useState('1200px')
  var [titleFont, setTitleFont] = useState('35px');
  var [btnWidth, setBtnWidth] = useState('40px');

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    window.addEventListener('scroll', checkInView);
  }, [])

  const checkInView = () => {
    if (!shown) {
      const aboutEl = document.getElementById('projects');
      if (inView.is(aboutEl)) {
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
      targets: '#projectsTitle',
      translateY: 65,
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
    }, '+= 700')
    timeline.play();
    window.removeEventListener('scroll', checkInView);
  }

  const responsiveChange = () => {
    if (window.innerWidth <= 500) {
      setTitleFont('35px');
      setWidth('1000px');
      setBtnWidth('150px');
    } else if (window.innerWidth <= 850 && window.innerWidth > 500) {
      setTitleFont('35px');
      setWidth('1000px');
      setBtnWidth('200px');
    } else if (window.innerWidth <= 1249 && window.innerWidth > 850) {
      setTitleFont('35px');
      setWidth('1000px');
      setBtnWidth('300px');
    } else if (window.innerWidth > 1920) {
      setTitleFont('50px');
      setWidth('60vw');
      setBtnWidth('300px');
    } else {
      setTitleFont('35px');
      setWidth('1200px');
      setBtnWidth('300px');
    }
  }

  useEffect(() => {
    if (!props.isDark) {
      setBg('#f0f0f0');
      setColor('#1E242A')
      setBtnBg('#1E242A');
      setBtnColor('white');
    } else {
      setBg('#1E242A');
      setColor('white');
      setBtnBg('white');
      setBtnColor('#1E242A')
    }
  }, [props.isDark])

  const openGithub = () => {
    const newWindow = window.open('http://www.github.com/seijimatsumoto', '_blank')
    if (newWindow) newWindow.opener = null
  }

  return (
    <ProjectsContainer id='projects' bg={bg}>
      <Title id='projectsTitle' font={titleFont}>Projects</Title>
      <ProjDiv id='mainDiv2' color={color} width={width}>
        {projects.map((project, i) => {
          return <ProjectCard key={project.url} color={color} i={i} title={project.title} url={project.url} description={project.description} stack={project.stack} github={project.github} isDark={props.isDark} />
        })}
      </ProjDiv>
        <ViewMore width={btnWidth} color={btnColor} bg={btnBg} onClick={openGithub}>View More on Github  <i className="fab fa-github"></i></ViewMore>
    </ProjectsContainer>
  );
};

export default Projects;