import React from "react";
import InputBox from "../../Components/InputBox";
import { Formik, Field, Form } from "formik";
import TableOrders from "../../Components/TableOrders";
import { TextField } from "@material-ui/core";

import inputData from "../../Data/purchaseOrderData";
import data from "../../Data/ordersTable";
import "./viewPO.css";

function ViewPO() {
  const inputComponents = inputData.map(input => (
    <Field
      name={input.name}
      variant="outlined"
      label={input.label}
      placeholder={input.name}
      id="outlined-basic"
      as={TextField}
      className="input-box"
    />
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

  return (
    <div className="viewPO">
      <h1>View Purchases</h1>
      <div>
        <Formik
          initialValues={data.map(value => {
            value.name;
          })}
          onSubmit={(data, { setSubmitting }) => {}}
        >
          {({ values, isSubmitting }) => (
            <Form className="purchase-form-container">{inputComponents}</Form>
          )}
        </Formik>
      </div>
      <div className="ordersDatabase">
        <TableOrders data={data} heads={heads} />
      </div>
    </div>
  );
}

export default ViewPO;
