import React from "react";
import InputBox from "../../Components/InputBox";
import { Formik, Field, Form } from "formik";
import TableOrders from "../../Components/TableOrders";
import { TextField } from "@material-ui/core";
import CreateForm from "../../Components/CreateForm";
import CreateTable from "../../Components/CreateTable";

import inputData from "../../Data/purchaseOrderData";
import data from "../../Data/ordersTable";
//import "./viewPO.css";

function ViewPO() {
  const inputs = inputData.map(input => (
    <div className="input-box">
      <Field
        name={input.name}
        variant="outlined"
        label={input.label}
        placeholder={input.name}
        id="outlined-basic"
        as={TextField}
      />
      <div className="vl" />
    </div>
  ));

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
    <div className="viewPO">
      <h1 id="order-title">View Purchases</h1>
      <CreateForm
        stateValues={stateValues}
        inputs={inputs}
        containerClass="form-container"
      />
      <CreateTable heads={heads} data={data} />
    </div>
  );
}

export default ViewPO;
