import styled from 'styled-components';
import breakpoint from '../../../breakpoints.js';
const keyframes = require('styled-components').keyframes

/*
  @media only screen and ${breakpoint.device.xs} {

  }
  @media only screen and ${breakpoint.device.sm}{

  }
  @media only screen and ${breakpoint.device.lg}{

  }
*/

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
  background: url('https://images.pexels.com/photos/3909922/pexels-photo-3909922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=1080&w=1920') no-repeat center center fixed;
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

  background-color: black;
  border-radius: 1%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media only screen and ${breakpoint.device.xs} {
    width: 400px;
    height: 250px;
  }
  @media only screen and ${breakpoint.device.sm}{
    width: 700px;
    height: 400px;
  }
  @media only screen and ${breakpoint.device.lg}{
    width: 900px;
    height: 600px;
  }
`;

export const TextDiv = styled.div`
`;

export const type = keyframes`
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

export const Hello = styled.p`
  color: white;
  overflow: hidden;
  border-right: .5em solid #FF4C29;
  font-weight: bold;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.1em;

  position: absolute;
  left: 0;
  right: 0;

  @media only screen and ${breakpoint.device.xs} {
    font-size: 20px;
    &:nth-child(1) {
      width: 185px;
      opacity: 0;
      animation: ${type} 0.5s steps(40, end);
      animation-fill-mode: forwards;
      animation-delay: 1s;
      top: 90px;
    };

    &:nth-child(2) {
      font-size: 30px;
      width: 300px;
      opacity: 0;
      animation: ${type2} 0.5s steps(40, end);
      animation-delay: 2s;
      animation-fill-mode: forwards;
      top: 120px;
    };

    &:nth-child(3) {
      display: none;
    };
  }

  @media only screen and ${breakpoint.device.sm}{
    &:nth-child(1) {
      font-size: 30px;
      width: 270px;
      opacity: 0;
      animation: ${type} 0.5s steps(40, end);
      animation-fill-mode: forwards;
      animation-delay: 1s;
      top: 150px;
    };

    &:nth-child(2) {
      font-size: 50px;
      width: 500px;
      opacity: 0;
      animation: ${type2} 0.5s steps(40, end);
      animation-delay: 2s;
      animation-fill-mode: forwards;
      top: 200px;
    };

    &:nth-child(3) {
      display: none;
    };
  }

  @media only screen and ${breakpoint.device.lg}{
    &:nth-child(1) {
      font-size: 40px;
      width: 375px;
      opacity: 0;
      animation: ${type} 0.5s steps(40, end);
      animation-fill-mode: forwards;
      animation-delay: 1s;
      top: 200px;
    };

    &:nth-child(2) {
      font-size: 80px;
      width: 800px;
      opacity: 0;
      animation: ${type2} 0.5s steps(40, end);
      animation-delay: 2s;
      animation-fill-mode: forwards;
      top: 250px;
    };

    &:nth-child(3) {
      font-size: 40px;
      width: 555px;
      opacity: 0;
      animation: ${type3} 0.5s steps(40, end), ${blink} .5s step-end infinite alternate;
      animation-delay: 4s;
      animation-fill-mode: forwards;
      bottom: 30px;
      margin: auto;
      display: block;
    };
  }


`;

