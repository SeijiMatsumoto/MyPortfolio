import styled from 'styled-components';

export const AboutContainer = styled.div`
  margin: 0;
  max-width: 100vw;
  background-color: #334756;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const MainDiv = styled.div`
  width: ${props => props.width || '1000px'};
  margin: 100px;
  margin-top: 170px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-self: center;
  /* border: 1px solid black; */
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 100px;
  font-size: 35px;
`;

export const TextContainer = styled.div`
  font-size: 20px;
  width: ${props => props.width || '700px'};
`;

export const MyPictureContainer = styled.div`
  position: relative;
  top: ${props => props.top || '50px'};
  width: 300px;
`;

export const MyPicture = styled.img`
  border-radius: 10px;
  margin: ${props => props.margin || '40px'};
  width: 300px;
  height: 300px;
  object-fit: cover;
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