import styled from 'styled-components';

export const AboutContainer = styled.div`
  margin: 0px;
  max-width: 100vw;
  background-color: #334756;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const MainDiv = styled.div`
  width: ${props => props.width || '50vw'};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
`;

export const TitleContainer = styled.div`
  position: absolute;
  font-size: 35px;
`;

export const TextContainer = styled.div`
`;

export const ImageDiv = styled.div`
`;

export const Technologies = styled.div`
  position: relative;
  left: 0;
`;

export const TechnologiesList = styled.div`
  float: left;
`;

export const UL = styled.ul`
  list-style: none;
`;

export const MyPictureContainer = styled.div`
  margin-top: 70px;
`;

export const MyPicture = styled.img`

`;