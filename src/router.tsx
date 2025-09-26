import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import Login from "./pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/auth",
    // element: <NonAuth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
