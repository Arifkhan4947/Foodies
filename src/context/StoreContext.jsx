import { createContext } from "react";
import { food_list } from "../assets/assets";  // This food_list data came from assests folder where all the data store in single array and in this array contains a lots of multiple objects.


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {



    const contextValue = {
        food_list
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
