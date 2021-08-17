import React, { useState, useEffect } from 'react';
import { FooterDiv, Text, Name } from './Styles/Footer.style.js';

const Footer = (props) => {
  var [bg, setBg] = useState('#1E242A');
  var [color, setColor] = useState('white');

  useEffect(() => {
    if (!props.isDark) {
      setBg('white');
      setColor('#1E242A');
    } else {
      setBg('#F0F0F0');
      setColor('#1E242A');
    }
  }, [props.isDark])

  const openLink = () => {
    window.open('https://github.com/SeijiMatsumoto/MyPortfolio', '_blank');
  }

  return (
    <FooterDiv bg={bg}>
      <Text color={color}>Designed and Coded by <Name>Seiji Matsumoto</Name></Text>
    </FooterDiv>
  );
};

export default Footer;