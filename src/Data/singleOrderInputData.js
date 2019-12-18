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
        label: "Supplier Name"
      },
      {
        id: 2,
        name: "supplierRef",
        type: "text",
        label: "Supplier Ref."
      },
      {
        id: 3,
        name: "discount",
        type: "number",
        label: "Discount %"
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
        label: "Company Name"
      },
      {
        id: 2,
        name: "addressLn1",
        type: "text",
        label: "Address Line 1"
      },
      {
        id: 3,
        name: "addressLn2",
        type: "text",
        label: "Address Line 2"
      },
      {
        id: 4,
        name: "city",
        type: "text",
        label: "Town/City"
      },
      {
        id: 5,
        name: "postcode",
        type: "text",
        label: "Post Code"
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
        type: "date",
        label: "Order Date"
      },
      {
        id: 2,
        name: "requiredDate",
        type: "date",
        label: "Required Date"
      },
      {
        id: 3,
        name: "expectedDate",
        type: "date",
        label: "Expected Date"
      },
      {
        id: 4,
        name: "createdBy",
        type: "date",
        label: "Created By:"
      }
    ]
  }
];
