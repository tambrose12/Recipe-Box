import RecipeBox from "./RecipeBox"
import AddNewRecipe from "./AddNewRecipe";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

function RecipeContainer() {

    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    

    useEffect(() => {
        fetch("http://localhost:3002/recipes")
            .then(r => r.json())
            .then(setRecipes)
    }, [])

function handleSearchQuery (someSearch) {
        setSearchQuery(someSearch.toLowerCase())
    }


    const displaySearchResults = recipes.filter(r =>  {
       return r.name.toLowerCase().includes(searchQuery)
    })

    const bringUp = newNew => {
        setRecipes([...recipes, newNew])
    }

    return (
        <div>
            <Switch>
                <Route path="/recipe-box">
                    <RecipeBox handleSearchQuery={handleSearchQuery} recipes={displaySearchResults} />
                </Route>
                <Route path="/recipe-box/new">
                    <AddNewRecipe bringUp={bringUp} />
                </Route>
            </Switch>

        </div>

    )
}

export default RecipeContainer;