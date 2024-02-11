import React from "react";
import { createContext, useState } from "react";

export const MyContext = createContext()

function Context({children}){

    let [darkTheme,setDarkTheme]=useState(false)

    return(
        <>
        <MyContext.Provider value={{darkTheme,setDarkTheme}}>
            {children}
        </MyContext.Provider> 
        </>
    )
}

export default Context