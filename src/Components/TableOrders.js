import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TableOrders(props) {
  const tblHeads = props.heads.map(head => <th>{head}</th>);
  const tblTds = props.data.map(td => (
    <tr>
      <Link
        to={{
          pathname: "/SalesOrder",
          state: {
            orderNumber: td.orderNumber,
            orderDate: td.orderDate,
            deliveryDate: td.deliveryDate,
            supplierName: td.supplierName,
            supplierReference: td.supplierReference,
            status: td.status,
            total: td.total
          }
        }}
      >
        {td.orderNumber}
      </Link>
      <td>{td.orderDate}</td>
      <td>{td.deliveryDate}</td>
      <td>{td.supplierName}</td>
      <td>{td.supplierReference}</td>
      <td>{td.status}</td>
      <td>{td.total}</td>
    </tr>
  ));

  return (
    <div className="database-table">
      <Table striped bordered hover>
        <thead>{tblHeads}</thead>
        <tbody>{tblTds}</tbody>
      </Table>
    </div>
  );
}

export default TableOrders;
