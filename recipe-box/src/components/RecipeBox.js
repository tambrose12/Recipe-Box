import RecipeCard from "./RecipeCard";
import Search from "./Search";

function RecipeBox({ recipes, handleSearchQuery }) {

    const renderRecipeCard = recipes.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
    })

    return (
        <div>
            <Search handleSearchQuery={handleSearchQuery} />
            <div >
                <div id="box" className="ui three column grid three wide">
                    {renderRecipeCard}
                </div>
            </div>

        </div>
    )
}
export default RecipeBox;