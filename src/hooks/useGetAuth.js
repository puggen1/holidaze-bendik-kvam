import { useContext } from "react";
import { UserContext } from "../context/userContext";
const useGetAuth = () => {
  const { user } = useContext(UserContext);
  return user.accessToken ? user.accessToken : false;
};

export default useGetAuth;
