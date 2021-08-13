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

export const NavbarContainer = styled.nav`
  /* background-color: black; */
  width: 100%;
  position: fixed;
  top: 0;
  transition: top 0.3s;
  display: flex;
  align-items: right;
  justify-content: space-between;
  z-index: 10;

  @media only screen and ${breakpoint.device.xs} {
    height: 80px;
  }
  @media only screen and ${breakpoint.device.sm}{
    height: 120px;
  }
  @media only screen and ${breakpoint.device.lg}{
    height: 120px;
  }
`;

export const HamburgerDiv = styled.div`
  position: absolute;
  top: 25px;
  right: 5px;
  width: 80px;
  height: 80px;

  @media only screen and ${breakpoint.device.xs} {
    display: block;
  }
  @media only screen and ${breakpoint.device.sm}{
    display: none;
  }
  @media only screen and ${breakpoint.device.lg}{
    display: none;
  }
`;

export const Hamburger = styled.img`
  width: 60%;
  padding: 5px;
  cursor: pointer;
`;

export const MenuSlideIn = keyframes`
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
`

export const MenuSlideOut = keyframes`
  from {
    margin-left: 0%;
  }
  to {
    margin-left: 100%;
  }
`

export const MenuOpen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  animation: ${MenuSlideIn} 0.5s;
  display: ${prop => prop.display };
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuLinks = styled.ul`
`;

export const MenuLink = styled.li`
  list-style: none;
  text-decoration: none;
  font-weight: bold;
  margin: 30px;
`;

export const MenuA = styled.a`
text-decoration: none;
font-size: 40px;
color: black;
transition: 0.2s ease-in;

  &:hover {
    color: #FF4C29;
  }
`;

export const Links = styled.ul`
  position: absolute;
  padding: 20px;
  right: 0;
  display: inline-block;

  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm}{
    display: inline-block;
  }
  @media only screen and ${breakpoint.device.lg}{
    display: inline-block;
  }
`;

export const Link = styled.li`
  float: left;
  padding: 10px;
  list-style: none;
  color: #FF4C29;
`;

export const A = styled.a`
  text-decoration: none;
  color: white;
  transition: 0.1s ease-in;

  &:hover {
    color: #FF4C29;
  }
`;

export const Resume = styled.button`
  transition: 0.2s ease-in;
  border-radius: 3px;
  background-color: black;
  color: #FF4C29;
  border: 1px solid #FF4C29;
  margin-left: 10px;
  margin-right: 20px;
  position: relative;
  width: 90px;
  height: 45px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 115, 87, .2);
  }

`;