import React, { useEffect, useState } from 'react';
import { LandingContainer, Bg, MainDiv, TextDiv, Hello, MyName, Continue } from './Styles/Landing.style';
import anime, { timeline } from 'animejs';

const Landing = (props) => {
  var [fontSize, setFont] = useState('90px');
  var [margin, setMargin] = useState('200px');
  var [display, setDisplay] = useState('block');

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    animateOnLoad();
  }, [])

  const responsiveChange = () => {
    if (window.innerWidth <= 499) {
      setFont('35px');
      setMargin('10vw');
      setDisplay('none');
    } else if (window.innerWidth <= 960 && window.innerWidth > 499) {
      setFont('55px');
      setMargin('10vw');
      setDisplay('none');
    } else if (window.innerWidth <= 1500 && window.innerWidth > 960) {
      setFont('100px');
      setMargin('12vw');
      setDisplay('block');
    } else if (window.innerWidth <= 1850 && window.innerWidth > 1500) {
      setFont('100px');
      setMargin('12vw');
      setDisplay('block');
    }
    else {
      setFont('120px');
      setMargin('13vw');
      setDisplay('block');
    }
  };

  const animateOnLoad = () => {
    const timeline = anime.timeline({
      autoplay: true
    })
    .add({
      targets: '#text1',
      translateY: -50,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '+=600')
    .add({
      targets: '#text2',
      translateY: -50,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '-=1500')
    .add({
      targets: '#text3',
      translateY: -50,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '-=1500');
    timeline.play();
  }


  return (
    <LandingContainer id='landing'>
      <Bg></Bg>
      <MainDiv margin={margin} className='nameDiv'>
          <TextDiv font={fontSize}>
            <Hello id='text1'>Hi, my name is</Hello>
            <MyName id='text2'>Seiji Matsumoto.</MyName>
            <Continue id='text3' display={display}>Press [ ⏎ ] to continue</Continue>
          </TextDiv>
      </MainDiv>
    </LandingContainer>
  );
};

export default Landing;