import React from 'react';
import { MenuDiv, MenuLinks, MenuLink, MenuA } from './Styles/Menu.style.js';

const Menu = (props) => {
  return (
    <MenuDiv>
      <MenuLinks>
        <MenuLink><MenuA onClick={props.showMenu} href='#about'>About</MenuA></MenuLink>
        <MenuLink><MenuA onClick={props.showMenu} href='#projects'>Projects</MenuA></MenuLink>
        <MenuLink><MenuA onClick={props.showMenu} href='#experience'>Experience</MenuA></MenuLink>
        <MenuLink><MenuA onClick={props.showMenu} href='#contact'>Contact</MenuA></MenuLink>
      </MenuLinks>
    </MenuDiv>
  );
};

export default Menu;