import React from 'react';
import { Main, LeftSocial, IconsDiv, Icons } from './Styles/Social.style';

const Social = () => {
  return (
    <Main>
      <LeftSocial />
      <IconsDiv>
          <Icons class="fab fa-github" />
          <Icons alt='Github'/>
          <Icons alt='Instagram'/>
        </IconsDiv>
    </Main>
  );
};

export default Social;