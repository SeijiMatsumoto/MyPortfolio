import styled from 'styled-components';

export const ContactContainer = styled.div`
  margin: 0px;
  max-width: 100vw;
  background-color: ${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.div`
  position: absolute;
  top: 0;
  font-size: 35px;
  color: #FF4C29;
`;

export const ContactDiv = styled.div`
  width: ${props => props.width || '1000px'};
  margin: 100px;
  margin-top: 50px;
  margin-bottom: 140px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-self: center;
  color: ${props => props.color};
  border: 1px solid black;
`;
