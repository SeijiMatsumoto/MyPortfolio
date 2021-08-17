import styled from 'styled-components';

export const LinksUl = styled.ul`
  position: absolute;
  right: 140px;
  display: inline-block;
  top: 0;
`;

export const Link = styled.li`
  float: left;
  padding: 10px;
  list-style: none;
  color: #FF4C29;
  font-size: 22px;
`;

export const A = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: ${props => props.color || 'white'};
  transition: 0.1s ease-in;
  text-transform: capitalize;
  overflow: none;
  &:hover {
    color: #FF4C29;
  }
`;

export const Resume = styled.button`
  transition: 0.2s ease-in;
  border-radius: 3px;
  background-color: transparent;
  color: ${props => props.color};
  border: 2px solid #FF4C29;
  position: absolute;
  top: 5px;
  width: 110px;
  height: 45px;
  cursor: pointer;
  font-size: 22px;
  text-align: center;

  &:hover {
    background-color: rgba(255, 115, 87, .2);
  }

`;