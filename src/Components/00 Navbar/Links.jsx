import React, { useEffect, useState } from 'react';
import { LinksUl, Link, A, Resume } from './Styles/Links.style'
import anime, { timeline } from 'animejs';

const Links = (props) => {

  var [showLinks, setLinks] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', displayLinks)
    displayLinks();
    animateOnLoad();
  }, []);

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
      autoplay: true
    })
    .add({
      targets: '#link1',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    })
    .add({
      targets: '#link2',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '-=1500')
    .add({
      targets: '#link3',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '-=1500')
    .add({
      targets: '#link4',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '-=1500')
    .add({
      targets: '#resume',
      translateY: 25,
      easing: 'spring',
      opacity: [0, 1],
      duration: 500,
    }, '-=1500')
    timeline.play();
  }

  return (
    <div>
      {showLinks ?
      <LinksUl>
        <Link id='link1'>01.<A href='#about'>About</A></Link>
        <Link id='link2'>02.<A href='#projects'>Projects</A></Link>
        <Link id='link3'>03.<A href='#experience'>Experience</A></Link>
        <Link id='link4'>04.<A href='#contact'>Contact</A></Link>
        <Link id='resume'><Resume>Resume</Resume></Link>
      </LinksUl>
      : null }
    </div>
  );
};

export default Links;