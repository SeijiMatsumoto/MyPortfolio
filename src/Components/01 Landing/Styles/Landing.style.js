import styled from 'styled-components';
const keyframes = require('styled-components').keyframes

export const LandingContainer = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100%;
  background-color: #082032;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Terminal = styled.div`
  margin: 0;
  padding: 0;
  width: 900px;
  height: 600px;
  background-color: black;
  border-radius: 1%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyNameDiv = styled.div`

`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #FF4C29; }
`;

export const MyName = styled.h1`
  font-size: 60px;
  color: white;
  overflow: hidden;
  border-right: .1em solid #FF4C29;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.1em;
  animation:
    ${typing} 2s steps(40),
    ${blink} .75s step-end infinite;
`;

