import {useState} from "react";


const RecipeFront = ({recipe}) => {
    return (
        <div>
            <h2>{recipe.name}</h2>
         <p>{`Total Time ${recipe.time} minutes`} | {recipe.cuisine}</p>
         <img src={recipe.image} alt={recipe.name} />
        </div>
    )
}

const RecipeBack = ({recipe, renderIngredient}) => {
    return (
        <div>
            <ul>
                <h3>Ingredients</h3>
                {renderIngredient}
            </ul>
            <h3>Directions</h3>
            <p>{recipe.directions}</p>
        </div>

    )
}


function RecipeCard({ recipe}) {
    const [showFront, setShowFront] = useState(true)

    const toggleFront = () => {
        setShowFront(showFront => !showFront)
    }

    const renderIngredient = recipe.ingredients.map((ingredient, index) => {
        return <li key={recipe.name + index}>{ingredient}</li>
    })


    return (

        <div onClick={toggleFront} className="ui three wide column image card">
             {showFront ? <RecipeFront recipe={recipe} /> : <RecipeBack renderIngredient={renderIngredient} recipe={recipe} /> }
        </div>

    )
}

export default RecipeCard;