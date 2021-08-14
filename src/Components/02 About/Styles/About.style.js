import styled from 'styled-components';

export const AboutContainer = styled.div`
  margin: 0px;
  max-width: 100vw;
  background-color: #334756;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 200px;
  padding-bottom: 200px;
`;

export const MidDiv = styled.div`
  width: 800px;
  /* border: 1px black solid; */
  padding: 20px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: none;
  align-items: center;
  position: relative;
  margin-top: -100px;
`;

export const TitleContainer = styled.div`
  position: absolute;
  font-size: 35px;
  top: 10px;
  width: 100%;
`;

export const TextContainer = styled.div`
  font-size: 20px;
  margin: 5px;
  margin-top: 70px;
  margin-right: 20px;
  position: relative;
`;

export const Technologies = styled.div`
  position: absolute;
  margin-left: -40px;
  margin-top: -10px;
`;

export const TechnologiesList = styled.div`
  float: left;
`;

export const UL = styled.ul`
  list-style: none;
`;

export const MyPictureContainer = styled.div`
  width: 274px;
  height: 365px;
  object-fit: cover;
  margin-top: 120px;
`;

export const MyPicture = styled.img`
  width: 274px;
  height: 365px;
  overflow: none;
  border-radius: 5%;
`;