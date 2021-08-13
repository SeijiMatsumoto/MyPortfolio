import React from 'react';
import {AboutContainer, TitleContainer, SectionTitle, Horizontal,  MidDiv, TextContainer, MyPictureContainer, MyPicture} from './Styles/About.style.js';

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
          I am a 25-year-old software engineer based in the Greater New York area and fresh out of an intensive Software Engineering Immersive, with a passion for writing clean and efficient code.
          <br/><br/>
          During my time as an IT professional, I spent a considerable amount of time writing scripts that could either automate or speed up certain repetitive tasks. Doing so reignited the passion I had for programming that I had tucked away. I have built several personal projects and cooperative projects.
        </TextContainer>
        <MyPictureContainer>
          <MyPicture src='https://i.imgur.com/uEfo6Po.jpg' alt='seiji'/>
        </MyPictureContainer>
      </MidDiv>
    </AboutContainer>
  );
};

export default About;