import React, { useEffect } from 'react';
import { LandingContainer, Terminal, MyNameDiv, MyName } from './Styles/Landing.style';
import anime from 'animejs';

const Landing = () => {
  return (
    <LandingContainer>
      <Terminal className='nameDiv'>
        <MyNameDiv>
          <MyName>SEIJI MATSUMOTO...</MyName>
        </MyNameDiv>
      </Terminal>
    </LandingContainer>
  );
};

export default Landing;