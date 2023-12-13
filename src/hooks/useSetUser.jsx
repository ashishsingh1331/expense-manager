import supabase from "../services/supabase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

function useSetUser() {
  const [session, setSession] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    dispatch(setUser(session));
  }, [session, dispatch]);

  return { session };
}

export default useSetUser;
