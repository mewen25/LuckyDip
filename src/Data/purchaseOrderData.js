//Inputs for filling out an order
export default [
  {
    id: 1,
    label: "PO Number",
    name: "orderNumber",
    type: "number"
  },
  {
    id: 2,
    label: "Supplier",
    name: "supplierName",
    type: "text"
  },
  {
    id: 3,
    label: "Order Date Range",
    name: ["dateRangeStart", "dateRangeEnd"],
    type: "date"
  },
  {
    id: 4,
    label: "Status",
    name: "purchaseStatus",
    type: "select",
    style: { borderRight: "2px solid black" }
  }
];
