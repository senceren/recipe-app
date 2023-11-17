import { useContext, useState } from "react";
import "./AddRecipe.css";
import { APIContext } from "../../context/APIContext.jsx";


export function AddRecipe() {

  const {addNewRecipe,isLoading} = useContext(APIContext);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const[isSuccess, setIsSuccess] = useState(false);

  const [titleErr, setTitleErr] = useState(false)
  const [descriptionErr, setDescriptionErr] = useState(false)
  const [imageErr, setImageErr] = useState(false)
  const handleSubmit = (e) => {
      e.preventDefault()
      setTitleErr(false)
      setDescriptionErr(false)
      setImageErr(false)

      if(title.trim() && description.trim() && image.trim()){
        addNewRecipe({title,description,image})
        setIsSuccess(true)
        setTitle("")
        setDescription("")
        setImage("")
      } else {
        !title.trim() && setTitleErr(true)
        !description.trim() && setDescriptionErr(true)
        !image.trim() && setImageErr(true)
      }
 };

  return (
    <div className="add-box">
      <form onSubmit={handleSubmit}>
        <div className="add-recipe">
          <h3>Add Recipe</h3>
          {isSuccess && (<span className="success">Successfully added!</span>)}
          <input type="text" placeholder='Recipe Title' value={title} onChange={(e) => setTitle(e.target.value)}  />
          {titleErr && <p className='input-error'>Recipe Title can not be empty!</p>}
          <textarea placeholder='Recipe Description' rows={5} value={description} onChange={(e) => setDescription(e.target.value)}  />
          {descriptionErr && <p className='input-error'>Recipe Description can not be empty!</p>}
          <input type="text" placeholder='Recipe Image URL' value={image} onChange={(e) => setImage(e.target.value)}  />
          {imageErr && <p className='input-error'>Image URL can not be empty!</p>}
          <button className="add-button" type="submit">
          {isLoading.add ? "Loading..." : "Add Recipe"}
          </button>
        </div>
      </form>
    </div>
  );
}
