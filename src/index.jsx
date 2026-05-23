import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import {
  Analytics,
  BusinessReports,
  Feedback,
  Mail,
  Messages,
  Sales,
  StaffManage,
  StaffReports,
  Transactions,
} from "./pages/ModernPages";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "analytics", element: <Analytics /> },
      { path: "sales", element: <Sales /> },
      { path: "users", element: <UserList /> },
      { path: "users/newUser", element: <NewUser /> },
      { path: "users/:userId", element: <User /> },
      { path: "products", element: <ProductList /> },
      { path: "products/newProduct", element: <NewProduct /> },
      { path: "products/:productId", element: <Product /> },
      { path: "transactions", element: <Transactions /> },
      { path: "reports", element: <BusinessReports /> },
      { path: "mail", element: <Mail /> },
      { path: "feedback", element: <Feedback /> },
      { path: "messages", element: <Messages /> },
      { path: "staff/manage", element: <StaffManage /> },
      { path: "staff/reports", element: <StaffReports /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
