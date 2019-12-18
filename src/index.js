import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import "./index.css";

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiPickersUtilsProvider>,
  document.getElementById("root")
);
