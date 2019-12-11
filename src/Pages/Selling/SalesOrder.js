import React from "react";
import DataPage from "../templates/DataPage";

function SalesOrder(props) {
  console.log(props);
  const state = props.location.state;
  return (
    <div>
      <h1>SalesOrder</h1>
      <h2 id="data-title">{state != null ? state.orderNumber : "No info"}</h2>
      {state != null ? <DataPage data={state} /> : null}
    </div>
  );
}

export default SalesOrder;
