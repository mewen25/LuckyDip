import React from "react";

import "./datalayout.css";

const DataLayout = props => (
  <div className="templatePage" style={{ width: "80vw", height: "100%" }}>
    {props.children}
  </div>
);
export default DataLayout;
