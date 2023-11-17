import { createContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService.jsx";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));
  const [user, setUser] = useState({});

  const login = async (email, password) => {
    try {
      const response = await AuthService.login(email, password);
      if (response.access_token) {
        setAuth(JSON.parse(localStorage.getItem("user")));
        return true;
      }
    } catch (error) {
      setAuth(false);
      console.log("There is an error while authentitcation", error);
      return false;
    }
  };

  const logout = () => {
    AuthService.logout();
    setAuth(false);
  };

  const getUserProfile = async () => {
    const response = await axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).access_token
          }`,
        },
      })
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, user, getUserProfile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
