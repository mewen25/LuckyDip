import React from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">LuckyDip LTD</Link>
      <Searchbar />
    </div>
  );
}

export default Header;
