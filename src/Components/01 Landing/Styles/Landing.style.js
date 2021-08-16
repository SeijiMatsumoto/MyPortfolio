import styled from 'styled-components';

export const LandingContainer = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
  background-color: #1E242A;
`;

export const MainDiv = styled.div`
  margin: ${props => props.margin || '200px'};
  margin-top: ${props => props.marginTop || '200px'};
  padding: 0;
  background-color: transparent;
  border-radius: 1%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;
`;

export const TextDiv = styled.div`
  font-size: ${props => props.font || '70px'};
  width: 100%;
  height: 80%;
  display: block;
  margin-top: 100px;
`;

export const Hello = styled.p`
  color: #FF4C29;
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto;
  letter-spacing: 0.1em;
`;

export const MyName = styled.p`
  color: white;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 20px;
  letter-spacing: 0.1em;
`;

export const Continue = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto;
  margin-top: ${props => props.top || '100px'};
  letter-spacing: 0.1em;
  display: ${props => props.display || 'block'};
`;

export const IAMDiv = styled.div`
  font-size: ${props => props.font || '30px'};
  padding-right: 20px;
  font-weight: bold;
  letter-spacing: 0.1em;
  display: flex;
  position: absolute;
`;

export const Text = styled.p`
  margin-right: 16px;
  color: white;
  white-space: nowrap;
`;

export const Text2 = styled.p`
  color: #FF4C29;
  white-space: normal;
`;

export const DownButton = styled.div`
  margin: auto;
  bottom: ${props => props.bottom || '60px'};
  left: 0;
  right: 0;
  width: ${props => props.size || '60px'};
  height: ${props => props.size || '60px'};
  background-color: transparent;
  position: absolute;
  transition: 0.2s ease-in;
  cursor: pointer;
  z-index: 2;
  background-image: url('https://i.imgur.com/AJrt9vn.png');
  background-size: ${props => props.bgSize || '60px '} ${props => props.bgSize || '60px'};
  &:hover{
    transform: translateY(20px);
  }
`;
