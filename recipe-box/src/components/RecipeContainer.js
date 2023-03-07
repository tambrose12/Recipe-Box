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

    

    const Bringup = newNew => {
        setRecipes([...recipes, newNew])
    }

    return (
        <div>
            <h1>
                <AddNewRecipe Bringup={Bringup} />
                <RecipeBox recipes={recipes} />
            </h1>
        </div>

    )
}

export default RecipeContainer;