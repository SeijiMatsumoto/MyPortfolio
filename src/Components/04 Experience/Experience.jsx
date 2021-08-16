import React, { useState, useEffect } from 'react';
import { ExperienceContainer, Title, ExpDiv } from './Styles/Experience.style';
import anime from 'animejs';
const inView = require('in-view');

const Experience = (props) => {
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
      const aboutEl = document.getElementById('expTitle');
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
      targets: '#mainDiv3',
      translateY: 75,
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
    }, '+= 700')
    .add({
      targets: '#expTitle',
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
      setBg('#283134');
      setColor('white');
    }
  }, [props.isDark])

  return (
    <ExperienceContainer id='experience' bg={bg}>
      <Title id='expTitle'>My Experience</Title>
      <ExpDiv id='mainDiv3' color={color}>My experience goes here!</ExpDiv>
    </ExperienceContainer>
  );
};

export default Experience;