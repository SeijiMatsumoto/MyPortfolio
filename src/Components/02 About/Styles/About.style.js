import styled from 'styled-components';

export const AboutContainer = styled.div`
  margin: 0;
  max-width: 100vw;
  background-color: ${props => props.bg || '#283134'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const MainDiv = styled.div`
  width: ${props => props.width || '1000px'};
  margin-top: 50px;
  margin-bottom: 100px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-self: center;
  color: ${props => props.color};
  /* border: 1px solid black; */
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 0px;
  font-size: ${props => props.font};
  color: #FF4C29;
`;

export const TextContainer = styled.div`
  font-size: ${props => props.font || '20px'};
  width: ${props => props.width || '700px'};
`;

export const MyPictureContainer = styled.div`
  position: relative;
  top: ${props => props.top || '50px'};
  right: ${props => props.right};
  width: ${props => props.width};
`;

export const MyPicture = styled.img`
  border-radius: 10px;
  margin: ${props => props.margin || '40px'};
  width: ${props => props.width};
  height: ${props => props.width};
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export const TechDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.width || '600px'};
  margin-top: 20px;
`;

export const TechnologiesList = styled.div`
  margin-top: -20px;
  margin-left: -20px;
`;

export const UL = styled.ul`
  list-style: none;
  /* float: left; */
`;