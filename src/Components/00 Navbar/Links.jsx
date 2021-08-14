import React, { useEffect, useState } from 'react';
import { LinksUl, Link, A, Resume } from './Styles/Links.style'

const Links = (props) => {

  var [showLinks, setLinks] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', displayLinks)
    displayLinks();
  }, []);

  const displayLinks = () => {
    if (window.innerWidth > 960) {
      setLinks(true);
    } else {
      setLinks(false);
    }
  }

  return (
    <div>
      {showLinks ?
      <LinksUl>
        <Link>01. <A href='#about'>About</A></Link>
        <Link>02. <A href='#projects'>Projects</A></Link>
        <Link>03. <A href='#experience'>Experience</A></Link>
        <Link>04. <A href='#contact'>Contact</A></Link>
        <Resume>Resume</Resume>
      </LinksUl>
      : null }
    </div>
  );
};

export default Links;