import React, { useEffect } from 'react';
import { LandingContainer, Bg, Terminal, MyNameDiv, MyName } from './Styles/Landing.style';
import anime from 'animejs';

const Landing = (props) => {
  return (
    <LandingContainer id='landing'>
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