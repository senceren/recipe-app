import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const APIContext = createContext();

export const APIProvider = ({ children }) => {

  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState({read: false, add: false, delete:false})

  const addNewRecipe = async ({title, description, image}) => {
    setIsLoading((prevIsLoading) => ({...prevIsLoading, add: true}))
    const newRecipe = {title, description, image};
    const response = await axios
    .post("http://localhost:3002/fakeRecipes", newRecipe)
    if(response.status === 201){
      setRecipes((prevRecipeList) => [...prevRecipeList, response.data])
    }
    setIsLoading((prevIsLoading) => ({...prevIsLoading, add: false}))
  }

  const deleteRecipe = async (id) => {
    setIsLoading((prevIsLoading) => ({...prevIsLoading, delete: true}))
    const response = await axios.delete(`http://localhost:3002/fakeRecipes/${id}`)
    if(response.status === 200) {
      setRecipes((prevRecipeList) => prevRecipeList.filter((recipe) => recipe.id !== id))
    }
    setIsLoading((prevIsLoading) => ({...prevIsLoading, delete: false}))
  }

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setIsLoading((prevIsLoading) => ({...prevIsLoading, read:true}))
        const response = await axios
        .get("http://localhost:3002/fakeRecipes")
        .then((response) => {
          setRecipes(response.data)
        })
        setIsLoading((prevIsLoading) => ({...prevIsLoading, read:false}))
      } catch (error) {
        console.error("There was an error fetching the recipes!", error)
      }
    }
    getRecipes()
  }, []);


  return (
    <APIContext.Provider value={{ recipes, isLoading, addNewRecipe, deleteRecipe }}>
      {children}
    </APIContext.Provider>
  );
};
