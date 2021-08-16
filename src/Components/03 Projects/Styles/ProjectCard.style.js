import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  justify-content: flex-start;
`;

export const ImageDiv = styled.div`
  width: 420px;
  height: 310px;
  position: relative;
  right: ${props => props.right};
  margin: 20px;
  cursor: pointer;
`;

export const ProjImage = styled.img`
  width: 420px;
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
  width: 420px;
  margin-left: -20px;
  position: relative;
  left: ${props => props.left};
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  border-bottom: 2px solid black;
  border-color: ${props => props.color};
`;

export const Description = styled.div`
  width: 100%;
`;

export const StackCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  position: relative;
`;

export const Stack = styled.div`
  height: 25px;
  margin-left: 10px;
  padding: 2px 8px 0px 8px;
  color: ${props => props.color};
  background-color: ${props => props.bg};
  border-radius: 2px;
`;