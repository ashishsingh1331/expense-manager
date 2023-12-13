import { useEffect, useState } from "react";
import supabase from "../services/supabase";

function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(session);
    });
  }, []);
  return { isLoggedIn };
}

export default useIsLoggedIn;
