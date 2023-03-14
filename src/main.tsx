import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QuoteBox } from "./components/QuoteBox";
import "/src/index.css";
import Calculator from "./pages/Calculator";
import LandingPage from "./pages/LandingPage";
import LoginBox from "./pages/LoginBox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },

  {
    path: "/login",
    element: <LoginBox />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
