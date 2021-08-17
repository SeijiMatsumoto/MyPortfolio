import React, { useState, useEffect } from 'react';
import { ContactContainer, Title, ContactDiv } from './Styles/Contact.style';
import anime from 'animejs';
const inView = require('in-view');

const Contact = (props) => {
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
      const aboutEl = document.getElementById('contactTitle');
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
      targets: '#mainDiv4',
      translateY: 75,
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
    }, '+= 700')
    .add({
      targets: '#contactTitle',
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
    <ContactContainer id='contact' bg={bg}>
      <Title id='contactTitle'>Contact Me</Title>
      <ContactDiv id='mainDiv4' color={color}>My contact info goes here!</ContactDiv>
    </ContactContainer>
  );
};

export default Contact;