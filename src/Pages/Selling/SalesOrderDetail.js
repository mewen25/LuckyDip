import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DataPage from "../templates/DataPage";

import ordersData from "../../Data/ordersTable";

function SalesOrderDetail(props) {
  const [inputs, setInputs] = useState({
    orderNumber: "",
    orderDate: "",
    deliveryDate: "",
    supplierName: "",
    supplierReference: "",
    status: "",
    total: ""
  });
  const { orderPageNumber } = useParams();
  const foundOrder = ordersData.find(
    order => order.orderNumber === orderPageNumber
  );

  function handleChange(event) {
    const [name, value] = event.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  }

  return (
    <div>
      <h1>SalesOrderDetail</h1>
      <h2 id="data-title">{foundOrder.orderNumber}</h2>
      <DataPage data={foundOrder} />
    </div>
  );
}

export default SalesOrderDetail;
