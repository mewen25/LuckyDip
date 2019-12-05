import React, { useState } from "react";

function NavItemChild(props) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const hoverStyle = {
    color: "black"
  };

  return <div className="nav-subtitle">{props.children}</div>;
}

export default NavItemChild;
