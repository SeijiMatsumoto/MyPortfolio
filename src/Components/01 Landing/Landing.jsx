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
  var [downSize, setDownSize] = useState('60px');
  var [continueTop, setTop] = useState('100px');

  var [iAmFont, setIfont] = useState('30px');
  var [showIAm, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    animateOnLoad();
  }, [])

  const responsiveChange = () => {
    if (window.innerWidth <= 500) {
      setFont('40px');
      setMargin('10vw');
      setDisplay('none');
      setMarginTop('-100px');
      setPosition('150px');
      setDownSize('30px');
      setIfont('20px');
      setTop('130px');
      setShow(true);
    } else if (window.innerWidth <= 960 && window.innerWidth > 500) {
      setFont('70px');
      setMargin('10vw');
      setDisplay('none');
      setMarginTop('-100px');
      setPosition('150px');
      setDownSize('30px');
      setIfont('20px');
      setTop('130px');
      setShow(true);
    } else if (window.innerWidth <= 1500 && window.innerWidth > 960) {
      setFont('100px');
      setMargin('13vw');
      setDisplay('flex');
      setMarginTop('200px');
      setPosition('60px');
      setDownSize('60px');
      setIfont('30px');
      setTop('100px');
      setShow(true);
    } else if (window.innerWidth <= 1850 && window.innerWidth > 1500) {
      setFont('120px');
      setMargin('13vw');
      setDisplay('flex');
      setMarginTop('200px');
      setPosition('60px');
      setDownSize('60px');
      setIfont('30px');
      setTop('100px');
      setShow(true);
    } else {
      setFont('120px');
      setMargin('13vw');
      setDisplay('flex');
      setMarginTop('200px');
      setPosition('60px');
      setDownSize('60px');
      setIfont('30px');
      setTop('100px');
      setShow(true);
    }

    if (window.innerWidth <= 500) {
      setFont('40px');
      setMargin('10vw');
      setDisplay('none');
      setMarginTop('-100px');
      setPosition('150px');
      setDownSize('30px');
      setIfont('20px');
      setTop('130px');
      setShow(true);
    } else if (window.innerHeight < 800) {
      setFont('60px');
      setPosition('15px');
      setDownSize('30px');
      setMarginTop('200px');
      setShow(false);
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
          {showIAm ? <IAMDiv id='text3' font={iAmFont}>
            <Text>I am </Text>
            <Text2 id='iam'>
              <Typewriter
                words={['a software engineer.', 'a problem solver.', 'a creative individual.', 'a team player.', 'a critical thinker.', 'me.']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={40}
                deleteSpeed={20}
                delaySpeed={3000}
              />
            </Text2>
          </IAMDiv> : null}
          <Continue id='text4' top={continueTop} display={display}>Press [ ⏎ ] to continue</Continue>
        </TextDiv>
      </MainDiv>
      <DownButton bottom={downPosition} onClick={scrollDown} size={downSize} bgSize={downSize}/>
    </LandingContainer>
  );
};

export default Landing;