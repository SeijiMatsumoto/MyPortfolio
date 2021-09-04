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

  const clickHandler = (e) => {
    console.log('click');
    if (e === 'email') {
      window.open('mailto:sejmoto@gmail.com', '_blank');
    } else if (e === 'linkedin') {
      window.open('https://www.linkedin.com/in/matsumoto-seiji/', '_blank');
    } else if (e === 'twitter') {
      window.open('https://twitter.com/ItsSayG', '_blank');
    } else if (e === 'github') {
      window.open('https://github.com/SeijiMatsumoto', '_blank');
    } else if (e === 'instagram') {
      window.open('https://www.instagram.com/sejmoto/', '_blank');
    }
  }

  return (
    <Main display={showLinks}>
      <DisplayDiv>
        <IconsDiv id='icons' >
          <Icons color={color} alt='Github' className='fab fa-github fa-lg' onClick={() => clickHandler('github')} target="_blank" />
          <Icons color={color} alt='LinkedIn' className='fab fa-linkedin fa-lg' onClick={() => clickHandler('linkedin')} target="_blank" />
          <Icons color={color} alt='Twitter' className='fab fa-twitter fa-lg' onClick={() => clickHandler('twitter')}  target="_blank" />
          <Icons color={color} alt='Email' className='far fa-envelope fa-lg' onClick={() => clickHandler('email')} target="_blank" />
        </IconsDiv>
        <LeftSocial id='line' color={color} />
      </DisplayDiv>
    </Main>
  );
};

export default Social;

/* <Icons color={color} alt='Instagram' className='fab fa-instagram fa-lg' href='https://www.instagram.com/sejmoto/' target="_blank" /> */
