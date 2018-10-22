import React from "react";
import hamburger from "./assets/menu.svg";
import letterX from "./assets/x.svg";
const menuStyle = {
  height: "80%",
  margin: "auto 0",
  cursor: "pointer"
};
const HamburgerMenu = ({ isActive, activeHandler }) => {
    return <img style = {menuStyle} 
    src={isActive ? letterX : hamburger} 
    alt="menu"
    onClick = {() => {
      activeHandler();
    }}/>;
}

export default HamburgerMenu;
