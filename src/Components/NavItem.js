import React, { useState } from "react";
import NavItemChild from "./NavItemChild";
import { Link } from "react-router-dom";

function NavItem(props) {
  const [hovered, setHovered] = useState(false);

  const handleSelected = () => {
    return (
      <NavItemChild>
        {props.subtitles.map(item => (
          <div>
            <Link to={item.link} style={{ color: "white", fontSize: "20px" }}>
              {item.title}
            </Link>
          </div>
        ))}
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
      onMouseEnter={() => setHovered(false)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>{props.name}</h2>
      {props.selected === props.name ? handleSelected() : null}
    </div>
  );
}

export default NavItem;
