import React from "react";

function NavItem(props) {
  console.log(props);
  return (
    <div className={"nav-item " + props.title} style={props.style}>
      <h2>{props.name}</h2>
    </div>
  );
}

export default NavItem;
