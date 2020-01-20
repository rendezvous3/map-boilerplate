import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import '../public/scss/main.scss';

ReactDOM.render(
  <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
  </BrowserRouter>,
  document.getElementById("app")
);
