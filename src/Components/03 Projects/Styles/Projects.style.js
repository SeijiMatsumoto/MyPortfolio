import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  margin: 0px;
  margin-top: -60px;
  max-width: 100vw;
  background-color: ${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 50px;
`;

export const Title = styled.div`
  position: absolute;
  top: -20px;
  font-size: ${props => props.font};
  color: #FF4C29;
`;

export const ProjDiv = styled.div`
  width: ${props => props.width || '1000px'};
  margin-top: 70px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  color: ${props => props.color};
  margin-bottom: 50px;
`;

export const ViewMore = styled.div`
  width: ${props => props.width};
  position: absolute;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  bottom: 40px;
  color: ${props => props.color};
  background-color: ${props => props.bg};
  border-radius: 10px;
  text-align: center;
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;