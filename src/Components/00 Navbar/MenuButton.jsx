import React from 'react';
import { ButtonContainer, Button } from './Styles/MenuButton.style';

const MenuButton = (props) => {
  return (
    <ButtonContainer>
      <Button onClick={props.clickHandler} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' />
    </ButtonContainer>
  );
};

export default MenuButton;