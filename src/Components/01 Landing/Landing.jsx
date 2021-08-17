import React, { useEffect, useState } from 'react';
import { LandingContainer, MainDiv, TextDiv, Hello, MyName, Continue, IAMDiv, Text, Text2, DownButton } from './Styles/Landing.style';
import anime from 'animejs';
import { Typewriter } from 'react-simple-typewriter';

const Landing = (props) => {
  var [fontSize, setFont] = useState('90px');
  var [margin, setMargin] = useState('0');
  var [marginTop, setMarginTop] = useState('200px');
  var [display, setDisplay] = useState('block');
  var [continueTop, setTop] = useState('100px');
  var [downPosition, setPosition] = useState('60px');

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
    var width = window.innerWidth;
    var height = window.innerHeight;

    /*
    setFont(''); // of my name
    setMargin(''); // of all text
    setMarginTop(''); // of all text
    setIfont(''); // of I AM
    setDisplay(''); // continue display
    setPosition(''); // of arrow
    setTop(''); // of Continue
    */
    // Mobile portrait
    if (width < 500 && height > 700) {
      setFont('50px'); // of my name
      setMargin(''); // of all text
      setMarginTop('-10px'); // of all text
      setIfont('25px'); // of I AM
      setDisplay('none'); // continue display
      setPosition('100px'); // of arrow
    }
    // Mobile Landscape
    if (width > 700 && height < 500) {
      setFont('50px'); // of my name
      setMargin('60px 120px 270px 60px'); // of all text
      setMarginTop('');
      setIfont('20px'); // of I AM
      setDisplay('none'); // continue display
      setPosition('40px'); // of arrow
    }
    // Large Screen

    // Normal 1080p screen

    // Macbook

    // iPad screen
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