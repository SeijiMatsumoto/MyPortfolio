import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  height: 120px;
  width: 100%;
  position: fixed;
  top: 0;
  /* background-color: black; */
  transition: top 0.3s;
  display: flex;
  align-items: right;
  justify-content: space-between;
  z-index: 10;
`;

export const Links = styled.ul`
  position: absolute;
  padding: 20px;
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