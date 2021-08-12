import styled from 'styled-components';
const keyframes = require('styled-components').keyframes

export const LandingContainer = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100%;
  background-color: #082032;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
`;

export const Bg = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1604009506606-fd4989d50e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  filter: blur(8px);
  -webkit-filter: blur(8px);
  z-index: 0;
  position: absolute;

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
  z-index: 1;
`;

export const MyNameDiv = styled.div``;

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
  font-weight: bold;
  animation:
    ${typing} 2s steps(40),
    ${blink} .75s step-end infinite;
`;

