import React, { useState } from "react";
import { useParams } from "react-router-dom";
//import { TextField, Autocomplete } from "@material-ui/core";
import { Field, useField } from "formik";
import CreateForm from "../../Components/CreateForm";
import CreateTable from "../../Components/CreateTable";

//import inputData from "../../Data/salesOrderData";
import ordersData from "../../Data/ordersTable";
import inputData from "../../Data/singleOrderInputData";
import itemsData from "../../Data/itemsList";

function SalesOrderDetail(props) {
  const { orderPageNumber } = useParams();
  const foundOrder = ordersData.find(
    order => order.orderNumber === orderPageNumber
  );

  // const comboBox = ({label, ...props}) => {
  //   const [field, meta] = useField(props)
  //   return (
  //     <Autocomplete {...field} id="combo-box" options= />
  //   )
  // }

  const handleFocus = event => event.target.select();

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
      onFocus={handleFocus}
      as={input.component}
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
      onFocus={handleFocus}
      as={input.component}
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
      onFocus={handleFocus}
      as={input.component}
    />
  ));

  // const supplierStateValues = inputData[0].section.map(value => ({
  //   [value.name]: foundOrder[value.name]
  // }));

  // const deliveryStateValues = inputData[1].section.map(value => ({
  //   [value.name]: foundOrder[value.name]
  // }));

  // const orderStateValues = inputData[2].section.map(value => ({
  //   [value.name]: foundOrder[value.name]
  // }));

  // const stateValues = {
  //   ...supplierStateValues,
  //   ...deliveryStateValues,
  //   ...orderStateValues
  // };

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

  const stateValues = {
    supplierName: foundOrder["supplierName"],
    supplierRef: foundOrder["supplierRef"],
    discount: foundOrder["discount"],
    companyName: foundOrder["companyName"],
    addressLn1: foundOrder["addressLn1"],
    addressLn2: foundOrder["addressLn2"],
    city: foundOrder["city"],
    postcode: foundOrder["postcode"],
    orderDate: foundOrder["orderDate"],
    requiredDate: foundOrder["requiredDate"],
    expectedDate: foundOrder["expectedDate"],
    createdBy: foundOrder["createdBy"]
  };

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
        refData={[foundOrder]}
      />
      <CreateTable heads={heads} data={[foundOrder]} actions />
    </div>
  );
}

export default SalesOrderDetail;
