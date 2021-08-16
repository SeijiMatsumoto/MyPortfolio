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

  useEffect(() => {
    if (!props.isDark) {
      setBg('#f0f0f0');
    } else {
      setBg('#1E242A');
    }
  }, [props.isDark])

  const displayButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
      setMenu(true);
      setIconLeft('20px');
      if (!props.isDark) {
        setBg('#f0f0f0');
      } else {
        setBg('#1E242A');
      }
    } else {
      setButton(false);
      setMenu(false);
      setIconLeft('50px');
      if (!props.isDark) {
        setBg('#f0f0f0');
      } else {
        setBg('#1E242A');
      }
    }

    if (window.innerHeight < 790) {
      setBg('transparent');
    } else {
      if (!props.isDark) {
        setBg('#f0f0f0');
      } else {
        setBg('#1E242A');
      }
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
  }

  return (
    <NavbarContainer id='navbar' bgColor={navBg}>
      <Logo id='logo' iconLeft={iconLeft} onClick={scrollToTop} src='https://i.imgur.com/YbQDUJq.png'/>
      <Links isDark={props.isDark}/>
      {showButton ? <MenuButton clickHandler={menuClickHandler} isDark={props.isDark}/> : null}
      {showMenu ? <MenuDiv className='menu'><Menu isDark={props.isDark} toggleDark={props.toggleDark} showMenu={menuClickHandler}/></MenuDiv> : null }
    </NavbarContainer>
  );
};

export default Navbar;