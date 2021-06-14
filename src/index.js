import "modern-normalize/modern-normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";

import { StrictMode } from "react";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
