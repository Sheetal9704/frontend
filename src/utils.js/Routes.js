import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Login from "../components/Login";
import Feed from "../components/Feed";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Feed />,
      },
    ],
  },
]);

export default appRoutes;
