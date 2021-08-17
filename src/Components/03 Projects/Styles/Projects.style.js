import styled from 'styled-components';

export const ProjectsContainer = styled.div`
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
  top: -10px;
  font-size: ${props => props.font};
  color: #FF4C29;
`;

export const ProjDiv = styled.div`
  width: ${props => props.width || '1000px'};
  margin-top: 80px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  color: ${props => props.color};
  border: 1px solid black;
`;