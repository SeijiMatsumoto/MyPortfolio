import React, { useEffect, useState } from 'react';
import { LinksUl, Link, A, Resume } from './Styles/Links.style'
import anime from 'animejs';

const Links = (props) => {

  var [showLinks, setLinks] = useState(true);
  var [color, setColor] = useState('white');
  var [resumeColor, setResumeColor] = useState('#FF4C29');

  useEffect(() => {
    window.addEventListener('resize', displayLinks)
    displayLinks();
    animateOnLoad();
  }, []);

  useEffect(() => {
    if (!props.isDark) {
      setColor('#1E242A');
      setResumeColor('white');
    } else {
      setColor('white');
      setResumeColor('black');
    }
  }, [props.isDark])

  const displayLinks = () => {
    if (window.innerWidth > 960) {
      setLinks(true);
      animateOnLoad();
    } else {
      setLinks(false);
    }
  }

  const animateOnLoad = () => {
    const timeline = anime.timeline({
      autoplay: false
    })
    .add({
      targets: '#link1',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 300,
    }, '+=200')
    .add({
      targets: '#link2',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 300,
    }, '-=1500')
    .add({
      targets: '#link3',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 300,
    }, '-=1500')
    .add({
      targets: '#link4',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 300,
    }, '-=1500')
    .add({
      targets: '#resume',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 300,
    }, '-=1500')
    timeline.play();
  }

  return (
    <div>
      {showLinks ?
      <LinksUl>
        <Link id='link1'>01.<A color={color} href='#about'>About</A></Link>
        <Link id='link2'>02.<A color={color} href='#projects'>Projects</A></Link>
        <Link id='link3'>03.<A color={color} href='#experience'>Experience</A></Link>
        <Link id='link4'>04.<A color={color} href='#contact'>Contact</A></Link>
        <Link id='resume'><Resume color={resumeColor} bg={color}>Resume</Resume></Link>
      </LinksUl>
      : null }
    </div>
  );
};

export default Links;