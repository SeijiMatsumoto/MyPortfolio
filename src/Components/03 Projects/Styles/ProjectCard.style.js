import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
`;

export const ImageDiv = styled.div`
  width: ${props => props.width};
  height: ${props=> props.height};
  position: relative;
  right: ${props => props.right};
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  overflow: hidden;
  cursor: pointer;
`;

export const ExternalLink = styled.i`
  position: absolute;
  text-align: center;
  color: #FF4C29;
`;

export const ProjImage = styled.img`
  width: ${props => props.width};
  height: 100%;
  object-fit: cover;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  transition: 0.4s ease-in;
  &:hover {
    transform: scale(1.04);
    opacity: 0.6;
  }
`;

export const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${props => props.width};
  margin-left: -20px;
  position: relative;
  left: ${props => props.left};
  font-size: 18px;
`;

export const Title = styled.div`
  font-size: ${props => props.font};
  font-weight: bold;
  border-bottom: 2px solid black;
  border-color: ${props => props.color};
`;

export const Description = styled.div`
  font-size: ${props => props.font};
  width: 100%;
`;

export const StackCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  position: relative;
  flex-wrap: wrap;
`;

export const Stack = styled.div`
  height: 25px;
  margin-left: 10px;
  padding: 2px 8px 0px 8px;
  color: ${props => props.color};
  background-color: ${props => props.bg};
  border-radius: 2px;
`;