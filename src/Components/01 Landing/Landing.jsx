import React, { useEffect, useState } from 'react';
import { LandingContainer, Bg, MainDiv, TextDiv, Hello, MyName, Continue, IAMDiv, Text, DownButton } from './Styles/Landing.style';
import anime from 'animejs';

const Landing = (props) => {
  var [fontSize, setFont] = useState('90px');
  var [margin, setMargin] = useState('200px');
  var [display, setDisplay] = useState('block');
  var [marginTop, setMarginTop] = useState('200px');
  var [downPosition, setPosition] = useState('60px');
  var [iAm, setIAm] = useState('a software developer.');
  var [iAmFont, setIfont] = useState('30px');

  const me = [
    'a problem solver.',
    'creative.',
    'a team player.',
    'me.',
    'Suki Bum.',
    'a software developer.'
  ]

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    animateOnLoad();
  }, [])

  useEffect(() => {
    setTimeout(() => {
      var i = me.indexOf(iAm);
      if (i === me.length - 1) {
        i = 0;
      }
      setIAm(me[i + 1]);
    }, 3000)
  }, [iAm])

  const responsiveChange = () => {
    if (window.innerWidth <= 500) {
      setFont('40px');
      setMargin('10vw');
      setDisplay('none');
      setMarginTop('-100px');
      setPosition('150px');
      setIfont('20px');
    } else if (window.innerWidth <= 960 && window.innerWidth > 500) {
      setFont('70px');
      setMargin('10vw');
      setDisplay('none');
      setMarginTop('-100px');
      setPosition('150px');
      setIfont('20px');
    } else if (window.innerWidth <= 1500 && window.innerWidth > 960) {
      setFont('100px');
      setMargin('13vw');
      setDisplay('block');
      setMarginTop('200px');
      setPosition('60px');
      setIfont('30px');
    } else if (window.innerWidth <= 1850 && window.innerWidth > 1500) {
      setFont('120px');
      setMargin('13vw');
      setDisplay('block');
      setMarginTop('200px');
      setPosition('60px');
      setIfont('30px');
    } else {
      setFont('120px');
      setMargin('13vw');
      setDisplay('block');
      setMarginTop('200px');
      setPosition('60px');
      setIfont('30px');
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
          <Continue id='text3' display={display}>Press [ ⏎ ] to continue</Continue>
          <IAMDiv id='text4' font={iAmFont}>
            <Text color='white'>I am </Text>
            <Text id='iam'>{iAm}</Text>
          </IAMDiv>
        </TextDiv>
      </MainDiv>
      <DownButton bottom={downPosition} onClick={scrollDown} />
    </LandingContainer>
  );
};

export default Landing;