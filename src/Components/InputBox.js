import React from "react";

function InputBox(props) {
  return (
    <div className="inputField" id={`input${props.id}`}>
      <p>{props.label}</p>
      {props.type == "calendar" ? (
        <div id="date-container">
          <input name={props.name[0]} type={props.type} />
          <input name={props.name[1]} type={props.type} />
        </div>
      ) : (
        <input value={props.value} name={props.name} type={props.type} />
      )}
    </div>
  );
}

export default InputBox;
