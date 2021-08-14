import React from 'react';
import { NavbarContainer } from './Styles/Navbar.style.js';
import MenuButton from './MenuButton.jsx';
import Links from './Links.jsx';

const Navbar = (props) => {

  return (
    <NavbarContainer id='navbar'>
      <Links />
      <MenuButton />
    </NavbarContainer>
  );
};

export default Navbar;