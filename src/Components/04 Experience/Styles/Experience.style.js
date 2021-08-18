import styled from 'styled-components';

export const ExperienceContainer = styled.div`
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
  font-size: ${props => props.font};
  color: #FF4C29;
`;

export const ExpDiv = styled.div`
  width: ${props => props.width || '1000px'};
  margin-bottom: 140px;
  margin-top: -20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-self: center;
  color: ${props => props.color};
`;