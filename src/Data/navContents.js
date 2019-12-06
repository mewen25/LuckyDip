export default [
  {
    title: "Buying",
    style: { backgroundColor: "#3cc6dd" },
    subtitle: [
      {
        title: "View Purchase Orders",
        page: "/Buying/ViewPO.js",
        link: "/AcceptPO"
      },
      {
        title: "Accept Purchase Orders",
        page: "/Buying/AcceptPO.js",
        link: "/ViewPO"
      }
    ]
  },
  {
    title: "Selling",
    style: { backgroundColor: "#dd3ca6" },
    subtitle: [
      {
        title: "View Sales Order",
        page: "/Selling/SalesOrder.js",
        link: "/SalesOrder"
      },
      { title: "View Quotes", page: "/Selling/Quotes.js", link: "/Quotes" },
      {
        title: "View Shipping",
        page: "/Selling/Shipping.js",
        link: "/Shipping"
      },
      {
        title: "View Invoices",
        page: "/Selling/Invoices.js",
        link: "/Invoices"
      },
      { title: "View Credits", page: "/Selling/Credits.js", link: "/Credits" }
    ]
  },
  {
    title: "Production",
    style: { backgroundColor: "#db6e2f" },
    subtitle: [
      {
        title: "View Bill of Materials",
        page: "/Production/ViewBOM.js",
        link: "/ViewBOM"
      },
      {
        title: "View Production Sheets",
        page: "/Production/ViewPS.js",
        link: "/ViewPS"
      }
    ]
  },
  {
    title: "Products",
    style: { backgroundColor: "#2f3fdb" },
    subtitle: [
      {
        title: "View Products",
        page: "/Products/ViewProducts.js",
        link: "/ViewProducts"
      },
      {
        title: "Change Codes",
        page: "/Products/ChangeCodes.js",
        link: "/ChangeCodes"
      },
      {
        title: "Stock Adjustments",
        page: "/Products/StockAdjust.js",
        link: "/StockAdjust"
      }
    ]
  },
  {
    title: "People",
    style: { backgroundColor: "#29c025" },
    subtitle: [
      {
        title: "View Customers",
        page: "/People/ViewCustomer.js",
        link: "/ViewCustomer"
      },
      {
        title: "View Suppliers",
        page: "/People/ViewSupplier.js",
        link: "/ViewSupplier"
      }
    ]
  },
  {
    title: "Reports",
    style: { backgroundColor: "#6c6c6c" },
    subtitle: [
      {
        title: "Stock Report",
        page: "/Report/StockReport.js",
        link: "/StockReport"
      },
      {
        title: "Sales Report",
        page: "/Report/SaleReport.js",
        link: "/SaleReport"
      },
      {
        title: "Purchasing Report",
        page: "/Report/BuyReport.js",
        link: "/BuyReport"
      }
    ]
  }
];
