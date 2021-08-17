import styled from 'styled-components';

export const MenuDiv = styled.div`
  background-color: ${props => props.bg || '#283134'};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: ${props => props.padding || '5px'};
`;

export const MenuLinks = styled.ul`
  position: absolute;
  left: -30px;
  top: 150px;
  text-align: left;
`;

export const MenuLink = styled.li`
  padding: 20px;
  font-size: 30px;
  list-style: none;
  text-align: left;
  z-index: 5;
`;

export const MenuA = styled.a`
  color: ${props => props.color || '#283134'};
  cursor: pointer;
  transition: 0.1s ease-in;
  text-decoration: none;
  overflow: none;
  &:hover {
    color: #FF4C29;
  }
`;