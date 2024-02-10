import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Router/Router.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterProvider router={router} />
    </BrowserRouter>
  </React.StrictMode>
);
