import React from "react";
import { Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CreateForm from "../Components/CreateForm";

function AddNewItem(props) {
  const handleFocus = event => event.target.select();

  const input = () => {
    if (props.type == "search") {
      return (
        <Autocomplete
          name={props.name}
          id={props.id}
          options={props.optionsData}
          getOptionLabel={option => option.name}
          className="addnewItemElement"
          onFocus={handleFocus}
          renderInput={params => (
            <TextField
              {...params}
              label={props.label}
              variant="outlined"
              id="outlined-basic"
              fullWidth
            />
          )}
        />
      );
    } else if (props.type == "number" || props.type == "text") {
      return (
        <Field
          id={props.id}
          name={props.name}
          type={props.type}
          variant="outlined"
          id="outlined-basic"
          placeholder={props.label}
          label={props.label}
          onFocus={handleFocus}
          className="addnewItemElement"
          as={TextField}
        />
      );
    } else if (props.type == "button") {
      return (
        <Button
          id={props.id}
          name={props.name}
          type="submit"
          variant="contained"
          id="outlined-basic"
          onFocus={handleFocus}
          color="primary"
          className="addnewItemElement"
        >
          {props.label}
        </Button>
      );
    }
  };

  return <React.Fragment>{input()}</React.Fragment>;
}

export default AddNewItem;
