import useGetUserInfo from "./useGetUserInfo";
/**
 * @description This hook is used to check if the user has the permission to access certain pages
 * @returns the checkPermission function
 */
const useCheckPermission = () => {
  const admin = useGetUserInfo("venueManager");
  const auth = useGetUserInfo("accessToken");

  const checkPermission = (type) => {
    switch (type) {
      case "auth":
        return auth;
      case "admin":
        return admin;
      default:
        return false;
    }
  };
  return { checkPermission };
};

export default useCheckPermission;
