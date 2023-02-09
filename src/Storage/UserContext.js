import { createContext } from "react";
import { useContext } from "react";

export const userContext = createContext({user: "Comprador"});

export function UserContextProvider(props){
    return(
        <userContext.Provider value= { {user: "Cliente"} }>
        {props.children}
        </userContext.Provider>
    )
}