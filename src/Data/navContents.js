export default [
  {
    title: "Buying",
    style: { backgroundColor: "#3cc6dd" },
    subtitle: [
      { title: "View Purchase Orders", page: "/Buying/ViewPO.js" },
      { title: "Accept Purchase Orders", page: "/Buying/AcceptPO.js" }
    ]
  },
  {
    title: "Selling",
    style: { backgroundColor: "#dd3ca6" },
    subtitle: [
      { title: "View Sales Order", page: "/Selling/SalesOrder.js" },
      { title: "View Quotes", page: "/Selling/Quotes.js" },
      { title: "View Shipping", page: "/Selling/Shipping.js" },
      { title: "View Invoices", page: "/Selling/Invoices.js" },
      { title: "View Credits", page: "/Selling/Credits.js" }
    ]
  },
  {
    title: "Production",
    style: { backgroundColor: "#db6e2f" },
    subtitle: [
      { title: "View Bill of Materials", page: "/Production/ViewBOM.js" },
      { title: "View Production Sheets", page: "/Production/ViewPS.js" }
    ]
  },
  {
    title: "Products",
    style: { backgroundColor: "#2f3fdb" },
    subtitle: [
      { title: "View Products", page: "/Products/ViewProducts.js" },
      { title: "Change Codes", page: "/Products/ChangeCodes.js" },
      { title: "Stock Adjustments", page: "/Products/StockAdjust.js" }
    ]
  },
  {
    title: "People",
    style: { backgroundColor: "#29c025" },
    subtitle: [
      { title: "View Customers", page: "/People/ViewCustomer.js" },
      { title: "View Suppliers", page: "/People/ViewSupplier.js" }
    ]
  },
  {
    title: "Reports",
    style: { backgroundColor: "#6c6c6c" },
    subtitle: [
      { title: "Stock Report", page: "/Report/StockReport.js" },
      { title: "Sales Report", page: "/Report/SaleReport.js" },
      { title: "Purchasing Report", page: "/Report/BuyReport.js" }
    ]
  }
];
