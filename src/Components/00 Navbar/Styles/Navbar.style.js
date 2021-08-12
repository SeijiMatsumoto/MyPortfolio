import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  height: 10vh;
  width: 100vw;
  position: fixed;
  top: 0;
  transition: top 0.3s;
  background-color: black;
  display: flex;
  align-items: right;
  justify-content: space-between;
  z-index: 10;
`;

export const Links = styled.ul`
  position: absolute;
  right: 0;
  display: inline-block;
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