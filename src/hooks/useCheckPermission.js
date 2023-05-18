import useGetUserInfo from "./useGetUserInfo";

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
    }
    return {checkPermission}
};



export default useCheckPermission;