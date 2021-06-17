import {createContext, useState } from "react";

export const CalculationContext = createContext({}); 

// Création d'un context pour calculer le nombre total de clickés
const CalculationContextProvider = ({children}) => {
    const [maValeur, setMaValeur] = useState(0);

    return (
        <CalculationContext.Provider value={{maValeur, setMaValeur}}>
            {children}
        </CalculationContext.Provider>
    )

}

export default CalculationContextProvider;