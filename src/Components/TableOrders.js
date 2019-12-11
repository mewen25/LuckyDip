import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TableOrders(props) {
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

  return (
    <div className="ordersDatabase">
      <div className="database-table">
        <Table striped bordered hover>
          <thead>{tblHeads}</thead>
          <tbody>{tblTds}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default TableOrders;
