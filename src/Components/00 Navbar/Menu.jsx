import React, { useEffect, useState } from "react";
import { MenuDiv, MenuLinks, MenuLink, MenuA } from "./Styles/Menu.style.js";
import { ResumeDownload } from "./Styles/Links.style";

const Menu = (props) => {
  var [padding, setPadding] = useState("1px");
  var [bg, setBg] = useState("#283134");
  var [color, setColor] = useState("white");
  var [menuTop, setTop] = useState("150px");
  var [menuFont, setFont] = useState("30px");
  var [menuPadding, setMenuPadding] = useState("20px");

  useEffect(() => {
    window.addEventListener("resize", displayButton);
    displayButton();
  }, []);

  useEffect(() => {
    if (!props.isDark) {
      setColor("#283134");
      setBg("white");
    } else {
      setColor("white");
      setBg("#283134");
    }
  }, [props.isDark]);

  const displayButton = () => {
    if (window.innerWidth <= 500) {
      // portrait
      setPadding("10px");
      setTop("120px");
      setFont("30px");
      setMenuPadding("20px");
    } else if (window.innerWidth <= 960 && window.innerWidth > 500) {
      // landscape
      setTop("10px");
      setFont("25px");
      setMenuPadding("10px");
    }
  };

  const toggle = () => {
    if (props.isDark) {
      props.toggleDark(false);
    } else {
      props.toggleDark(true);
    }
    props.showMenu();
  };

  return (
    <MenuDiv bg={bg} padding={padding}>
      <MenuLinks top={menuTop} size={menuFont}>
        <MenuLink padding={menuPadding}>
          <MenuA color={color} onClick={props.showMenu} href="#about">
            About
          </MenuA>
        </MenuLink>
        <MenuLink padding={menuPadding}>
          <MenuA color={color} onClick={props.showMenu} href="#projects">
            Projects
          </MenuA>
        </MenuLink>
        <MenuLink padding={menuPadding}>
          <MenuA color={color} onClick={props.showMenu} href="#experience">
            Experience
          </MenuA>
        </MenuLink>
        <MenuLink padding={menuPadding}>
          <MenuA color={color} onClick={props.showMenu} href="#contact">
            Contact
          </MenuA>
        </MenuLink>
        {/* <MenuLink padding={menuPadding}><MenuA color={color} onClick={props.showMenu}><ResumeDownload color={color} href='/SeijiMatsumotoResumeSept2021.pdf' download rel="noopener noreferrer" target='_blank'>Resume Download</ResumeDownload></MenuA></MenuLink> */}
        <MenuLink padding={menuPadding}>
          <MenuA color={color} onClick={toggle}>
            Light/Dark Mode
          </MenuA>
        </MenuLink>
      </MenuLinks>
    </MenuDiv>
  );
};

export default Menu;
