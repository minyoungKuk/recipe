import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import useGetUserEmail from "./useGetUserEmail ";

const useUser = () => {
  const [user, setUser] = useState({});
  const email = useGetUserEmail();

  useEffect(() => {
    if (!email) return;
    const getUserInfo = async () => {
      const { data } = await supabase
        .from("users")
        .select()
        .eq("email", email)
        .single();

      if (data) {
        setUser(data);
      }
    };

    getUserInfo();
  }, [email]);

  return user;
};

export default useUser;
