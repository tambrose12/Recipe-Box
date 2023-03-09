import RecipeBox from "./RecipeBox"
import AddNewRecipe from "./AddNewRecipe";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

function RecipeContainer() {

    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    const [sort, setSort] = useState('')

    const updateSort = newValue => setSort(newValue)

    const byCuisine = (recipeObj) => {
        return sort === recipeObj.cuisine.toLowerCase()
    }

    const filteredByCuisine = sort ? recipes.filter(byCuisine) : [...recipes]

    console.log(filteredByCuisine)

    //set

    useEffect(() => {
        fetch("http://localhost:3002/recipes")
            .then(r => r.json())
            .then(setRecipes)
    }, [])

    function handleSearchQuery(someSearch) {
        setSearchQuery(someSearch.toLowerCase())
    }


    const displaySearchResults = filteredByCuisine.filter(r => {
        return r.name.toLowerCase().includes(searchQuery)
    })

    const bringUp = newNew => {
        setRecipes([...recipes, newNew])
    }



    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/recipe-box/new">
                    <AddNewRecipe bringUp={bringUp} />
                </Route>
                <Route path="/recipe-box">
                    <RecipeBox handleSearchQuery={handleSearchQuery}
                        recipes={displaySearchResults}
                        updateSort={updateSort}
                    />
                </Route>


            </Switch>

        </div>

    )
}

export default RecipeContainer;