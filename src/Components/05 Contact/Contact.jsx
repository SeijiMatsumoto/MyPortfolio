import React, { useState, useEffect } from 'react';
import { ContactContainer, Title, ContactDiv, Body, Link, Links } from './Styles/Contact.style';
import anime from 'animejs';
const inView = require('in-view');

const Contact = (props) => {
  var [bg, setBg] = useState('#1E242A');
  var [color, setColor] = useState('white');
  var [shown, setShown] = useState(false);
  var [width, setWidth] = useState('1200px');
  var [fontSize, setFont] = useState('18px');

  var [btnFont, setBtnFont] = useState('white');
  var [btnColor, setBtnColor] = useState('#1E242A');

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
      targets: '#body',
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
    .add({
      targets: '#link1',
      translateY: 70,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '-= 200')
    .add({
      targets: '#link2',
      translateY: 70,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '-= 400')
    .add({
      targets: '#link3',
      translateY: 70,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '-= 400')
    .add({
      targets: '#link4',
      translateY: 70,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '-= 400')
    timeline.play();
    window.removeEventListener('scroll', checkInView);
  }

  const responsiveChange = () => {
    if (window.innerWidth <= 500) {
      setWidth('80vw');
      setFont('16px');
    } else if (window.innerWidth <= 850 && window.innerWidth > 500) {
      setWidth('70vw');
      setFont('18px');
    } else if (window.innerWidth <= 1249 && window.innerWidth > 850) {
      setWidth('70vw');
      setFont('18px');
    } else if(window.innerWidth > 1249 && window.innerWidth < 1920) {
      setWidth('60vw');
      setFont('20px');
    } else if (window.innerWidth > 1920) {
      setWidth('60vw');
      setFont('25px');
    } else {
      setWidth('50vw');
      setFont('20px');
    }
  }

  useEffect(() => {
    if (!props.isDark) {
      setBg('#f0f0f0');
      setColor('#1E242A')
      setBtnFont('white');
      setBtnColor('#1E242A');
    } else {
      setBg('#1E242A');
      setColor('white');
      setBtnFont('#1E242A');
      setBtnColor('white');
    }
  }, [props.isDark])

  const clickHandler = (e) => {
    if (e === 'email') {
      window.open('mailto:seijim27@gmail.com', '_blank');
    } else if (e === 'linkedin') {
      window.open('https://www.linkedin.com/in/matsumoto-seiji/', '_blank');
    } else if (e === 'twitter') {
      window.open('https://twitter.com/ItsSayG', '_blank');
    } else if (e === 'github') {
      window.open('https://github.com/SeijiMatsumoto', '_blank');
    } else if (e === 'instagram') {
      window.open('https://www.instagram.com/sejmoto/', '_blank');
    }
  }

  return (
    <ContactContainer id='contact' bg={bg}>
      <Title id='contactTitle'>Contact Me</Title>
      <ContactDiv color={color} width={width}>
        <Body font={fontSize} id='body'>
          Please feel free to reach out to me for any inquiries or follow me on any of the platforms below!
        </Body>
        <Links>
          <Link id='link1' color={btnFont} bg={btnColor} onClick={() => clickHandler('email')}>Email</Link>
          <Link id='link2' color={btnFont} bg={btnColor} onClick={() => clickHandler('linkedin')}>LinkedIn</Link>
          <Link id='link3' color={btnFont} bg={btnColor} onClick={() => clickHandler('twitter')}>Twitter</Link>
          <Link id='link4' color={btnFont} bg={btnColor} onClick={() => clickHandler('github')}>Github</Link>
          {/* <Link color={btnFont} bg={btnColor} onClick={() => clickHandler('instagram')}>Instagram</Link> */}
        </Links>
      </ContactDiv>
    </ContactContainer>
  );
};

export default Contact;