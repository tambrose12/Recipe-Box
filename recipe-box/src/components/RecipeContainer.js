import RecipeBox from "./RecipeBox"
import AddNewRecipe from "./AddNewRecipe";

function RecipeContainer () {

    return (
        <div>
            <h1>
                <AddNewRecipe />
                <RecipeBox />
            </h1>
        </div>

    )
} 

export default RecipeContainer;