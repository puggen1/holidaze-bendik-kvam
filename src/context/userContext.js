import { createContext, useState } from "react";
import { baseUrl } from "../utils/constants";
import useSendData from "../hooks/useSendData";
const UserContext = createContext();
const User = ({ children }) => {
  const [user, setUser] = useState(
    window.localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {}
  );
  const loginUrl = baseUrl + "/auth/login";
  const registerUrl = baseUrl + "/auth/register";
  const { sender } = useSendData();
  //to login a user and add to state and local storage
  const login = async ({ email, password }) => {
    const dataToSend = { email, password };
    const response = await sender(dataToSend, loginUrl, "POST");
    if (response.accessToken) {
      localStorage.setItem("userInfo", JSON.stringify(response));
      setUser(response);
      return { success: true, message: "Login Successful" };
    } else {
      return { success: false, message: response.errors[0].message };
    }
  };
  //to register a user
  const register = async ({
    email,
    password,
    name,
    avatar = null,
    venueManager = false,
  }) => {
    const dataToSend = {
      email,
      password,
      name: name,
      avatar,
      venueManager,
    };
    const response = await sender(dataToSend, registerUrl, "POST");
    console.log(response);
    if (response.email) {
      return { success: true, message: "Registration Successful" };
    } else {
      return { success: false, message: response.errors[0].message };
    }
  };
  //to change avatar
  const changeAvatar = async (avatar) => {
    console.log(avatar);
    const url = baseUrl + `/profiles/${user.name}/media`;
    const dataToSend = { avatar: avatar };
    const response = await sender(dataToSend, url, "PUT", user.accessToken);
    if (response.avatar === avatar) {
      return {
        success: true,
        message: "Avatar Changed Successfully",
        content: response,
      };
    } else {
      return { success: false, message: response.errors[0].message };
    }
  };
  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser({});
    return { success: true, message: "Logout Successful" };
  };
  const updateUser = (data) => {
    localStorage.setItem("userInfo", JSON.stringify({ ...user, ...data }));
    setUser({ ...user, ...data });
  };
  return (
    <UserContext.Provider
      value={{ login, register, changeAvatar, logout, user, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default User;
export { UserContext };
