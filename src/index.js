// External imports
import React from "react";
import { render } from "react-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
