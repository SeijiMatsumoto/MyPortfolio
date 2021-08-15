import styled from 'styled-components';

export const MenuDiv = styled.div`
  background-color: #334756;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
`;

export const MenuLinks = styled.ul`
  position: absolute;
  text-align: left;
`;

export const MenuLink = styled.li`
  padding: 25px;
  font-size: 60px;
  color: #FF4C29;
  list-style: none;
  text-align: left;
`;

export const MenuA = styled.a`
  color: white;
  transition: 0.1s ease-in;
  text-decoration: none;
  overflow: none;
  &:hover {
    color: #FF4C29;
  }
`;