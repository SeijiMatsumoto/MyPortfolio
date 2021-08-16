import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 350px;
  margin: 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProjImage = styled.img`
  width: 450px;
  height: 310px;
  margin: 20px;
  object-fit: cover;
  position: relative;
  right: 100px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

export const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 420px;
  height: 310px;
  position: relative;
  left: 100px;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  border-bottom: 2px solid black;
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
  /* border: 1px solid black; */
`;

export const Stack = styled.div`
  height: 25px;
  margin-left: 10px;
  padding: 2px 8px 0px 8px;
  color: white;
  background-color: #1E242A;
  border-radius: 2px;
`;