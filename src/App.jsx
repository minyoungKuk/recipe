import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import GlobalModal from "./components/GlobalModal";
import { logout, setUser } from "./redux/slices/auth.slice";
import router from "./routes/router";
import supabase from "./supabaseClient";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data: session, error } = await supabase.auth.getSession();

        if (error) {
          throw error;
        }

        if (session) {
          dispatch(setUser(session.user));
        }
      } catch (error) {}
    };

    fetchSession();

    const sub = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        dispatch(setUser(session.user));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <GlobalModal />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
