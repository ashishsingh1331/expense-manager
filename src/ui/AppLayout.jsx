import { Outlet } from "react-router-dom";
import Header from "./Header";
import supabase from "../services/supabase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

function AppLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setUser(session));
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setUser(session));
    });
    return () => subscription.unsubscribe();
  }, []);
  return (
    <div>
      <Header />
      <div className="container mx-auto pt-6">{children ?? <Outlet />}</div>
    </div>
  );
}

export default AppLayout;
