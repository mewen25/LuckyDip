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
    type: "calendar"
  },
  {
    id: 4,
    label: "Status",
    name: "purchaseStatus",
    type: "dropdown",
    style: { borderRight: "2px solid black" }
  }
];
