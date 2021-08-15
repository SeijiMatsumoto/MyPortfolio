import styled from 'styled-components';
const keyframes = require('styled-components').keyframes

export const NavbarContainer = styled.nav`
  background-color: #2C394B;
  width: 100%;
  height: 140px;
  position: fixed;
  transition: top 0.3s;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
