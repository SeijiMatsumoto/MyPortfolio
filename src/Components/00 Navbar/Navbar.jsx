import React, { useState } from 'react';
import { NavbarContainer, HamburgerDiv, Hamburger, MenuOpen, MenuLinks, MenuLink, MenuA, Links, Link, A, Resume } from './Styles/Navbar.style.js';

const Navbar = (props) => {

  var [menuOpen, toggleMenu] = useState(false);

  const showMenu = () => {
    toggleMenu(!menuOpen);
    console.log('Hamburger click');
  }

  return (
    <NavbarContainer id='navbar'>
      <HamburgerDiv><Hamburger src='https://i.imgur.com/tyD5MsH.png' onClick={showMenu} /></HamburgerDiv>
      {menuOpen ? <MenuOpen display={menuOpen}>
        <MenuLinks>
          <MenuLink><MenuA onClick={showMenu} href='#about'>About</MenuA></MenuLink>
          <MenuLink><MenuA onClick={showMenu} href='#projects'>Projects</MenuA></MenuLink>
          <MenuLink><MenuA onClick={showMenu} href='#experience'>Experience</MenuA></MenuLink>
          <MenuLink><MenuA onClick={showMenu} href='#Contact'>Contact</MenuA></MenuLink>
        </MenuLinks>
      </MenuOpen> : null }
      <Links>
        <Link>01. <A href='#about'>About</A></Link>
        <Link>02. <A href='#projects'>Projects</A></Link>
        <Link>03. <A href='#experience'>Experience</A></Link>
        <Link>04. <A href='#contact'>Contact</A></Link>
        <Resume>RESUME</Resume>
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;