import React, { useState } from "react";
import { useInputs } from './hooks.js'
import Modal from "react-modal";
import { NavLink } from "react-router-dom";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};


function AddNewRecipe({ bringUp }) {

  const [newName, setNewName] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newDirections, setNewDirections] = useState('')
  const [newTime, setNewTime] = useState(0)
  const [newCuisine, setNewCuisine] = useState('')

  const theIngredientInputs = useInputs()
  const addAnotherInput = () => theIngredientInputs.add()
  const indexElements = theIngredientInputs.display()
  const clearForm = () => theIngredientInputs.clear()
  const [modalOpen, setModalOpen] = useState(false);


  const handleSubmit = e => {
    e.preventDefault()

    const newRecipe = {
      name: newName,
      image: newImage,
      liked: false,
      directions: newDirections,
      time: newTime,
      cuisine: newCuisine,
      ingredients: theIngredientInputs.value
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

    setNewName('')
    setNewImage('')
    setNewDirections('')
    setNewTime(0)
    setNewCuisine('')
    clearForm()
    e.target.reset()
    setModalOpen(true)
  }


  return (
    <div id="container" >
      <form onSubmit={handleSubmit} className="ui form add-recipe-form">
        <h3>Add a New Recipe to Recipe Box!</h3>
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
        <br />
        <input onChange={(e) => setNewImage(e.target.value)}
          value={newImage}
          type="text"
          name="image"
          placeholder="image URL..."
          className="input-text"
        />
        <br />
        <label>Enter Recipe Directions: </label>
        <br />
        <textarea onChange={(e) => setNewDirections(e.target.value)}
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
          <option>Greek</option>
          <option>Italian</option>
          <option>Japanese</option>
          <option>Mexican</option>
          <option>Thai</option>
        </select>
        <br />

        <label>Enter Ingredients: </label>
        <br />
        <div>
          {indexElements}
        </div>
        <br />
        <span className="submit ui gray button" onClick={addAnotherInput}>
          Add Another Ingredient
        </span>
        <br />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Recipe"
          className="submit ui teal button"
        />
      </form>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div>
          <h2>Success! Recipe Submitted!</h2>
          <NavLink
            exact
            to="/recipe-box"
            onClick={() => setModalOpen(false)} className="ui teal button">
            Back to Recipe Box
          </NavLink>
        </div>
      </Modal>
    </div>
  )
}

export default AddNewRecipe;