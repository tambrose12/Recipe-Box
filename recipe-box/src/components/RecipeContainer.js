import RecipeBox from "./RecipeBox"
import AddNewRecipe from "./AddNewRecipe";
import { useState, useEffect } from "react";

function RecipeContainer() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch("http://localhost:3002/recipes")
            .then(r => r.json())
            .then(setRecipes)
    }, [])



    const bringup = newNew => {
        setRecipes([...recipes, newNew])
    }

    return (
        <div>
            <h1>
                <AddNewRecipe bringup={bringup} />
                <RecipeBox recipes={recipes} />
            </h1>
        </div>

    )
}

export default RecipeContainer;