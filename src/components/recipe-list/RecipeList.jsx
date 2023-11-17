import { useContext } from "react";
import RecipeCard from "../recipe-card/RecipeCard.jsx";
import "./RecipeList.css";
import { APIContext } from "../../context/APIContext.jsx";

const RecipeList = () => {

  const {recipes,isLoading} = useContext(APIContext);

  return (
    <div className="recipe-list">
      {isLoading.read && <p>Loading...</p>}
      {recipes.map((recipe) => (
        <RecipeCard {...recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
