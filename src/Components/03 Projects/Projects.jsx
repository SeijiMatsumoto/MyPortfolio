import React from 'react';
import { ProjectsContainer } from './Styles/Projects.style.js';
import { Title, ProjDiv, ProjCard, Image, ProjTitle, Description, Stack, EachStack } from './Styles/Projects.style.js';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <Title></Title>
      <ProjDiv>
        <ProjCard>
          <Image />
          <ProjTitle></ProjTitle>
          <Description></Description>
          <Stack>
            <EachStack></EachStack>
          </Stack>
        </ProjCard>
      </ProjDiv>
    </ProjectsContainer>
  );
};

export default Projects;

/*

*/