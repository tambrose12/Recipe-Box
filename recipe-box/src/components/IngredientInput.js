
function IngredientInput({ sendIngredientSetter }) {


    return (
        <input onClick={(e) => { sendIngredientSetter(e.target.value) }}
            type="text"
            name="ingredients"
            placeholder="Enter a Recipe's Ingredients..."
            className="input-text"
        />
    )

}

export default IngredientInput;