import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import store from "./store";
//to demostrate/run store.js file
store.dispatch({ type: "account/deposit", payload: 500 });
console.log(store.getState());

//install redux package: run i react-redux, then link store to App for use by rapping it in redux Provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
