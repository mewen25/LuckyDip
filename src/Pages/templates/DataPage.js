import React, { useRef } from "react";
import { Formik, Field, Form } from "formik";
import { TextField } from "@material-ui/core";
//import Button from "@material-ui/core/Button";
import InputBox from "../../Components/InputBox";
import { Table, Button } from "react-bootstrap";
import TableOrders from "../../Components/TableOrders";

import data from "../../Data/salesOrderData";
import "./dataPage.css";

function DataPage(props) {
  console.log("YO", props);
  const inputComponents = data.map(input => (
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
    <div className="data-page">
      <div className="sales-header">
        <h2 id="data-title">{props.orderNumber}</h2>
        <Button variant="success" className="completeOrder">
          Complete Order
        </Button>
      </div>
      <hr />
      <div className="form-area">
        <Formik
          initialValues={{
            orderNumber: props.data.orderNumber,
            supplierReference: props.data.supplierReference,
            supplierName: props.data.supplierName,
            orderDate: props.data.orderDate,
            deliveryDate: props.data.deliveryDate,
            status: props.data.status,
            total: props.data.total
          }}
          onSubmit={(data, { setSubmitting }) => {}}
        >
          {({ values, isSubmitting }) => (
            <Form className="form-container">{inputComponents}</Form>
          )}
        </Formik>
        <hr />
        <div className="ordersDatabase">
          {props.data != null ? (
            <TableOrders data={[props.data]} heads={heads} />
          ) : null}
        </div>
        <div className="reviewInfo">
          <p>Comments:</p>
          <textarea />
        </div>
      </div>
    </div>
  );
}

export default DataPage;
