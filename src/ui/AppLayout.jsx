import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="container mx-auto pt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
