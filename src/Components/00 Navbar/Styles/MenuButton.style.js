import styled from 'styled-components';

export const ButtonContainer = styled.div`
  /* border: 1px solid black; */
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 10px;
  padding: 0;
  right: 0;
  z-index: 8;
  top: 3px;
`;

export const Button = styled.i`
  margin: 10px;
  background-color: transparent;
  color: ${props => props.color || 'white'};
`;

