import React, { useState, useEffect} from 'react';
import { NavbarContainer, MenuDiv, Logo } from './Styles/Navbar.style.js';
import MenuButton from './MenuButton.jsx';
import Links from './Links.jsx';
import Menu from './Menu.jsx';
import anime from 'animejs/lib/anime.es.js';

const Navbar = (props) => {
  var [showButton, setButton] = useState(false);
  var [showMenu, setMenu] = useState(false);
  var [menuOpen, toggleMenu] = useState(false);
  var [iconLeft, setIconLeft] = useState('50px');

  useEffect(() => {
    window.addEventListener('resize', displayButton);
    displayButton();
    animateOnLoad();
  }, [])

  const displayButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
      setMenu(true);
      setIconLeft('20px');
    } else {
      setButton(false);
      setMenu(false);
      setIconLeft('50px');
    }
  };

  const menuClickHandler = () => {
    toggleMenu(!menuOpen);
  }

  useEffect(() => {
    var menu = document.querySelector('.menu');
    if (menuOpen) {
      anime({
        targets: menu,
        translateX: -1000,
        easing: 'linear',
        duration: 300
      });
      document.querySelector('#main').classList.add('stop-scrolling');
    } else if (!menuOpen) {
      anime({
        targets: menu,
        translateX: 0,
        easing: 'linear',
        duration: 300
      });
      document.querySelector('#main').classList.remove('stop-scrolling');
    }
  }, [menuOpen])

  const animateOnLoad = () => {
    const timeline = anime.timeline({
      autoplay: false
    })
    .add({
      targets: '#logo',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 300,
    })
    timeline.play()
  }

  const scrollToTop = () => {
    document.getElementById('landing').scrollIntoView();
  }

  return (
    <NavbarContainer id='navbar'>
      <Logo id='logo' iconLeft={iconLeft} onClick={scrollToTop} src='https://i.imgur.com/YbQDUJq.png'/>
      <Links />
      {showButton ? <MenuButton clickHandler={menuClickHandler}/> : null}
      {showMenu ? <MenuDiv className='menu'><Menu showMenu={menuClickHandler}/></MenuDiv> : null }
    </NavbarContainer>
  );
};

export default Navbar;