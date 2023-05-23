import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import User from "./context/userContext";
import Booking from "./context/bookingContext";
import { AddEdit } from "./context/addEditContext";
import Snackbar from "./context/snackBarContext";
import SearchFilter from "./context/searchFilterContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AddEdit>
      <Snackbar>
        <User>
          <SearchFilter>
            <Booking>
              <App />
            </Booking>
          </SearchFilter>
        </User>
      </Snackbar>
    </AddEdit>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
