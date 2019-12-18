import React, { useState } from "react";
import InputBox from "../../Components/InputBox";
import { Formik, Field, Form } from "formik";
import TableOrders from "../../Components/TableOrders";
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreateForm from "../../Components/CreateForm";
import CreateTable from "../../Components/CreateTable";
import DataLayout from "../templates/DataLayout";
import DateInput from "../../Components/DateInput";

import inputData from "../../Data/purchaseOrderData";
import data from "../../Data/ordersTable";
//import "./viewPO.css";

function ViewPO() {
  const useStyles = makeStyles(theme => ({
    formControl: {
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));
  const [status, setStatus] = useState("");
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const classes = useStyles();

  const inputs = inputData.map(input => {
    if (input.type == "date") {
      return (
        <div className="input-box date-pick">
          <DateInput name={input.name[0]} label="Order Date" />
          <DateInput name={input.name[1]} label="Required Date" />
        </div>
      );
    } else if (input.type == "select") {
      return (
        <div className="input-box select-pick">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel}>Status</InputLabel>
            <Select
              labelId="select-status"
              id="select-status"
              value={status}
              onChange={event => setStatus(event.target.value)}
              labelWidth={labelWidth}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="PLACED">Placed</MenuItem>
              <MenuItem value="PARKED">Parked</MenuItem>
            </Select>
          </FormControl>
        </div>
      );
    } else {
      return (
        <div className="input-box">
          <Field
            name={input.name}
            variant="outlined"
            label={input.label}
            placeholder={input.name}
            id="outlined-basic"
            as={TextField}
          />
        </div>
      );
    }
  });

  const heads = [
    "Order No.",
    "Order Date",
    "Delivery Date",
    "Supplier Name",
    "Supplier Reference",
    "Status",
    "Total"
  ];

  const stateValues = inputData.map(value => ({
    name: value.name
  }));

  return (
    <DataLayout>
      <div className="templateHeader">
        <h1 id="title">View Purchases</h1>
      </div>
      <div className="templateInputs">
        <CreateForm stateValues={stateValues} containerClass="form-container">
          {inputs}
        </CreateForm>
      </div>
      <div className="templateTable">
        <CreateTable heads={heads} data={data} />
      </div>
    </DataLayout>
  );
}

export default ViewPO;
