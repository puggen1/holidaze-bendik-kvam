import { useContext } from "react";
import AddEditContext from "../context/addEditContext";
//simple hook to make get venue data in modals
const useGetVenueData = () => {
    const {returnAllData} = useContext(AddEditContext);

    return returnAllData();
    
};

export default  useGetVenueData