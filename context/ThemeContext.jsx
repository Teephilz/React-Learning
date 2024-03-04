import { createContext, useContext, useState } from "react";

 const ThemeContext= createContext();

const ThemeProvider=({children})=>{
 const[isLight, toggle]= useState(true);

 const changeTheme=()=>{
    toggle((prev)=> prev = !prev)
};

return (<ThemeContext.Provider value={[isLight, changeTheme]}>
    {children}
</ThemeContext.Provider>);

}

const useToggleContext=()=>useContext(ThemeContext);

export {useToggleContext, ThemeProvider}