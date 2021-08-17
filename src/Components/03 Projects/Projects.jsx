import React, { useState, useEffect } from 'react';
import { ProjectsContainer, Title, ProjDiv } from './Styles/Projects.style.js';
import ProjectCard from './ProjectCard.jsx';
import anime from 'animejs';
const inView = require('in-view');

const Projects = (props) => {
  var [bg, setBg] = useState('#1E242A');
  var [color, setColor] = useState('white');
  var [shown, setShown] = useState(false);
  var [width, setWidth] = useState('1200px')

  var [titleFont, setTitleFont] = useState('35px');

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    window.addEventListener('scroll', checkInView);
  }, [])

  const checkInView = () => {
    if (!shown) {
      const aboutEl = document.getElementById('projects');
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
    } else if (window.innerWidth <= 850 && window.innerWidth > 500) {
      setTitleFont('35px');
      setWidth('1000px');
    } else if (window.innerWidth <= 1249 && window.innerWidth > 850) {
      setTitleFont('35px');
      setWidth('1000px');
    } else if (window.innerWidth > 1920) {
      setTitleFont('50px');
      setWidth('60vw');
    } else {
      setTitleFont('35px');
      setWidth('1200px');
    }
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

  var projects = [
    {
      title: 'Windham Wear',
      url: 'https://i.imgur.com/JDyMBJH.png',
      description: 'Front-end focused e-commerce site built with a group with other engineers. Complete with a product overview section, related products section, and ratings/reviews. All data pull from a clothing store API.',
      stack: ['React', 'Node.js', 'Styled Components']
    },
    {
      title: 'Apple',
      url: 'https://i.imgur.com/KscSNWK.png',
      description: 'Simple and clean website for a small organization called Apple. With only a few visitors a day, the website does not require any handling for large amounts of traffic. Data taken from Apple\'s API. Mobile friendly as well. Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and more.',
      stack: ['React', 'Node.js', 'Express']
    },
    {
      title: 'The New York Times',
      url: 'https://i.imgur.com/BBKplPc.png',
      description: 'A full-stack website designed to mimic real newspapers with a group of engineers. Optimized and tested for large volumes of traffic. Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world.',
      stack: ['React', 'Node.js', 'Typescript']
    }
  ]

  return (
    <ProjectsContainer id='projects' bg={bg}>
      <Title id='projectsTitle' font={titleFont}>Projects</Title>
      <ProjDiv id='mainDiv2' color={color} width={width}>
        {projects.map((project, i) => {
          return <ProjectCard key={project.url} color={color} i={i} title={project.title} url={project.url} description={project.description} stack={project.stack} isDark={props.isDark}></ProjectCard>
        })}
      </ProjDiv>
    </ProjectsContainer>
  );
};

export default Projects;