import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navigation = () => {
  return (
      <nav className="w-full flex align-middle justify-between px-10 bg-white mb-4 py-3">
        <div className="logo flex align-middle justify-between items-center">
          <img src={Logo} className="w-[40px]" alt="" />
          <span className="text-3xl">$pendee</span>
        </div>

        <div className="nav flex items-center gap-4">
          <Link
            className="text-md font-semibold text-gray-500"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-md font-semibold text-gray-500"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-md font-semibold text-gray-500"
            to="/settings"
          >
            Settings
          </Link>
          <Link className="text-md font-semibold text-gray-500" to="/login">
            Login
          </Link>
        </div>
      </nav>
  );
};

export default Navigation;
