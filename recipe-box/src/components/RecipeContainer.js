import RecipeBox from "./RecipeBox"
import AddNewRecipe from "./AddNewRecipe";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

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
            <Switch>
                <Route path="/recipe-box">
                    <RecipeBox recipes={recipes} />
                </Route>
                <Route path="/recipe-box/new">
                    <AddNewRecipe bringUp={bringUp} />
                </Route>
            </Switch>

        </div>

    )
}

export default RecipeContainer;