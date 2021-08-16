import React, { useEffect, useState } from 'react';
import { MenuDiv, MenuLinks, MenuLink, MenuA } from './Styles/Menu.style.js';

const Menu = (props) => {
  var [padding, setPadding] = useState('1px');
  var [bg, setBg] = useState('#283134');
  var [color, setColor] = useState('white');

  useEffect(() => {
    window.addEventListener('resize', displayButton);
    displayButton();
  }, [])

  useEffect(() => {
    if (!props.isDark) {
      setColor('#283134');
      setBg('white');
    } else {
      setColor('white');
      setBg('#283134');
    }
  }, [props.isDark])

  const displayButton = () => {
    if (window.innerWidth <= 500) {
      setPadding('10px');
    } else if (window.innerWidth <= 960 && window.innerWidth > 500) {
      setPadding('5px;');
    }
  };

  return (
    <MenuDiv bg={bg} padding={padding}>
      <MenuLinks>
        <MenuLink ><MenuA color={color} onClick={props.showMenu} href='#about'>About</MenuA></MenuLink>
        <MenuLink><MenuA color={color} onClick={props.showMenu} href='#projects'>Projects</MenuA></MenuLink>
        <MenuLink><MenuA color={color} onClick={props.showMenu} href='#experience'>Experience</MenuA></MenuLink>
        <MenuLink><MenuA color={color} onClick={props.showMenu} href='#contact'>Contact</MenuA></MenuLink>
      </MenuLinks>
    </MenuDiv>
  );
};

export default Menu;