import React, { useEffect, useState } from 'react';
import { LandingContainer, MainDiv, TextDiv, Hello, MyName, Continue, IAMDiv, Text, Text2, DownButton } from './Styles/Landing.style';
import anime from 'animejs';
import { Typewriter } from 'react-simple-typewriter';

const Landing = (props) => {
  var [fontSize, setFont] = useState('90px');
  var [margin, setMargin] = useState('200px');
  var [display, setDisplay] = useState('block');
  var [marginTop, setMarginTop] = useState('200px');
  var [downPosition, setPosition] = useState('60px');
  var [continueTop, setTop] = useState('100px');
  var [bg, setBg] = useState('#1E242A');
  var [color, setColor] = useState('white');

  var [iAmFont, setIfont] = useState('30px');

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    animateOnLoad();
  }, [])

  useEffect(() => {
    if (!props.isDark) {
      setBg('#f0f0f0');
      setColor('#1E242A');
    } else {
      setBg('#1E242A');
      setColor('white');
    }
  }, [props.isDark])

  const responsiveChange = () => {
    if (window.innerWidth <= 500) {
      setFont('40px');
      setMargin('10vw');
      setDisplay('none');
      setMarginTop('-100px');
      setPosition('150px');
      setIfont('20px');
      setTop('130px');
    } else if (window.innerWidth <= 839 && window.innerWidth > 500) {
      setFont('70px');
      setMargin('10vw');
      setDisplay('none');
      setMarginTop('-100px');
      setPosition('150px');
      setIfont('20px');
      setTop('130px');
    } else if (window.innerWidth <= 1000 && window.innerHeight <= 450) {
      setFont('55px');
      setIfont('20px');
      setDisplay('none');
      setPosition('30px');
      setMargin('10vw');
      setMarginTop('60px');
      setTop('70px');
    } else if (window.innerWidth <= 1500 && window.innerWidth > 839) {
      setFont('90px');
      setMargin('13vw');
      setDisplay('flex');
      setMarginTop('200px');
      setPosition('60px');
      setIfont('30px');
      setTop('100px');
    } else if (window.innerWidth <= 1850 && window.innerWidth > 1500) {
      setFont('120px');
      setMargin('13vw');
      setDisplay('flex');
      setMarginTop('200px');
      setPosition('60px');
      setIfont('30px');
      setTop('100px');
    } else if (window.innerWidth <=839 && window.innerHeight < 800) {
      setFont('60px');
      setIfont('20px');
      setDisplay('flex');
      setPosition('15px');
      setMarginTop('0');
      setTop('70px');
    } else if (window.innerWidth > 839 && window.innerHeight < 800) {
      setFont('80px');
      setIfont('20px');
      setDisplay('flex');
      setPosition('15px');
      setMarginTop('150px');
      setTop('70px');
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
    <LandingContainer id='landing' bg={bg}>
      <MainDiv margin={margin} marginTop={marginTop} className='nameDiv'>
        <TextDiv font={fontSize}>
          <Hello id='text1'>Hi, my name is</Hello>
          <MyName id='text2' color={color}>Seiji Matsumoto.</MyName>
          <IAMDiv id='text3' font={iAmFont}>
            <Text color={color}>I am </Text>
            <Text2 id='iam'>
              <Typewriter
                words={['a full-stack engineer.', 'a problem solver.', 'a creator.', 'an IT geek.', 'a team player.', 'a critical thinker.', 'always learning.', 'me.']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={30}
                deleteSpeed={20}
                delaySpeed={2000}
              />
            </Text2>
          </IAMDiv>
          <Continue id='text4' top={continueTop} display={display} color={color}>Press [ ⏎ ] to continue</Continue>
        </TextDiv>
      </MainDiv>
      <DownButton bottom={downPosition} onClick={scrollDown} color={color} className='fas fa-angle-double-down fa-4x'/>
    </LandingContainer>
  );
};

export default Landing;