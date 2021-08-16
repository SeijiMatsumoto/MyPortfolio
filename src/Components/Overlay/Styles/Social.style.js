import styled from 'styled-components';

export const Main = styled.div`
  display: ${props => props.display || 'block'};

`;

export const DisplayDiv = styled.div`

display: flex;
  flex-direction: column;
`;


export const LeftSocial = styled.div`
  position: absolute;
  width: 1px;
  height: 100px;
  background-color: white;
  bottom: -100px;
  left: 60px;
  z-index: 10;
`;

export const IconsDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: -130px;
  left: 50px;
  z-index: 10;
  `;


export const Icons = styled.a`
  height: 100%;
  margin-top: 33px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s ease-in;
  color: white;
  &:hover{
    transform:translateY(-5px);
    color: #FF4C29;
  }
`;