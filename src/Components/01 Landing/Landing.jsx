import React, { useEffect } from 'react';
import { LandingContainer, Bg, Terminal, MyNameDiv, MyName } from './Styles/Landing.style';
import anime from 'animejs';

const Landing = () => {
  return (
    <LandingContainer>
      <Bg></Bg>
      <Terminal className='nameDiv'>
        <MyNameDiv>
          <MyName>Seiji Matsumoto...</MyName>
        </MyNameDiv>
      </Terminal>
    </LandingContainer>
  );
};

export default Landing;