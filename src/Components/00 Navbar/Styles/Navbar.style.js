import styled from 'styled-components';
const keyframes = require('styled-components').keyframes

export const NavbarContainer = styled.nav`
  background-color: ${props => props.bgColor || '#1E242A'};
  width: 100%;
  height: 140px;
  position: fixed;
  transition: top 0.3s;
  display: flex;
  flex-direction: row;
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const MenuDiv = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 6;
  position: absolute;
  top: 0;
  left: 1000px;
`;

export const Logo = styled.img`
  width: 80px;
  height: 70px;
  position: absolute;
  margin: 10px;
  left: ${props => props.iconLeft || '50px'};
  cursor: pointer;
`;