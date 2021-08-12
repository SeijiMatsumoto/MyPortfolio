import styled from 'styled-components';
const keyframes = require('styled-components').keyframes

export const LandingContainer = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100vw;
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
  background: url('https://images.unsplash.com/photo-1604009506606-fd4989d50e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
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

export const TextDiv = styled.div`
`;

export const type = keyframes`
  0% {
    width: 0;
  }
  99.9% {
    border-right: .15em solid orange;
  }
  100% {
    border: none;
  }
`;

export const type2 = keyframes`
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid orange;
  }
  100% {
    opacity: 1;
    border: none;
  }
`;

export const type3 = keyframes`
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

export const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const Hello = styled.p` // p
  font-size: 40px;
  color: white;
  overflow: hidden;
  border-right: .5em solid #FF4C29;
  font-weight: bold;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.1em;

  &:nth-child(1) {
    width: 375px;
    animation: ${type} 1s steps(40, end);
    animation-fill-mode: forwards;
  };

  &:nth-child(2) {
    font-size: 80px;
    width: 800px;
    opacity: 0;
    animation: ${type2} 1s steps(40, end);
    animation-delay: 1s;
    animation-fill-mode: forwards;
  };

  &:nth-child(3) {
    width: 555px;
    opacity: 0;
    animation: ${type3} 1s steps(40, end), ${blink} .5s step-end infinite alternate;
    animation-delay: 4s;
    animation-fill-mode: forwards;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 20px;
  }
`;

