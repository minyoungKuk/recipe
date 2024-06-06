import { useEffect, useState } from "react";
import supabase from "../supabaseClient";

const useGetUserEmail = () => {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email);
      }
    };

    getUserInfo();
  }, []);

  return email;
};

export default useGetUserEmail;
