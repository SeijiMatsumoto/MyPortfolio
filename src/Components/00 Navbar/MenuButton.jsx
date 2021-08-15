import React from 'react';
import { ButtonContainer, Button } from './Styles/MenuButton.style';

const MenuButton = (props) => {
  return (
    <ButtonContainer>
      <Button onClick={props.clickHandler} src='https://i.imgur.com/pw5CtKG.png' />
    </ButtonContainer>
  );
};

export default MenuButton;