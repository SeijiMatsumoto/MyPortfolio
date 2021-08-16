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
  var [navBg, setBg] = useState('#1E242A');

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
      setBg('#1E242A')
    } else {
      setButton(false);
      setMenu(false);
      setIconLeft('50px');
      setBg('#1E242A');
    }

    if (window.innerHeight < 800) {
      setBg('transparent');
    } else {
      setBg('#1E242A');
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
      rotate: 360,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    })
    timeline.play()
  }

  const scrollToTop = () => {
    document.getElementById('landing').scrollIntoView();
    if (props.isDark) {
      props.toggleDark(false);
      setBg('#f0f0f0');
    } else {
      props.toggleDark(true);
      setBg('#1E242A');
    }
  }

  return (
    <NavbarContainer id='navbar' bgColor={navBg}>
      <Logo id='logo' iconLeft={iconLeft} onClick={scrollToTop} src='https://i.imgur.com/YbQDUJq.png'/>
      <Links isDark={props.isDark}/>
      {showButton ? <MenuButton clickHandler={menuClickHandler} isDark={props.isDark}/> : null}
      {showMenu ? <MenuDiv className='menu'><Menu isDark={props.isDark} showMenu={menuClickHandler}/></MenuDiv> : null }
    </NavbarContainer>
  );
};

export default Navbar;