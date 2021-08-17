import styled from 'styled-components';

export const ContactContainer = styled.div`
  margin: 0px;
  max-width: 100vw;
  background-color: ${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  text-align: center;
`;

export const Body = styled.div`
  font-size: ${props => props.font};

`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  position: relative;
  top: 40px;
`;

export const Link = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  margin: 20px;
  padding: 5px;

  color: ${props => props.color};
  background-color: ${props => props.bg};
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;