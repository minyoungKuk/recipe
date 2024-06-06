import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import GlobalModal from "./components/GlobalModal";
import { logout, setUser } from "./redux/slices/auth.slice";
import router from "./routes/router";
import supabase from "./supabaseClient";

function App() {
  const dispatch = useDispatch();
  const [subscription, setSubscription] = useState(null);
  // const [ session, setSession ] = useState(null)

  useEffect(() => {
    let sub = null;

    const fetchSession = async () => {
      try {
        const { data: session } = await supabase.auth.getSession();

        if (session) {
          dispatch(setUser(session.user));
        }
      } catch (error) {
        console.error("session error", error.message);
      }
    };

    fetchSession();

    sub = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        dispatch(setUser(session.user));
      } else {
        dispatch(logout());
      }
    });

    setSubscription(sub);

    // return () => {
    //   if (subscription) {
    //     subscription.unsubscribe();
    //   }
    // };
  }, [dispatch]);

  return (
    <div>
      <GlobalModal />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
