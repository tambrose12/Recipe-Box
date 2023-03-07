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



    const bringUp = newNew => {
        setRecipes([...recipes, newNew])
    }

    return (
        <div>
            <AddNewRecipe bringUp={bringUp} />
            <RecipeBox recipes={recipes} />
        </div>

    )
}

export default RecipeContainer;