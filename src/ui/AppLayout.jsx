import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto pt-6">{children ?? <Outlet />}</div>
    </div>
  );
}

export default AppLayout;
