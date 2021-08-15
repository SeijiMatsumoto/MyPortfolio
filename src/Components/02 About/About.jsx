import React, { useEffect, useState } from 'react';
import { AboutContainer, TitleContainer, Technologies, TechnologiesList, UL, MainDiv, TextContainer, MyPictureContainer, MyPicture, TopDiv, BottomDiv, ImageDiv } from './Styles/About.style.js';

const About = () => {

  var [divWidth, setDivWidth] = useState('50vw');
  var [imageDisplay, setImageDisplay] = useState('inline-flex');
  var [imageWidth, setImageWidth] = useState('360px');
  var [imageMargin, setImageMargin] = useState('10px');
  var [techMargin, setTechMargin] = useState('120px');

  useEffect(() => {
    window.addEventListener('resize', responsiveness);
    responsiveness();
  }, [])

  const responsiveness = () => {
    if (window.innerWidth <= 499) {
      setDivWidth('90vw');
      setImageDisplay('block');
      setImageWidth('75%');
      setImageMargin('40px');
    } else if (window.innerWidth <= 960 && window.innerWidth > 499) {
      setDivWidth('80vw');
      setImageDisplay('block');
      setImageWidth('75%');
      setImageMargin('40px');
    } else if (window.innerWidth <= 1500 && window.innerWidth > 960) {
      setDivWidth('70vw');
      setImageDisplay('inline-flex');
      setImageWidth('300px');
      setImageMargin('10px');
    } else if (window.innerWidth <= 1850 && window.innerWidth > 1500) {
      setDivWidth('60vw');
      setImageDisplay('inline-flex');
      setImageWidth('360px');
      setImageMargin('10px');
    } else {
      setDivWidth('50vw');
      setImageDisplay('inline-flex');
      setImageWidth('360px');
      setImageMargin('10px');
    }
  };

  return (
    <AboutContainer id='about'>
      <MainDiv width={divWidth}>
        <TitleContainer id='title'>
          About Me
        </TitleContainer>
        <MyPictureContainer display={imageDisplay} imageMargin={imageMargin} >
          <MyPicture width={imageWidth} src='https://i.imgur.com/uEfo6Po.jpg' alt='seiji' />
        </MyPictureContainer>
        <TextContainer>
          Hi! I'm Seiji Matsumoto.
          <br /><br />
          I am a 25-year-old software engineer based in the Greater New York area with a passion for writing clean and efficient code. Fresh out of an intensive Software Engineering Immersive at Hack Reactor, I am eager to being my software development journey and apply my knowledge.
          <br /><br />
          During my time as an IT professional, I spent a considerable amount of time writing scripts that could either automate or speed up repetitive tasks. Scripting reignited the passion I had for programming that I had tucked away years ago. Over the past year, I have built several full-stack web applications and other program.
          <br /><br />
          Some of the technologies I use are:
        </TextContainer>
        <Technologies>
          <TechnologiesList>
            <UL>➢ Javascript (ES6+)</UL>
            <UL>➢ React</UL>
            <UL>➢ Node.js</UL>
          </TechnologiesList>
          <TechnologiesList>
            <UL>➢ Jest / Enzyme</UL>
            <UL>➢ Styled Components</UL>
            <UL>➢ AWS</UL>
          </TechnologiesList>
        </Technologies>
      </MainDiv>
    </AboutContainer>
  );
};

export default About;