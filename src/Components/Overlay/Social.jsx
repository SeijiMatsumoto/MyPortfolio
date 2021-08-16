import React, { useEffect, useState } from 'react';
import { Main, DisplayDiv, LeftSocial, IconsDiv, Icons } from './Styles/Social.style';
import anime from 'animejs';

const Social = () => {

  var [showLinks, setShow] = useState('block');

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    animateOnLoad();
  }, [])

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
          <Icons alt='Github' className='fab fa-github fa-lg' href='https://github.com/SeijiMatsumoto' target="_blank" />
          <Icons alt='LinkedIn' className='fab fa-linkedin fa-lg' href='https://www.linkedin.com/in/matsumoto-seiji/' target="_blank" />
          <Icons alt='Instagram' className='fab fa-instagram fa-lg' href='https://www.instagram.com/sejmoto/' target="_blank" />
          <Icons alt='Email' className='far fa-envelope fa-lg' href='mailto:seijim27@gmail.com' target="_blank" />
        </IconsDiv>
        <LeftSocial id='line' />
      </DisplayDiv>
    </Main>
  );
};

export default Social;