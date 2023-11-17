
import { APIContext } from '../../context/APIContext.jsx';
import './RecipeCard.css';
import { useContext, useState } from 'react';

const RecipeCard = ({title,description,image, id}) => {

  const {deleteRecipe} = useContext(APIContext);
  const [isDeletedLoading, setIsDeletedLoading] = useState(false)

  return (
    <div className='recipe-card'>
        <img className='recipe-image' src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={async () => {
          setIsDeletedLoading(true)
          await deleteRecipe(id)
          setIsDeletedLoading(false)
        }} >
          {isDeletedLoading ? "Loading..." : "Sil"}
        </button>
    </div>

  )
}

export default RecipeCard
