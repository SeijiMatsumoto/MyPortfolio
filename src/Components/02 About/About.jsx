import React from 'react';
import {AboutContainer, TitleContainer, Technologies, TechnologiesList, UL, MidDiv, TextContainer, MyPictureContainer, MyPicture} from './Styles/About.style.js';

const About = () => {
  return (
    <AboutContainer id='about'>
      <MidDiv>
        <TitleContainer>
          About Me
        </TitleContainer>
        <TextContainer>
          Hi! I'm Seiji Matsumoto.
          <br/><br/>
          I am a 25-year-old software engineer based in the Greater New York area with a passion for writing clean and efficient code. Fresh out of an intensive Software Engineering Immersive at Hack Reactor, I am eager to being my software development journey and apply my knowledge.
          <br/><br/>
          During my time as an IT professional, I spent a considerable amount of time writing scripts that could either automate or speed up repetitive tasks. Scripting reignited the passion I had for programming that I had tucked away years ago. Over the past year, I have built several full-stack web applications and other program.

          <br/><br/>
          Some of the technologies I use are:
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

        </TextContainer>
        <MyPictureContainer>
          <MyPicture src='https://i.imgur.com/uEfo6Po.jpg' alt='seiji'/>
        </MyPictureContainer>
      </MidDiv>
    </AboutContainer>
  );
};

export default About;