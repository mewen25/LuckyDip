import React from "react";
import { Field } from "formik";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import itemData from "../Data/itemsList";

function AddNewItem() {
  return (
    <div>
      <Autocomplete
        id="item-search"
        options={itemData}
        getOptionLabel={option => option.name}
        renderInput={params => (
          <TextField {...params} label="Item" variant="outlined" fullWidth />
        )}
      />
    </div>
  );
}

export default AddNewItem;
