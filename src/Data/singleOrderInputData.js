import TextField from "@material-ui/core/TextField";

export default [
  {
    id: 1,
    name: "supplier-info",
    label: "Supplier Info",
    section: [
      {
        id: 1,
        name: "supplierName",
        type: "text",
        label: "Supplier Name",
        component: TextField
      },
      {
        id: 2,
        name: "supplierRef",
        type: "text",
        label: "Supplier Ref.",
        component: TextField
      },
      {
        id: 3,
        name: "discount",
        type: "number",
        label: "Discount %",
        component: TextField
      }
    ]
  },
  {
    id: 2,
    name: "delivery-address",
    label: "Delivery Address",
    section: [
      {
        id: 1,
        name: "companyName",
        type: "text",
        label: "Company Name",
        component: TextField
      },
      {
        id: 2,
        name: "addressLn1",
        type: "text",
        label: "Address Line 1",
        component: TextField
      },
      {
        id: 3,
        name: "addressLn2",
        type: "text",
        label: "Address Line 2",
        component: TextField
      },
      {
        id: 4,
        name: "city",
        type: "text",
        label: "Town/City",
        component: TextField
      },
      {
        id: 5,
        name: "postcode",
        type: "text",
        label: "Post Code",
        component: TextField
      }
    ]
  },
  {
    id: 1,
    name: "order-info",
    label: "Order Info",
    section: [
      {
        id: 1,
        name: "orderDate",
        type: "text",
        label: "Order Date",
        component: TextField
      },
      {
        id: 2,
        name: "requiredDate",
        type: "text",
        label: "Required Date",
        component: TextField
      },
      {
        id: 3,
        name: "expectedDate",
        type: "text",
        label: "Expected Date",
        component: TextField
      },
      {
        id: 4,
        name: "createdBy",
        type: "text",
        label: "Created By:",
        component: TextField
      }
    ]
  }
];
