import { createContext, useState } from "react";




const AddEditContext = createContext();

export const AddEdit = ({children})=>{
    const [media, setMedia] = useState([]);
    const [venueInfo, setVenueInfo] = useState({});
    const tester = ()=>{
        console.log({venueInfo, media});
    }
    return(
        <AddEditContext.Provider value={{media, setMedia, venueInfo, setVenueInfo, tester}}>
            {children}
        </AddEditContext.Provider>
    )};

export default AddEditContext;