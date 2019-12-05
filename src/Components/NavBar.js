import React, { useState } from "react";

import data from "../Data/navContents";
import NavItem from "./NavItem";

function NavBar() {
  const [selected, setSelected] = useState(null);

  const handleClick = e => {
    navComponents.forEach(item => {
      if (selected == e.currentTarget.id) {
        setSelected(null);
        return;
      }

      if (e.currentTarget.id == item.props.name) {
        setSelected(item.props.name);
        return;
      }
    });
  };

  const navComponents = data.map(item => (
    <NavItem
      name={item.title}
      style={item.style}
      selected={selected}
      handleClick={handleClick}
      subtitles={item.subtitle}
    />
  ));

  return <nav className="nav-container">{navComponents}</nav>;
}

export default NavBar;
