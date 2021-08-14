import styled from 'styled-components';

export const LinksUl = styled.ul`
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
  font-size: 22px;

  `;

export const A = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: white;
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
  background-color: black;
  color: #FF4C29;
  border: 1px solid #FF4C29;
  margin-left: 10px;
  margin-right: 20px;
  position: relative;
  width: 110px;
  height: 45px;
  cursor: pointer;
  font-size: 22px;
  text-align: center;

  &:hover {
    background-color: rgba(255, 115, 87, .2);
  }

`;