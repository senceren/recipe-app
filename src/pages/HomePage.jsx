import React, { useContext, useEffect } from "react";
import RecipeList from "../components/recipe-list/RecipeList.jsx";
import { Home } from "../components/home/Home.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

export const HomePage = () => {
  const { getUserProfile } = useContext(AuthContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      <Home />
      <RecipeList />
    </>
  );
};
