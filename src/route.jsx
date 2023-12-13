import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./ui/Error";
import ExpenseList from "./features/expense/ExpenseList";
import ProtectedRoute from "./ui/ProtectedRoute";

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
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
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
        path: "/transactions",
        element: (
          <ProtectedRoute>
            <ExpenseList />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default routes;
