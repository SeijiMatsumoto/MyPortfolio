import React, { useEffect } from 'react';
import { LandingContainer, Bg, Terminal, TextDiv, MyName } from './Styles/Landing.style';
import anime from 'animejs';

const Landing = (props) => {
  return (
    <LandingContainer id='landing'>
      <Bg></Bg>
      <Terminal className='nameDiv'>
          <TextDiv><MyName>Seiji Matsumoto...</MyName></TextDiv>
      </Terminal>
    </LandingContainer>
  );
};

export default Landing;