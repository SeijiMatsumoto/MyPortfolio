import React, { useEffect, useState } from 'react';
import { MenuDiv, MenuLinks, MenuLink, MenuA } from './Styles/Menu.style.js';

const Menu = (props) => {

  var [padding, setPadding] = useState('1px');

  useEffect(() => {
    window.addEventListener('resize', displayButton);
    displayButton();
  }, [])

  const displayButton = () => {
    if (window.innerWidth <= 500) {
      setPadding('10px');
    } else if (window.innerWidth <= 960 && window.innerWidth > 500) {
      setPadding('5px;');
    }
  };

  return (
    <MenuDiv padding={padding}>
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