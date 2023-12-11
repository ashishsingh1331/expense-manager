import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard, { loader as expenseLoader } from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./ui/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <AppLayout>
        <Error />
      </AppLayout>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: expenseLoader,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default routes;
