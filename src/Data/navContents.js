export default [
  {
    title: "Buying",
    style: { backgroundColor: "#3cc6dd" },
    style2: { backgroundColor: "#3cc6dd !important" },
    subtitle: [
      {
        title: "View Purchase Orders",
        page: "/Buying/ViewPO.js",
        link: "/ViewPO",
        plus: true
      },
      {
        title: "Accept Purchase Orders",
        page: "/Buying/AcceptPO.js",
        link: "/AcceptPO",
        plus: true
      }
    ]
  },
  {
    title: "Selling",
    style: { backgroundColor: "#dd3ca6" },
    style2: { backgroundColor: "#dd3ca6 !important" },
    subtitle: [
      {
        title: "View Sales Order",
        page: "/Selling/SalesOrder.js",
        link: "/SalesOrder",
        plus: true
      },
      {
        title: "View Quotes",
        page: "/Selling/Quotes.js",
        link: "/Quotes",
        plus: true
      },
      {
        title: "View Shipping",
        page: "/Selling/Shipping.js",
        link: "/Shipping",
        plus: false
      },
      {
        title: "View Invoices",
        page: "/Selling/Invoices.js",
        link: "/Invoices",
        plus: false
      },
      {
        title: "View Credits",
        page: "/Selling/Credits.js",
        link: "/Credits",
        plus: false
      }
    ]
  },
  {
    title: "Production",
    style: { backgroundColor: "#db6e2f" },
    style2: { backgroundColor: "#db6e2f !important" },
    subtitle: [
      {
        title: "View Bill of Materials",
        page: "/Production/ViewBOM.js",
        link: "/ViewBOM",
        plus: true
      },
      {
        title: "View Production Sheets",
        page: "/Production/ViewPS.js",
        link: "/ViewPS",
        plus: false
      }
    ]
  },
  {
    title: "Products",
    style: { backgroundColor: "#2f3fdb" },
    style2: { backgroundColor: "#2f3fdb !important" },
    subtitle: [
      {
        title: "View Products",
        page: "/Products/ViewProducts.js",
        link: "/ViewProducts",
        plus: false
      },
      {
        title: "Change Codes",
        page: "/Products/ChangeCodes.js",
        link: "/ChangeCodes",
        plus: true
      },
      {
        title: "Stock Adjustments",
        page: "/Products/StockAdjust.js",
        link: "/StockAdjust",
        plus: true
      }
    ]
  },
  {
    title: "People",
    style: { backgroundColor: "#29c025" },
    style2: { backgroundColor: "#29c025 !important" },
    subtitle: [
      {
        title: "View Customers",
        page: "/People/ViewCustomer.js",
        link: "/ViewCustomer",
        plus: false
      },
      {
        title: "View Suppliers",
        page: "/People/ViewSupplier.js",
        link: "/ViewSupplier",
        plus: false
      }
    ]
  },
  {
    title: "Reports",
    style: { backgroundColor: "#6c6c6c" },
    style2: { backgroundColor: "#6c6c6c !important" },
    subtitle: [
      {
        title: "Stock Report",
        page: "/Report/StockReport.js",
        link: "/StockReport",
        plus: true
      },
      {
        title: "Sales Report",
        page: "/Report/SaleReport.js",
        link: "/SaleReport",
        plus: false
      },
      {
        title: "Purchasing Report",
        page: "/Report/BuyReport.js",
        link: "/BuyReport",
        plus: false
      }
    ]
  }
];
