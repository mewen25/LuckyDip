import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Field } from "formik";
import CreateForm from "../../Components/CreateForm";
import CreateTable from "../../Components/CreateTable";

//import inputData from "../../Data/salesOrderData";
import ordersData from "../../Data/ordersTable";
import inputData from "../../Data/singleOrderInputData";

function SalesOrderDetail(props) {
  const { orderPageNumber } = useParams();
  const foundOrder = ordersData.find(
    order => order.orderNumber === orderPageNumber
  );

  const supplierInputs = inputData[0].section.map(input => (
    <Field
      key={input.id}
      name={input.name}
      type={input.type}
      variant="outlined"
      label={input.label}
      placeholder={input.label}
      id="outlined-basic"
      className="input-box"
      as={TextField}
    />
  ));

  const deliveryInputs = inputData[1].section.map(input => (
    <Field
      key={input.id}
      name={input.name}
      type={input.type}
      variant="outlined"
      label={input.label}
      placeholder={input.label}
      id="outlined-basic"
      className="input-box"
      as={TextField}
    />
  ));

  const orderInputs = inputData[2].section.map(input => (
    <Field
      key={input.id}
      name={input.name}
      type={input.type}
      variant="outlined"
      label={input.label}
      placeholder={input.label}
      id="outlined-basic"
      className="input-box"
      as={TextField}
    />
  ));

  const supplierStateValues = inputData[0].section.map(value => ({
    name: value.name
  }));

  const deliveryStateValues = inputData[1].section.map(value => ({
    name: value.name
  }));

  const orderStateValues = inputData[2].section.map(value => ({
    name: value.name
  }));

  const stateValues = [
    supplierStateValues,
    deliveryStateValues,
    orderStateValues
  ];
  const inputs = [
    <div className="supplier-info">
      <h2>Supplier Info</h2>
      {supplierInputs}
    </div>,
    <div className="delivery-info">
      <h2>Delivery Info</h2>
      {deliveryInputs}
    </div>,
    <div className="order-info">
      <h2>Order Info</h2>
      {orderInputs}
    </div>
  ];

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
        <h1 id="order-title">{foundOrder.orderNumber}</h1>
      </div>
      <CreateForm
        stateValues={stateValues}
        inputs={inputs}
        containerClass="singleOrderContainer"
      />
      <CreateTable heads={heads} data={[foundOrder]} actions />
    </div>
  );
}

export default SalesOrderDetail;
