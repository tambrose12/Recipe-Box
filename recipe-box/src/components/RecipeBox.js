import RecipeCard from "./RecipeCard";
import Search from "./Search";

function RecipeBox({ recipes, handleSearchQuery }) {

    const renderRecipeCard = recipes.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
    })

    return (
        <div>
            <Search handleSearchQuery={handleSearchQuery} />
            <div className="ui grid container" >
                {renderRecipeCard}
            </div>
            
        </div>
    )
}
export default RecipeBox;