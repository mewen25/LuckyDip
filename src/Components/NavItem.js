import React, { useState } from "react";

import NavItemChild from "./NavItemChild";

function NavItem(props) {
  const [hovered, setHovered] = useState(false);

  const handleSelected = () => {
    return (
      <NavItemChild>
        {props.subtitles.map(item => <h3>{item.title}</h3>)}
      </NavItemChild>
    );
  };

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className={"nav-item"}
      id={props.name}
      style={hovered == false ? props.style : { backgroundColor: "grey" }}
      onClick={props.handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>{props.name}</h2>
      {props.selected === props.name ? handleSelected() : null}
    </div>
  );
}

export default NavItem;
