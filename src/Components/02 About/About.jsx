import React, { useEffect, useState } from 'react';
import { AboutContainer, TitleContainer, TechDiv, TechnologiesList, UL, MainDiv, TextContainer, MyPictureContainer, MyPicture } from './Styles/About.style.js';
import anime from 'animejs';
const inView = require('in-view');

const About = (props) => {

  var [imgTop, setImgTop] = useState('50px');
  var [imgMargin, setImgMargin] = useState('40px');
  var [divWidth, setWidth] = useState('1000px');
  var [textWidth, setTextWidth] = useState('700px');
  var [techWidth, setTechWidth] = useState('600px');
  var [fontSize, setFont] = useState('20px');
  var [bg, setBg] = useState('#283134');
  var [color, setColor] = useState('#1E242A');
  var [shown, setShown] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    window.addEventListener('scroll', checkInView);
  }, [])

  useEffect(() => {
    if (!props.isDark) {
      setBg('#f0f0f0');
      setColor('#1E242A')
    } else {
      setBg('#283134');
      setColor('white');
    }
  }, [props.isDark])

  const checkInView = () => {
    if (!shown) {
      const aboutEl = document.getElementById('aboutTitle');
      if (inView.is(aboutEl)) {
        console.log('in view')
        animateOnLoad();
      }
      setShown(true);
    }
  }

  const responsiveChange = () => {
    if (window.innerWidth <= 500) {
      setImgTop('10px');
      setImgMargin('0');
      setWidth('80vw');
      setTextWidth('70vw');
      setTechWidth('70vw');
      setFont('18px');
    } else if (window.innerWidth <= 850 && window.innerWidth > 500) {
      setWidth('80vw');
      setImgMargin('0');
      setTextWidth('80vw');
      setTechWidth('70vw');
      setFont('18px');
    } else if (window.innerWidth <= 1249 && window.innerWidth > 850) {
      setImgTop('10px');
      setImgMargin('0');
      setWidth('80vw');
      setTextWidth('700px');
      setTechWidth('600px');
      setFont('20px');
    } else {
      setImgTop('50px');
      setImgMargin('40px');
      setWidth('80vw');
      setTextWidth('700px');
      setTechWidth('600px');
      setFont('20px');
    }
  };

  const animateOnLoad = () => {
    const timeline = anime.timeline({
      autoplay: true
    })
    .add({
      targets: '#mainDiv1',
      translateY: 75,
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
    }, '+= 700')
    .add({
      targets: '#aboutTitle',
      translateY: 65,
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
    }, '-= 1000')
    timeline.play();
    window.removeEventListener('scroll', checkInView);

  }

  return (
    <AboutContainer id='about' bg={bg}>
      <TitleContainer id='aboutTitle'>
        About Me
      </TitleContainer>
      <MainDiv id='mainDiv1' color={color} width={divWidth}>
        <TextContainer id='mainText' width={textWidth} font={fontSize}>
          Hi! I'm Seiji Matsumoto.
          <br /><br />
          I am a 25-year-old aspiring software engineer based in the Greater New York area with a passion for writing clean and efficient code. Fresh out of an intensive Software Engineering Immersive at Hack Reactor, I am eager to begin my full-stack software development journey and apply my knowledge.
          <br /><br />
          During my time as an IT professional, I spent a considerable amount of time writing scripts that could either automate or speed up repetitive tasks. Scripting reignited the passion I had for programming that I had tucked away years ago. Over the past year, I have built full-stack web applications and several other programs.
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
              <UL>➢ SQL / PostgreSQL</UL>
              <UL>➢ MongoDB / Mongoose</UL>
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