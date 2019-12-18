import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Field } from "formik";

const DateInput = props => {
  const [date, setDate] = useState(new Date());

  const handleChange = value => {
    setDate(value);
  };
  const handleFocus = event => event.target.select();

  return (
    <div>
      <Field
        autoOK
        name={props.name}
        variant="inline"
        inputVariant="outlined"
        format="dd/MM/yyyy"
        label={props.label}
        placeholder={props.name}
        id="outlined-basic"
        value={date}
        onChange={handleChange}
        onFocus={handleFocus}
        className={props.className}
        as={KeyboardDatePicker}
      />;
    </div>
  );
};

export default DateInput;
