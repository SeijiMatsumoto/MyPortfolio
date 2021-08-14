import styled from 'styled-components';
const keyframes = require('styled-components').keyframes

export const NavbarContainer = styled.nav`
  /* background-color: black; */
  width: 100%;
  height: 140px;
  position: fixed;
  top: 0;
  transition: top 0.3s;
  display: flex;
  align-items: right;
  justify-content: space-between;
  z-index: 5;
`;