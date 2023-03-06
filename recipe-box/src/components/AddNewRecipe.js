import React, {useState} from "react";


function AddNewRecipe () {

    const [newName, setNewName] = useState('')
    const [newImage, setNewImage] = useState('')
    const [newDirections, setNewDirections] = useState('')
    const [newTime, setNewTime] = useState('')
    const [newCuisine, setNewCuisine] = useState('')
    


    const HandleSubmit = e => {
        e.preventDefault()

        const newRecipe = {
            name: newName,
            image: newImage,
            directions: newDirections,
            time: newTime,
            cuisine: newCuisine
        }
        console.log(newRecipe)
    }

    /////// still needs Bring up callback-funtction to add data to RecipeContainer 


    return (
        <form onSubmit={HandleSubmit} className="add-recipe-form">
        <h3>Create Recipe!</h3>
        <input onChange={(e)=> setNewName(e.target.value)}
          value={newName}
          type="text"
          name="name"
          placeholder="Enter a Recipe's name..."
          className="input-text"
        />
        <br />
        <input onChange={(e)=> setNewImage(e.target.value)}
        value={newImage}
          type="text"
          name="image"
          placeholder="Enter a Recipe's image URL..."
          className="input-text"
        />

        <br />
        <input onChange={(e)=> setNewDirections(e.target.value)}
        value={newDirections}
          type="text"
          name="directions"
          placeholder="Enter a Recipe's Directions..."
          className="input-text"
        />
        <br />
        <input onChange={(e)=> setNewTime(e.target.value)}
        value={newTime}
          type="text"
          name="time"
          placeholder="Enter a Recipe's Time..."
          className="input-text"
        />
        <br />
        <input onChange={(e)=> setNewCuisine(e.target.value)}
        value={newCuisine}
          type="text"
          name="cuisine"
          placeholder="Enter a Recipe's Cuisine..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Recipe"
          className="submit"
        />
      </form>
    )
}

export default AddNewRecipe;