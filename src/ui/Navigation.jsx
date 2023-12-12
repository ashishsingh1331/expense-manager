import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import supabase from "../services/supabase";

const Navigation = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  return (
    <nav className="w-full flex align-middle justify-between px-10 bg-white mb-4 py-3">
      <div className="logo flex align-middle justify-between items-center">
        <img src={Logo} className="w-[40px]" alt="" />
        <span className="text-3xl">$pendee</span>
      </div>

      <div className="nav flex items-center gap-4">
        {user && (
          <>
            <Link
              className="text-md font-semibold text-gray-500"
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-md font-semibold text-gray-500"
              to="/transactions"
            >
              Transactions
            </Link>
            {/* <Link
              className="text-md font-semibold text-gray-500"
              to="/settings"
            >
              Settings
            </Link> */}
            <button
              className="text-md font-semibold text-gray-500"
              onClick={() => {
                supabase.auth.signOut();
                navigate("/login");
              }}
            >
              Sign out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
