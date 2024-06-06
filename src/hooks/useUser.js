import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/slices/user.slice";
import useGetUserEmail from "./useGetUserEmail ";

const useUser = () => {
  const dispatch = useDispatch();
  const email = useGetUserEmail();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUser(email));
  }, [dispatch]);

  return user;
};

export default useUser;
