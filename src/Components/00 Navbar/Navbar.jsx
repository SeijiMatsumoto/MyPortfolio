import React from 'react';
import { NavbarContainer, Links, Link, A, Resume } from './Styles/Navbar.style.js';

const Navbar = (props) => {



  return (
    <NavbarContainer id='navbar'>
      {/* <i className="fas fa-bars"></i> */}
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