import {createContext, useState } from "react";

export const FilterContext = createContext({}); 

// Création d'un context pour filter les photographes par tags
const FilterContextProvider = ({children}) => {
    const [filterList, setFilterList] = useState([]);

    return (
        <FilterContext.Provider value={{filterList, setFilterList}}>
            {children}
        </FilterContext.Provider>
    )

}

export default FilterContextProvider;