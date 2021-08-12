import styled from 'styled-components';
const keyframes = require('styled-components').keyframes


export const LandingCont = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: #082032;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const slideIn = keyframes`
  from { left: -100vw; }
  to { left: 0; }
  `;

export const MyNameDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 60vw;
  height: 60vh;
  background-color: white;
  border-radius: 10%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${slideIn};
  animation-duration: 4s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
`;

export const MyName = styled.h1`
  font-size: 6vw;
  color: black;
  font-family: Open Sans;
`;

