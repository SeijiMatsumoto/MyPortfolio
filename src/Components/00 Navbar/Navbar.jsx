import React from 'react';
import { NavbarContainer, Links, Link, A } from './Styles/Navbar.style.js';

const Navbar = () => {
  return (
    <NavbarContainer id='navbar'>
      <Links>
        <Link>01. <A href='#about'>About</A></Link>
        <Link>02. <A href='#projects'>Projects</A></Link>
        <Link>03. <A href='#experience'>Experience</A></Link>
        <Link>04. <A href='#contact'>Contact</A></Link>
        <Link><A href='/'>Resume</A></Link>
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;