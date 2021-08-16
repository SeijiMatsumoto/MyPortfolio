import React, { useEffect, useState } from 'react';
import { Main, DisplayDiv, LeftSocial, IconsDiv, Icons } from './Styles/Social.style';
import anime from 'animejs';

const Social = (props) => {

  var [showLinks, setShow] = useState('block');
  var [color, setColor] = useState('#1E242A');

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    animateOnLoad();
  }, [])

  useEffect(() => {
    if (!props.isDark) {
      setColor('#1E242A');
    } else {
      setColor('white');
    }
  }, [props.isDark])

  const responsiveChange = () => {
    if (window.innerWidth <= 960) {
      setShow('none');
    } else {
      setShow('block');
    }
  }

  const animateOnLoad = () => {
    const timeline = anime.timeline({
      autoplay: true
    })
      .add({
        targets: '#line',
        translateY: -100,
        easing: 'linear',
        opacity: [0, 1],
        duration: 500,
      }, '+=1300')
      .add({
        targets: '#icons',
        translateY: -255,
        easing: 'spring',
        opacity: [0, 1],
        duration: 500,
      }, '-=500');
    timeline.play();
  }

  return (
    <Main display={showLinks}>
      <DisplayDiv>
        <IconsDiv id='icons' >
          <Icons color={color} alt='Github' className='fab fa-github fa-lg' href='https://github.com/SeijiMatsumoto' target="_blank" />
          <Icons color={color} alt='LinkedIn' className='fab fa-linkedin fa-lg' href='https://www.linkedin.com/in/matsumoto-seiji/' target="_blank" />
          <Icons color={color} alt='Twitter' className='fab fa-twitter fa-lg' href='https://twitter.com/ItsSayG' target="_blank" />
          <Icons color={color} alt='Instagram' className='fab fa-instagram fa-lg' href='https://www.instagram.com/sejmoto/' target="_blank" />
          <Icons color={color} alt='Email' className='far fa-envelope fa-lg' href='mailto:seijim27@gmail.com' target="_blank" />
        </IconsDiv>
        <LeftSocial id='line' color={color} />
      </DisplayDiv>
    </Main>
  );
};

export default Social;