import React, { useEffect, useState } from 'react';
import { ButtonContainer, Button } from './Styles/MenuButton.style';

const MenuButton = (props) => {
  var [color, setColor] = useState('white');

  useEffect(() => {
    if (!props.isDark) {
      setColor('black');
    } else {
      setColor('white');
    }
  }, [props.isDark])
  return (
    <ButtonContainer>
      <Button onClick={props.clickHandler} color={color} className='fas fa-bars fa-3x' />
    </ButtonContainer>
  );
};

export default MenuButton;