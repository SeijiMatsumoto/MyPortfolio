import React, { useState, useEffect} from 'react';
import { NavbarContainer, MenuDiv } from './Styles/Navbar.style.js';
import MenuButton from './MenuButton.jsx';
import Links from './Links.jsx';
import Menu from './Menu.jsx';
import anime from 'animejs/lib/anime.es.js';

const Navbar = (props) => {
  var [showButton, setButton] = useState(false);
  var [showMenu, setMenu] = useState(false);
  var [menuOpen, toggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', displayButton);
    displayButton();
  }, [])

  const displayButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
      setMenu(true);
    } else {
      setButton(false);
      setMenu(false);
    }
  };

  const menuClickHandler = () => {
    toggleMenu(!menuOpen);
    console.log('hello')
  }

  useEffect(() => {
    var menu = document.querySelector('.menu');
    if (menuOpen) {
      console.log('animate')
      anime({
        targets: menu,
        translateX: -1000,
        easing: 'linear',
        duration: 300
      });
    } else if (!menuOpen) {
      anime({
        targets: menu,
        translateX: 0,
        easing: 'linear',
        duration: 300
      });
    }
  }, [menuOpen])

  return (
    <NavbarContainer id='navbar'>
      <Links />
      {showButton ? <MenuButton clickHandler={menuClickHandler}/> : null}
      {showMenu ? <MenuDiv className='menu'><Menu showMenu={menuClickHandler}/></MenuDiv> : null }
    </NavbarContainer>
  );
};

export default Navbar;