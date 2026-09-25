import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Login from "../components/Login";
import Feed from "../components/Feed";
import Profile from "../components/Profile";
import Connections from "../components/Connections";
import ConnectionRequests from "../components/ConnectionRequests";
import ChangePassword from "../components/ChangePassword";

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/connections",
        element: <Connections />,
      },
      {
        path: "/requests",
        element: <ConnectionRequests />,
      },
      {
        path: "/changePassword",
        element: <ChangePassword />,
      },
      {
        path: "/",
        element: <Feed />,
      },
    ],
  },
]);

export default appRoutes;
