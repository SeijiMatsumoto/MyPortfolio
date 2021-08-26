import React, { useEffect, useState } from 'react';
import { CardContainer, Company, Position, Time, PosTime, Desc, DescLi } from './Styles/ExpCard.style.js';
import anime from 'animejs';
const inView = require('in-view');

const ExpCard = (props) => {
  var [shown, setShown] = useState(false);
  var [compFont, setCompFont] = useState('30px');
  var [posFont, setPostFont] = useState('20px');
  var [font, setFont] = useState('18px');
  var [border, setBorder] = useState('2px solid black');

  var company = props.company;
  var position = props.position;
  var time = props.time;
  var desc = props.desc;

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    window.addEventListener('scroll', checkInView);
  }, [])

  useEffect(() => {
    if (!props.isDark) {
      setBorder('2px solid black');
    } else {
      setBorder('2px solid white');
    }
  }, [props.isDark])

  const checkInView = () => {
    if (!shown) {
      const aboutEl = document.getElementById('exp' + props.i);
      if (inView.is(aboutEl)) {
        animateOnLoad();
      }
      setShown(true);
    }
  }

  const responsiveChange = () => {
    var width = window.innerWidth;

    if (width <= 500) {
      setCompFont('20px');
      setPostFont('18px');
      setFont('15px');
    } else if (width <= 850 && width > 500) {
      setCompFont('22px');
      setPostFont('19px');
      setFont('17px');
    } else if (width <= 1249 && width > 850) {
      setCompFont('23px');
      setPostFont('20px');
      setFont('18px');
    } else if (width > 1920) {
      setCompFont('40px');
      setPostFont('30px');
      setFont('26px');
    } else {
      setCompFont('30px');
      setPostFont('20px');
      setFont('18px');
    }
  }

  const animateOnLoad = () => {
    const timeline = anime.timeline({
      autoplay: true
    })
      .add({
        targets: '#exp' + props.i,
        translateY: 100,
        easing: 'linear',
        opacity: [0, 1],
        duration: 500,
      }, '+=700')
    timeline.play();
    window.removeEventListener('scroll', checkInView);
  }

  return (
    <CardContainer id={'exp' + props.i}>
      <Company font={compFont} border={border}>{company}</Company>
      <PosTime>
        <Position font={posFont}>{position}</Position>
        <Time font={font}>{time}</Time>
      </PosTime>
      <Desc>{desc.map((each, i) => <DescLi font={font} key={each + i}>{each}</DescLi>)}</Desc>
    </CardContainer>
  );
};

export default ExpCard;