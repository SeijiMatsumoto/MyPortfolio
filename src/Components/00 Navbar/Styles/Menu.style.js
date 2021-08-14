import styled from 'styled-components';

export const MenuDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLinks = styled.ul`
`;

export const MenuLink = styled.li`
  padding: 25px;
  font-size: 70px;
  color: #FF4C29;
  list-style: none;
    text-align: center;
`;

export const MenuA = styled.a`
  color: black;
  transition: 0.1s ease-in;
  text-decoration: none;
  overflow: none;
  &:hover {
    color: #FF4C29;

  }
`;