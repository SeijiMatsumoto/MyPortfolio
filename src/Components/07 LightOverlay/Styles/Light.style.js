import styled from 'styled-components';

export const Main = styled.div`
  display: ${props => props.display || 'block'};
  width: 65px;
  height: 65px;
  position: fixed;
  bottom: 15px;
  right: -85px;
  z-index: 5;
  text-align: center;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
`;

export const Button = styled.button`
  border-radius: 10%;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  cursor: pointer;
  border: none;
  background-color: ${props => props.bg};
  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.05);
  }
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Switch = styled.i`
  position: relative;
  color: ${props => props.color};
`;