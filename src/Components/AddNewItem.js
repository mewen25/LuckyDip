import React from "react";
import { Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CreateForm from "../Components/CreateForm";

import itemData from "../Data/itemsList";

const inputs = [
  <div className="addNewItem">
    <Autocomplete
      name="item"
      id="item-search"
      options={itemData}
      getOptionLabel={option => option.name}
      className="addnewItemElement"
      renderInput={params => (
        <TextField {...params} label="Item" variant="outlined" fullWidth />
      )}
    />

    <Field
      id="item-amount"
      name="amount"
      type="number"
      variant="outlined"
      id="outlined-basic"
      placeholder="Amount"
      className="addnewItemElement"
      as={TextField}
    />

    <Field
      id="item-price"
      name="price"
      type="number"
      variant="outlined"
      id="outlined-basic"
      amount="Price"
      className="addnewItemElement"
      as={TextField}
    />

    <Field
      id="item-subTotal"
      name="subTotal"
      type="number"
      variant="outlined"
      id="outlined-basic"
      placeholder="Sub Total"
      className="addnewItemElement"
      as={TextField}
    />

    <Field
      id="item-comments"
      name="comments"
      type="text"
      variant="outlined"
      id="outlined-basic"
      placeholder="Comments"
      className="addnewItemElement"
      as={TextField}
    />

    <Field
      id="item-add"
      name="add"
      type="submit"
      variant="outlined"
      id="outlined-basic"
      className="addnewItemElement"
      as={Button}
    />
  </div>
];

function AddNewItem() {
  return <CreateForm inputs={inputs} />;
}

export default AddNewItem;
