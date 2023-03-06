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

    console.log(recipes)

    return (
        <div>
            <h1>
                <AddNewRecipe />
                <RecipeBox recipes={recipes} />
            </h1>
        </div>

    )
}

export default RecipeContainer;