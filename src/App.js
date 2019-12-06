import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

//Buying
import AcceptPO from "./Pages/Buying/AcceptPO";
import ViewPO from "./Pages/Buying/ViewPO";
//Selling
import SalesOrder from "./Pages/Selling/SalesOrder";
import Quotes from "./Pages/Selling/Quotes";
import Shipping from "./Pages/Selling/Shipping";
import Invoices from "./Pages/Selling/Invoices";
import Credits from "./Pages/Selling/Credits";
//Production
import ViewBOM from "./Pages/Production/ViewBOM";
import ViewPS from "./Pages/Production/ViewPS";
//Products
import ViewProducts from "./Pages/Products/ViewProducts";
import ChangeCodes from "./Pages/Products/ChangeCodes";
import StockAdjust from "./Pages/Products/StockAdjust";
//People
import ViewCustomer from "./Pages/People/ViewCustomer";
import ViewSupplier from "./Pages/People/ViewSupplier";
//Report
import StockReport from "./Pages/Report/StockReport";
import SaleReport from "./Pages/Report/SaleReport";
import BuyReport from "./Pages/Report/BuyReport";

const { app } = window.require("electron").remote;

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/AcceptPO" exact component={AcceptPO} />
          <Route path="/ViewPO" exact component={ViewPO} />
          <Route path="/SalesOrder" exact component={SalesOrder} />
          <Route path="/Quotes" exact component={Quotes} />
          <Route path="/Shipping" exact component={Shipping} />
          <Route path="/Invoices" exact component={Invoices} />
          <Route path="/Credits" exact component={Credits} />
          <Route path="/ViewBOM" exact component={ViewBOM} />
          <Route path="/ViewPS" exact component={ViewPS} />
          <Route path="/ViewProducts" exact component={ViewProducts} />
          <Route path="/ChangeCodes" exact component={ChangeCodes} />
          <Route path="/StockAdjust" exact component={StockAdjust} />
          <Route path="/ViewCustomer" exact component={ViewCustomer} />
          <Route path="/ViewSupplier" exact component={ViewSupplier} />
          <Route path="/StockReport" exact component={StockReport} />
          <Route path="/SaleReport" exact component={SaleReport} />
          <Route path="/BuyReport" exact component={BuyReport} />
        </Switch>
      </div>
    );
  }
}

export default App;
