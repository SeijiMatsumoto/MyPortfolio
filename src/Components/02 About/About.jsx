import React, { useEffect, useState } from 'react';
import { AboutContainer, TitleContainer, TechDiv, TechnologiesList, UL, MainDiv, TextContainer, MyPictureContainer, MyPicture } from './Styles/About.style.js';
import anime from 'animejs';
const inView = require('in-view');

const About = () => {

  var [imgTop, setImgTop] = useState('50px');
  var [imgMargin, setImgMargin] = useState('40px');
  var [divWidth, setWidth] = useState('1000px');
  var [textWidth, setTextWidth] = useState('700px');
  var [techWidth, setTechWidth] = useState('600px');

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    window.addEventListener('scroll', checkInView);
  }, [])

  const checkInView = () => {
    const aboutEl = document.querySelector('#about');
    if (inView.is(aboutEl)) {
      animateOnLoad();
    }
  }

  const responsiveChange = () => {
    if (window.innerWidth <= 500) {
      setImgTop('10px');
      setImgMargin('0');
      setWidth('80vw');
      setTextWidth('70vw');
      setTechWidth('70vw');
    } else if (window.innerWidth <= 850 && window.innerWidth > 500) {
      setWidth('80vw');
      setTextWidth('70vw');
      setTechWidth('70vw');
    } else if (window.innerWidth <= 1239 && window.innerWidth > 850) {
      setImgTop('10px');
      setImgMargin('0');
      setWidth('1000px');
      setTextWidth('700px');
      setTechWidth('600px');
    } else {
      setImgTop('50px');
      setImgMargin('40px');
      setWidth('1000px');
      setTextWidth('700px');
      setTechWidth('600px');
    }
  };

  const animateOnLoad = () => {
    console.log('animate');
    const timeline = anime.timeline({
      autoplay: true
    })
    .add({
      targets: '#mainDiv',
      translateY: 75,
      easing: 'linear',
      opacity: [0, 1],
      duration: 600,
    }, '+= 600')
    .add({
      targets: '#title',
      translateY: 55,
      easing: 'linear',
      opacity: [0, 1],
      duration: 600,
    }, '-= 900')
    timeline.play();
    window.removeEventListener('scroll', checkInView);

  }

  return (
    <AboutContainer id='about'>
      <TitleContainer id='title'>
        About Me
      </TitleContainer>
      <MainDiv id='mainDiv' width={divWidth}>
        <TextContainer id='mainText' width={textWidth}>
          Hi! I'm Seiji Matsumoto.
          <br /><br />
          I am a 25-year-old software engineer based in the Greater New York area with a passion for writing clean and efficient code. Fresh out of an intensive Software Engineering Immersive at Hack Reactor, I am eager to begin my software development journey and apply my knowledge.
          <br /><br />
          During my time as an IT professional, I spent a considerable amount of time writing scripts that could either automate or speed up repetitive tasks. Scripting reignited the passion I had for programming that I had tucked away years ago. Over the past year, I have built several full-stack web applications and other program.
          <br /><br />
          Some of the technologies I use are:
          <TechDiv width={techWidth}>
            <TechnologiesList>
              <UL>➢ Javascript (ES6+)</UL>
              <UL>➢ React</UL>
              <UL>➢ Node.js</UL>
              <UL>➢ Styled Components</UL>
            </TechnologiesList>
            <TechnologiesList>
              <UL>➢ PostgreSQL</UL>
              <UL>➢ Mongoose</UL>
              <UL>➢ Jest / Enzyme</UL>
              <UL>➢ AWS</UL>
            </TechnologiesList>
          </TechDiv>
        </TextContainer>
        <MyPictureContainer id='photo' top={imgTop}>
          <MyPicture margin={imgMargin} src='https://i.imgur.com/uEfo6Po.jpg' alt='seiji' />
        </MyPictureContainer>
      </MainDiv>
    </AboutContainer>
  );
};

export default About;