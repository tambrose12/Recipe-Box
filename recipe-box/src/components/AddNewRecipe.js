import React, { useState } from "react";
import IngredientInput from "./IngredientInput";



function AddNewRecipe({ bringUp }) {

  const [newName, setNewName] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newDirections, setNewDirections] = useState('')
  const [newTime, setNewTime] = useState(0)
  const [newCuisine, setNewCuisine] = useState('')

  const [newIngredients, setNewIngredients] = useState(['', '', '', '', '', '', '', '', ''])
  // const [numberOfIngredients, setNumberOfIngredients] = useState(1)

  const renderIngedientInputs = () => {
    return newIngredients.map((string, index) => {
      const updateIngredientArray = e => {
        const newIngredientArray = [...newIngredients]
        newIngredientArray[index] = e.target.value
        setNewIngredients(newIngredientArray)
      }
      return <input
        key={index}
        onChange={updateIngredientArray}
      />
    })
  }


  const handleSubmit = e => {
    e.preventDefault()

    const newRecipe = {
      name: newName,
      image: newImage,
      directions: newDirections,
      time: newTime,
      cuisine: newCuisine,
      ingredients: newIngredients
    }

    fetch("http://localhost:3002/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then(r => r.json())
      .then(newRecipe => bringUp(newRecipe))

  }





  /////// still needs Bring up callback-funtction to add data to RecipeContainer 


  return (
    <div id="container" >
      <form onSubmit={handleSubmit} className="add-recipe-form">
        <h3>Create Recipe!</h3>
        <label>Enter Recipe Name: </label>
        <br />
        <input onChange={(e) => setNewName(e.target.value)}
          value={newName}
          type="text"
          name="name"
          placeholder="Recipe name..."
          className="input-text"
        />
        <br />
        <label>Enter Recipe Image URL: </label>
        <input onChange={(e) => setNewImage(e.target.value)}
          value={newImage}
          type="text"
          name="image"
          placeholder="image URL..."
          className="input-text"
        />
        <br />
        <label>Enter Recipe Directions: </label>
        <input onChange={(e) => setNewDirections(e.target.value)}
          value={newDirections}
          type="text"
          name="directions"
          placeholder="Recipe directions..."
          className="input-text"
        />
        <br />
        <label>Enter Total Time in Minutes:</label>
        <input onChange={(e) => setNewTime(e.target.value)}
          value={newTime}
          type="number"
          name="time"
          placeholder="Time in minutes..."
          className="input-text"
        />
        <br />
        <label>Select Cuisine: </label>
        <br />
        <select onChange={(e) => setNewCuisine(e.target.value)}>
          <option>Choose Cuisine</option>
          <option>American</option>
          <option>Chinese</option>
          <option>Italian</option>
          <option>Japanese</option>
          <option>Mexican</option>
        </select>
        <br />
        {/* <label>Enter Number of Ingredients: </label>
        <input onChange={(e) => setNumberOfIngredients(e.target.value)}
          type="number"
          placeholder="How many ingredients are in the recipe"
        />
        <br /> */}
        <label>Enter Ingredients: </label>
        <br />
        {renderIngedientInputs()}
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Recipe"
          className="submit"
        />
      </form>
    </div>
  )
}

export default AddNewRecipe;