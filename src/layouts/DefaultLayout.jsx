import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { logout } from "../redux/slices/auth.slice";

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
