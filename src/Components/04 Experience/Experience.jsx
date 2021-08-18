import React, { useState, useEffect } from 'react';
import { ExperienceContainer, Title, ExpDiv } from './Styles/Experience.style';
import ExpCard from './ExpCard.jsx';
import { myExperience } from '../../data/experiences.js';
import anime from 'animejs';
const inView = require('in-view');

const Experience = (props) => {
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
      const aboutEl = document.getElementById('expTitle');
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
      targets: '#expTitle',
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
      setWidth('90vw');
    } else if (window.innerWidth <= 850 && window.innerWidth > 500) {
      setTitleFont('35px');
      setWidth('70vw');
    } else if (window.innerWidth <= 1249 && window.innerWidth > 850) {
      setTitleFont('35px');
      setWidth('70vw');
    } else if(window.innerWidth > 1249 && window.innerWidth < 1920) {
      setTitleFont('35px');
      setWidth('60vw');
    } else if (window.innerWidth > 1920) {
      setTitleFont('50px');
      setWidth('60vw');
    } else {
      setTitleFont('35px');
      setWidth('50vw');
    }
  }

  useEffect(() => {
    if (!props.isDark) {
      setBg('#f0f0f0');
      setColor('#1E242A')
    } else {
      setBg('#283134');
      setColor('white');
    }
  }, [props.isDark])

  return (
    <ExperienceContainer id='experience' bg={bg}>
      <Title id='expTitle' font={titleFont}>My Experience</Title>
      <ExpDiv id='mainDiv3' color={color} width={width}>
        {myExperience.map((exp, i) => {
          return <ExpCard i={i} isDark={props.isDark} key={exp.company} company={exp.company} position={exp.position} time={exp.time} desc={exp.description}/>
        })}
      </ExpDiv>
    </ExperienceContainer>
  );
};

export default Experience;