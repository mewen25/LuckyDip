import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Field } from "formik";
import CreateForm from "./CreateForm";

import inputData from "../Data/addItemInputData";
import "./purchaseOrder.css";

function CreateTable(props) {
  const tblHeads = props.heads.map(head => <th>{head}</th>);
  const tblTds = props.data.map(td => (
    <tr>
      <Link to={`/SalesOrder/${td.orderNumber}`}>{td.orderNumber}</Link>
      <td>{td.orderDate}</td>
      <td>{td.deliveryDate}</td>
      <td>{td.supplierName}</td>
      <td>{td.supplierReference}</td>
      <td>{td.status}</td>
      <td>{td.total}</td>
    </tr>
  ));

  const actionInputs = inputData.map(input => (
    <Field
      key={input.id}
      name={input.name}
      type={input.type}
      variant="outlined"
      label={input.label}
      placeholder={input.label}
      id="outlined-basic"
      as={TextField}
    />
  ));

  const stateValues = inputData.map(input => ({
    name: input.name
  }));

  return (
    <div className="order-info-table">
      {props.actions ? (
        <CreateForm
          stateValues={stateValues}
          inputs={actionInputs}
          containerClass="addItemInputs"
        />
      ) : null}
      <Table striped bordered hover>
        <thead>{tblHeads}</thead>
        <tbody>{tblTds}</tbody>
      </Table>
    </div>
  );
}

export default CreateTable;
