import useIsLoggedIn from "../hooks/useIsLoggedIn";
import { useNavigate } from "react-router-dom";
import useSetUser from "../hooks/useSetUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useIsLoggedIn();
  useSetUser();

  if (!isLoggedIn) {
    navigate("/login");
    return;
  }
  return <>{children}</>;
}

export default ProtectedRoute;
