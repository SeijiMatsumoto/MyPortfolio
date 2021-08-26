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
  top: ${props => props.top};
  text-align: left;
  font-size: ${props => props.size};
`;

export const MenuLink = styled.li`
  padding: ${props => props.padding};
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