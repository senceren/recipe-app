
import { useState, createContext } from "react";

export const UserPrefencesContext = createContext();

export const UserPrefencesProvider = ({children}) => {

  const[language,setLanguage] = useState("English");
  const[theme,setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const changeLanguage = (newLanguage) => setLanguage(newLanguage)


  return (
    <UserPrefencesContext.Provider value ={{theme,language,changeLanguage,toggleTheme}}>
    {children}
    </UserPrefencesContext.Provider>
  );
}
