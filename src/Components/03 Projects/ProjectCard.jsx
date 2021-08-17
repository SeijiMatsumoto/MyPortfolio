import React, { useEffect, useState } from 'react';
import { CardContainer, ImageDiv, ExternalLink, ProjImage, InfoCont, Title, Description, StackCont, Stack } from './Styles/ProjectCard.style';
import anime from 'animejs';
const inView = require('in-view');

const ProjectCard = (props) => {
  var [btnBg, setBg] = useState('#1E242A');
  var [btnFont, setColor] = useState('white');
  var [direction, setDirection] = useState('row');
  var [textLeft, setLeft] = useState('170px');
  var [imgRight, setRight] = useState('50px');
  var [width, setWidth] = useState('420px');
  var [font, setFont] = useState('23px');
  var [titleFont, setTitleFont] = useState('26px');
  var [showExt, setShow] = useState(false);

  var [shown, setShown] = useState(false);
  var url = props.url;
  var title = props.title;
  var description = props.description;
  var stack = props.stack;
  var github = props.github;

  useEffect(() => {
    window.addEventListener('resize', responsiveChange);
    window.addEventListener('scroll', responsiveChange);
    responsiveChange();
    window.addEventListener('scroll', checkInView);
  }, [])

  useEffect(() => {
    if (!props.isDark) {
      setBg('#1E242A');
      setColor('white')
    } else {
      setBg('white');
      setColor('#1E242A');
    }
  }, [props.isDark])

  const checkInView = () => {
    if (!shown) {
      const aboutEl = document.getElementById('project' + props.i);
      if (inView.is(aboutEl)) {
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
    if (window.innerWidth <= 550) {
      setDirection('column');
      setLeft('110px');
      setRight('100px');
      setWidth('350px');
      setFont('20px');
      setTitleFont('24px');
    } else if (window.innerWidth < 990 && window.innerWidth > 550) {
      setDirection('column');
      setLeft('110px');
      setRight('100px');
      setWidth('500px');
      setFont('20px');
      setTitleFont('24px');
    } else if (window.innerWidth <= 1240) {
      setDirection('row');
      setWidth('400px');
      setFont('16px');
      setTitleFont('20px');
    } else if (window.innerWidth > 1240 && window.innerWidth <= 1920) {
      setDirection('row');
      setWidth('520px');
      setFont('20px');
      setLeft('170px');
      setRight('50px');
      setTitleFont('22px');
    } else {
      setDirection('row');
      setWidth('37vw');
      setFont('30px');
      setLeft('120px');
      setRight('120px');
      setTitleFont('30px');
    }
  }

  const openGithub = () => {
    const newWindow = window.open(github, '_blank');
    if (newWindow) newWindow.opener = null
  }

  return (
    <CardContainer id={'project' + props.i} direction={direction}>
      <ImageDiv id={'pic' + props.i} right={imgRight} width={width} height={width/1.77} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {showExt ? <ExternalLink onClick={openGithub} className="fas fa-external-link-alt fa-2x" /> : null}
        <ProjImage onClick={openGithub} src={url} width={width}></ProjImage>
      </ImageDiv>
      <InfoCont id={'projInfo' + props.i} left={textLeft} width={width}>
        <Title font={titleFont} color={props.color}>{title}</Title>
        <Description font={font}>{description}</Description>
        <StackCont>
          {stack.map((item, i) => <Stack key={url + i} bg={btnBg} color={btnFont}>{item}</Stack>)}
        </StackCont>
      </InfoCont>
    </CardContainer>
  );
};

export default ProjectCard;