import React, { useEffect } from 'react';
import { LandingContainer, Bg, Terminal, TextDiv, Hello } from './Styles/Landing.style';
// import anime from 'animejs';

const Landing = (props) => {
  return (
    <LandingContainer id='landing'>
      <Bg></Bg>
      <Terminal className='nameDiv'>
          <TextDiv>
            <Hello>> Hi. My name is</Hello>
            <Hello>> Seiji Matsumoto</Hello>
            <Hello>> Press [ ⏎ ] to continue</Hello>
          </TextDiv>
      </Terminal>
    </LandingContainer>
  );
};

export default Landing;