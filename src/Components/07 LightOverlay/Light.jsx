import React, { useEffect, useState } from "react";
import { Main, Switch, Button } from "./Styles/Light.style.js";
import anime from "animejs/lib/anime.es.js";

const Light = (props) => {
  var [bg, setBg] = useState("#1E242A");
  var [showButton, setShow] = useState(true);
  var [color, setColor] = useState("black");

  useEffect(() => {
    window.addEventListener("resize", displayButton);
    displayButton();
    animateOnLoad();
    listenD();
  }, []);

  const listenD = () => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "d") {
        document.getElementById("lightButton").click();
      }
    });
  };

  useEffect(() => {
    if (!props.isDark) {
      setBg("#1E242A");
    } else {
      setBg("white");
    }
    if (props.isDark) {
      setColor("white");
    } else {
      setColor("black");
    }
  }, [props.isDark]);

  const toggle = () => {
    if (props.isDark) {
      props.toggleDark(false);
    } else {
      props.toggleDark(true);
    }
  };

  const displayButton = () => {
    if (window.innerWidth <= 960) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const animateOnLoad = () => {
    const timeline = anime
      .timeline({
        autoplay: false,
      })
      .add(
        {
          targets: "#button",
          translateX: -100,
          easing: "spring",
          opacity: [0, 1],
          duration: 500,
        },
        "+=1600"
      )
      .add(
        {
          targets: "#sun",
          rotate: 360,
        },
        "-=1500"
      );
    timeline.play();
  };

  return (
    <>
      {showButton ? (
        <Main id="button" hover-text="Press D to toggle" color={color}>
          {props.isDark ? (
            <Button id="lightButton" onClick={toggle} bg={bg}>
              <Switch id="moon" className="fas fa-moon fa-3x" />
            </Button>
          ) : (
            <Button id="lightButton" onClick={toggle} bg={bg}>
              <Switch id="sun" className="fas fa-sun fa-3x" color={"white"} />
            </Button>
          )}
        </Main>
      ) : null}
    </>
  );
};

export default Light;
