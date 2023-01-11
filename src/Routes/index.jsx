import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout/main";
import HistoryOrder from "../pages/HistoryOrder/main";
import Home from "../pages/Home/main";
import Login from "../pages/Login/main";
import Signup from "../pages/Signup/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:gameName",
    element: <Checkout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/history-order",
    element: <HistoryOrder />,
  },
]);
