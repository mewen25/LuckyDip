import React from "react";
import data from "../Data/navContents";
import NavItem from "./NavItem";

function NavBar() {
  const navComponents = data.map(item => (
    <NavItem name={item.title} style={item.style} />
  ));

  return <nav className="nav-container">{navComponents}</nav>;
}

export default NavBar;
