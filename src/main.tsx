import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import OtherPage from "./pages/otherComponent";

const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/other", Component: OtherPage },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
