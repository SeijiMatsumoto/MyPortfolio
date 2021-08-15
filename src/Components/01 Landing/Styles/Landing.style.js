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
`;

export const Bg = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #2C394B;
  z-index: 0;
  position: absolute;
`;

export const MainDiv = styled.div`
  margin: ${props => props.margin || '200px'};
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
  margin-top: 30px;
  letter-spacing: 0.1em;
  display: ${props => props.display || 'block'};
`;

export const DownButton = styled.div`
  margin: auto;
  bottom: 25px;
  left: 0;
  right: 0;
  width: 60px;
  height: 60px;
  /* border: 1px solid black; */
  background-color: transparent;
  position: absolute;
  transition: 0.2s ease-in;
  cursor: pointer;
  background-image: url('https://korumaine.com/wp-content/uploads/2019/02/kisspng-arrow-symbol-icon-down-arrow-png-pic-5a756e2591b7b9.1532686215176453495969.png');
  background-size: 60px 60px;
  &:hover{
    transform: translateY(20px);
  }
`;