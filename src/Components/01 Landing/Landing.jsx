import React, { useEffect } from 'react';
import { LandingContainer, MyNameDiv, MyName } from './Styles/Landing.style';
import anime from 'animejs';

const Landing = () => {
  return (
    <LandingContainer>
      <MyNameDiv className='nameDiv'><MyName>SEIJI MATSUMOTO</MyName></MyNameDiv>
    </LandingContainer>
  );
};

export default Landing;