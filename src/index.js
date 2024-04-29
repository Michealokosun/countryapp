import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detailspage from "./component/Detailspage";
import { Globalstate } from "./gobalcontex";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Globalstate>
        <App />
      </Globalstate>
    ),
  },
  {
    path: "/:countryname",
    element: (
      <Globalstate>
        <Detailspage />
      </Globalstate>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
