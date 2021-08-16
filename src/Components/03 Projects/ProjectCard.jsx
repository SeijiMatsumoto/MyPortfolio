import React, { useEffect, useState } from 'react';
import { CardContainer, ProjImage, InfoCont, Title, Description, StackCont, Stack} from './Styles/ProjectCard.style';
import anime from 'animejs';
const inView = require('in-view');

const ProjectCard = (props) => {
  var [shown, setShown] = useState(false);
  var url = props.url;
  var title = props.title;
  var description = props.description;
  var stack = props.stack;

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    responsiveChange();
    window.addEventListener('scroll', checkInView);
  }, [])

  const checkInView = () => {
    if (!shown) {
      const aboutEl = document.getElementById('project' + props.i);
      if (inView.is(aboutEl)) {
        console.log('in view')
        animateOnLoad();
      }
      setShown(true);
    }
  }

  const animateOnLoad = () => {
    const timeline = anime.timeline({
      autoplay: true
    })
    .add({
      targets: '#pic' + props.i,
      translateX: 100,
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
    }, '+= 900')
    .add({
      targets: '#projInfo' + props.i,
      translateX: -100,
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
    }, '-= 500')
    timeline.play();
    window.removeEventListener('scroll', checkInView);
  }

  const responsiveChange = () => {

  }

  return (
    <CardContainer id={'project' + props.i}>
      <ProjImage src={url} id={'pic' + props.i}></ProjImage>
      <InfoCont id={'projInfo' + props.i}>
        <Title>{title}</Title>
        <Description>
          {description}
        </Description>
        <StackCont>
          {stack.map(item => <Stack>{item}</Stack>)}
        </StackCont>
      </InfoCont>
    </CardContainer>
  );
};

export default ProjectCard;