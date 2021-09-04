import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  margin: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Company = styled.div`
  font-size: ${props => props.font};
  border-bottom: ${props => props.border};
  margin-bottom: 5px;
  padding-bottom: -10px;
`;

export const PosTime = styled.div`
  display: inline-flex;
  justify-content: space-between;
`;

export const Position = styled.div`
  font-size: ${props => props.font};
`;

export const Time = styled.div`
  font-size: ${props => props.font};
`;

export const Desc = styled.ul`

`;

export const DescLi = styled.li`
  font-size: ${props => props.font};
  list-style: none;

`;