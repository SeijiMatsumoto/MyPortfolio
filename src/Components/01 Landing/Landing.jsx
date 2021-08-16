import React, { useEffect, useState } from 'react';
import { LandingContainer, Bg, MainDiv, TextDiv, Hello, MyName, Continue, IAMDiv, Text, Text2, DownButton } from './Styles/Landing.style';
import anime from 'animejs';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';

const Landing = (props) => {
  var [fontSize, setFont] = useState('90px');
  var [margin, setMargin] = useState('200px');
  var [display, setDisplay] = useState('block');
  var [marginTop, setMarginTop] = useState('200px');
  var [downPosition, setPosition] = useState('60px');

  var [iAm, setIAm] = useState('a software developer.');
  var [iAmFont, setIfont] = useState('30px');
  var [iAmDisplay, setIdisplay] = useState('flex');

  var meSplit = [];

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    animateOnLoad();
  }, [])

  const responsiveChange = () => {
    if (window.innerWidth <= 500) {
      setFont('50px');
      setMargin('10vw');
      setDisplay('none');
      setMarginTop('-100px');
      setPosition('150px');
      setIfont('20px');
      setIdisplay('block');
    } else if (window.innerWidth <= 960 && window.innerWidth > 500) {
      setFont('70px');
      setMargin('10vw');
      setDisplay('none');
      setMarginTop('-100px');
      setPosition('150px');
      setIfont('20px');
      setIdisplay('block');
    } else if (window.innerWidth <= 1500 && window.innerWidth > 960) {
      setFont('100px');
      setMargin('13vw');
      setDisplay('block');
      setMarginTop('200px');
      setPosition('60px');
      setIfont('30px');
      setIdisplay('flex');
    } else if (window.innerWidth <= 1850 && window.innerWidth > 1500) {
      setFont('120px');
      setMargin('13vw');
      setDisplay('block');
      setMarginTop('200px');
      setPosition('60px');
      setIfont('30px');
      setIdisplay('flex');
    } else {
      setFont('120px');
      setMargin('13vw');
      setDisplay('block');
      setMarginTop('200px');
      setPosition('60px');
      setIfont('30px');
      setIdisplay('flex');
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
      }, '-=1500')
      .add({
        targets: '#text4',
        translateY: -50,
        easing: 'spring',
        opacity: [0, 1],
        duration: 500,
      }, '-=1500');
    timeline.play();
  }

  const scrollDown = () => {
    document.getElementById('about').scrollIntoView();
  }

  return (
    <LandingContainer id='landing'>
      <Bg></Bg>
      <MainDiv margin={margin} marginTop={marginTop} className='nameDiv'>
        <TextDiv font={fontSize}>
          <Hello id='text1'>Hi, my name is</Hello>
          <MyName id='text2'>Seiji Matsumoto.</MyName>
          <IAMDiv id='text3' font={iAmFont} display={iAmDisplay}>
            <Text>I am </Text>
            <Text2 id='iam'>
              <Typewriter
                words={['a software developer.', 'a problem solver.', 'a creative individual.', 'a team player.', 'a critical thinker.', 'me.']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={60}
                deleteSpeed={20}
                delaySpeed={4000}
              />
            </Text2>
          </IAMDiv>
          <Continue id='text4' display={display}>Press [ ⏎ ] to continue</Continue>
        </TextDiv>
      </MainDiv>
      <DownButton bottom={downPosition} onClick={scrollDown} />
    </LandingContainer>
  );
};

export default Landing;