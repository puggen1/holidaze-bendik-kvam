import { useContext } from "react";
import { UserContext } from "../context/userContext";
const useGetUserInfo = (type) => {
  const { user } = useContext(UserContext);
  return user[type] ? user[type] : false;
};

export default useGetUserInfo;



