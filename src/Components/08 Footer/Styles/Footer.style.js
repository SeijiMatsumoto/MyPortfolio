import styled from 'styled-components';

export const FooterDiv = styled.div`
  height: 200px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg};
  bottom: 0;
`;

export const Text = styled.div`
  text-align: center;
  color: ${props => props.color};
  font-size: 18px;
`;

export const Name = styled.div`
  color: #FF4C29;
  /* cursor: pointer; */
`;