import React, { useEffect, useState } from 'react';
import { ButtonContainer, Button, MenuDiv } from './Styles/MenuButton.style';
import Menu from './Menu.jsx';
import anime from 'animejs/lib/anime.es.js';

const MenuButton = (props) => {

  var [showButton, setButton] = useState(false);
  var [showMenu, setMenu] = useState(false);
  var [menuOpen, toggleMenu] = useState(false);
  var menu = document.querySelector('.menu');

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
  }

  useEffect(() => {
    if (menuOpen) {
      console.log('animate')
      anime({
        targets: menu,
        translateX: -800,
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
    <div>
      <ButtonContainer>
        {showButton ? <Button onClick={menuClickHandler} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' /> : null}
      </ButtonContainer>
      {showMenu ? <MenuDiv className='menu'>
        <Menu showMenu={menuClickHandler}/>
      </MenuDiv> : null }
    </div>
  );
};

export default MenuButton;