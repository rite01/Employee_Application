import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";

import "./App.css";
import Employees from "../pages/Employees/Employees";

function App() {

  return (
    <>
      <div>
        <Employees />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
