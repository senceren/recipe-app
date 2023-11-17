import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ element }) => {
  const { isAuth, getUserProfile } = useContext(AuthContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  return isAuth ? element : <Navigate to="/login" />;
};
