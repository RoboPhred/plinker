import "es6-promise/auto";
import "resize-observer-polyfill";

import "@/style.css";

import * as React from "react";
import * as ReactDOM from "react-dom";

import Root from "./root";

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.render(<Root />, rootEl);
}
