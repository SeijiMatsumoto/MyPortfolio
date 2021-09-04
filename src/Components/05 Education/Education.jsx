import React, { useState, useEffect } from 'react';
import { ExperienceContainer, Title, ExpDiv } from './Styles/Education.style';
import ExpCard from './EduCard.jsx';
import { education } from '../../data/education';
import anime from 'animejs';
const inView = require('in-view');

const Education = (props) => {
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
      const aboutEl = document.getElementById('eduTitle');
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
      targets: '#eduTitle',
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
      setWidth('80vw');
    } else if (window.innerWidth <= 850 && window.innerWidth > 500) {
      setTitleFont('35px');
      setWidth('80vw');
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
      setBg('#1E242A');
      setColor('white');
    }
  }, [props.isDark])

  return (
    <ExperienceContainer id='experience' bg={bg}>
      <Title id='eduTitle' font={titleFont}>Education</Title>
      <ExpDiv id='mainDiv3' color={color} width={width}>
        {education.map((edu, i) => {
          return <ExpCard i={i} isDark={props.isDark} key={edu.place} place={edu.place} position={edu.position} time={edu.time} desc={edu.description}/>
        })}
      </ExpDiv>
    </ExperienceContainer>
  );
};

export default Education;